import React, { useEffect, useRef, useState } from 'react';
import { BiX } from 'react-icons/bi';

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
    const [shouldRender, setShouldRender] = useState(isOpen),
        modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timeout = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[200] w-screen h-screen flex items-center justify-center bg-black/80 px-4 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div
                ref={modalRef}
                className={`relative w-full max-w-4xl aspect-video bg-black shadow-lg transform transition-all duration-300 ${
                    isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-2'
                }`}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 -right-2 xl:top-2 xl:-right-10 text-white text-2xl z-10"
                    aria-label="Close"
                >
                    <BiX size={32} />
                </button>

                <div className="w-full h-full rounded overflow-hidden xl:rounded-md 2xl:rounded-lg">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/kFoXEwyOlbE?si=5TnUmJ35ruj6rkor"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};
