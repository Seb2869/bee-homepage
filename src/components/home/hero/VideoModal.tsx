import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { BiX } from 'react-icons/bi';
import { APP_DEMO_YT_VIDEO } from '../../../constants/common.constants';
import { videoModalVariants } from '../../../constants/variants';

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={videoModalVariants.backDropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[200] w-screen h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 opacity-0 pointer-events-none"
                >
                    <motion.div
                        ref={modalRef}
                        className="relative w-full max-w-6xl aspect-video bg-black shadow-lg"
                        variants={videoModalVariants.modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="close"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
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
                                src={`https://www.youtube.com/embed/${APP_DEMO_YT_VIDEO}?controls=1&autoplay=1&rel=0`}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
