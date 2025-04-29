import React, { useEffect, useRef, useState } from 'react';

type BgGridItem = {
    x: number;
    y: number;
};

const HEXAGON_WIDTH = 56,
    HEXAGON_HEIGHT = 64,
    GAP = 5,
    horizontalSpacing = HEXAGON_WIDTH + GAP,
    verticalSpacing = HEXAGON_HEIGHT * 0.75 + GAP;

export const HexagonGrid: React.FC = () => {
    const bgContainerRef = useRef<HTMLDivElement | null>(null),
        [bgGrid, setBgGrid] = useState<BgGridItem[]>([]);

    const calculateGridSize = () => {
        if (bgContainerRef.current) {
            const rows = Math.ceil(bgContainerRef.current.offsetHeight / verticalSpacing),
                columns = Math.ceil(bgContainerRef.current.offsetWidth / horizontalSpacing),
                newGrid = [];

            for (let row = 0; row < rows; row++) {
                const isOdd = row % 2 === 1,
                    offsetX = isOdd ? -horizontalSpacing / 2 : 0;

                for (let col = 0; col < columns; col++) {
                    const x = col * horizontalSpacing + offsetX;
                    const y = row * verticalSpacing;
                    newGrid.push({ x, y });
                }
            }

            setBgGrid(newGrid);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', calculateGridSize);
        calculateGridSize();

        return () => {
            window.removeEventListener('resize', calculateGridSize);
        };
    }, []);

    return (
        <div
            ref={bgContainerRef}
            className="z-10 absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-auto"
        >
            <div className="pointer-events-none absolute top-0 left-0 w-full h-full grid-gradient-background z-[15]"></div>
            <div className="pointer-events-auto absolute top-0 left-0 w-full h-full z-10">
                {bgGrid.map((item, index) => (
                    <div
                        key={index}
                        className="hexagon hexagon-shape w-14 h-16 border-box bg-primary bg-opacity-10 p-[2px] absolute group"
                        style={{
                            left: item.x,
                            top: item.y,
                        }}
                    >
                        <div className="inner-hexagon hexagon-shape w-full h-full bg-black box-border">
                            <div className="hover-outer-hexagon hexagon-shape w-full h-full bg-primary p-[2px] opacity-0 transition-all duration-[800ms] xl:group-hover:opacity-100">
                                <div className="hover-hexagon hexagon-shape w-full h-full bg-black p-[5px]">
                                    <div className="hover-inner-hexagon hexagon-shape w-full h-full bg-primary scale-0 transition-all duration-[800ms] xl:group-hover:scale-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
