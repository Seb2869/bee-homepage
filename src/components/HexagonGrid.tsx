import React, { useEffect, useRef, useState } from 'react';

type BgGridItem = { x: number; y: number };

type HexagonGridProps = {
    disableMouseMovement: boolean;
};

const HEXAGON_WIDTH = 56,
    HEXAGON_HEIGHT = 64,
    GAP = 5,
    horizontalSpacing = HEXAGON_WIDTH + GAP,
    verticalSpacing = HEXAGON_HEIGHT * 0.75 + GAP;

export const HexagonGrid: React.FC<HexagonGridProps> = ({ disableMouseMovement }) => {
    const bgContainerRef = useRef<HTMLDivElement | null>(null),
        [bgGrid, setBgGrid] = useState<BgGridItem[]>([]),
        [persistentHexes, setPersistentHexes] = useState<Set<number>>(new Set()),
        [rippleHexes, setRippleHexes] = useState<Set<number>>(new Set()),
        lastMouseTime = useRef(Date.now()),
        lastMousePosition = useRef({ x: 0, y: 0 });

    const calculateGridSize = () => {
        if (!bgContainerRef.current) return;

        const rows = Math.ceil(bgContainerRef.current.offsetHeight / verticalSpacing),
            columns = Math.ceil(bgContainerRef.current.offsetWidth / horizontalSpacing),
            newGrid: BgGridItem[] = [];

        for (let row = 0; row < rows; row++) {
            const isOdd = row % 2 === 1,
                offsetX = isOdd ? -horizontalSpacing / 2 : 0;

            for (let col = 0; col < (isOdd ? columns + 1 : columns); col++) {
                const x = col * horizontalSpacing + offsetX,
                    y = row * verticalSpacing;
                newGrid.push({ x, y });
            }
        }

        setBgGrid(newGrid);
    };

    useEffect(() => {
        calculateGridSize();
        window.addEventListener('resize', calculateGridSize);
        return () => window.removeEventListener('resize', calculateGridSize);
    }, []);

    useEffect(() => {
        const radius = 40,
            rippleDuration = 300;

        const handleMouseMove = (e: MouseEvent) => {
            if (!bgContainerRef.current) return;

            const rect = bgContainerRef.current.getBoundingClientRect(),
                mouseX = e.clientX - rect.left,
                mouseY = e.clientY - rect.top,
                now = Date.now(),
                deltaTime = now - lastMouseTime.current,
                dx = mouseX - lastMousePosition.current.x,
                dy = mouseY - lastMousePosition.current.y,
                speed = Math.sqrt(dx * dx + dy * dy) / deltaTime;

            lastMouseTime.current = now;
            lastMousePosition.current = { x: mouseX, y: mouseY };

            const newPersistent = new Set<number>(),
                newRipple = new Set<number>();

            bgGrid.forEach((hex, index) => {
                const hx = hex.x + HEXAGON_WIDTH / 2,
                    hy = hex.y + HEXAGON_HEIGHT / 2,
                    dist = Math.hypot(hx - mouseX, hy - mouseY);

                if (dist < radius) {
                    newPersistent.add(index);

                    if (speed > 0.3 && !rippleHexes.has(index)) {
                        newRipple.add(index);
                        setTimeout(() => {
                            setRippleHexes((prev) => {
                                const updated = new Set(prev);
                                updated.delete(index);
                                return updated;
                            });
                        }, rippleDuration);
                    }
                }
            });

            setPersistentHexes(newPersistent);
            if (newRipple.size > 0) {
                setRippleHexes((prev) => new Set([...prev, ...newRipple]));
            }
        };

        const handleScroll = () => {
            const now = Date.now();
            if (now - lastMouseTime.current > 100) {
                setPersistentHexes(new Set());
            }
        };

        if (!disableMouseMovement) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('scroll', handleScroll, true);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('scroll', handleScroll, true);
            };
        }
    }, [bgGrid, rippleHexes, disableMouseMovement]);

    const isActive = (index: number) => persistentHexes.has(index) || rippleHexes.has(index);

    return (
        <div
            ref={bgContainerRef}
            className="z-10 absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-auto"
        >
            <div className="pointer-events-none absolute top-0 left-0 w-full h-full hexagon-grid-gradient z-[15]" />
            <div className="pointer-events-auto absolute top-0 left-0 w-full h-full z-10">
                {bgGrid.map((item, index) => (
                    <div
                        key={index}
                        className="hexagon hexagon-shape w-14 h-16 border-box bg-primary bg-opacity-10 p-[2px] absolute"
                        style={{ left: item.x, top: item.y }}
                    >
                        <div className="inner-hexagon hexagon-shape w-full h-full bg-black box-border">
                            <div
                                className={`hover-outer-hexagon hexagon-shape w-full h-full bg-primary p-[2px] transition-all duration-500 ease-in-out hidden xl:inline-block ${
                                    isActive(index) ? 'opacity-50' : 'opacity-0'
                                }`}
                            >
                                <div className="hover-hexagon hexagon-shape w-full h-full bg-black p-[5px]">
                                    <div
                                        className={`hover-inner-hexagon hexagon-shape w-full h-full bg-primary transition-transform duration-500 ease-in-out ${
                                            isActive(index) ? 'scale-100' : 'scale-0'
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
