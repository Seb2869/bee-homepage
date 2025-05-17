import { Variants } from 'framer-motion';

export const reviewCardVariants = {
    hidden: (dir: number) => ({
        opacity: 0,
        x: dir > 0 ? 40 : -40,
        scale: 0.95,
    }),
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
    exit: (dir: number) => ({
        opacity: 0,
        x: dir < 0 ? 40 : -40,
        scale: 0.95,
        transition: { duration: 0.2 },
    }),
};

export const accordionVariants = {
    open: {
        height: 'auto',
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

export const videoModalVariants: {
    backDropVariants: Variants;
    modalVariants: Variants;
} = {
    backDropVariants: {
        hidden: {
            opacity: 0,
            pointerEvents: 'none',
        },
        visible: {
            opacity: 1,
            pointerEvents: 'auto',
        },
        close: {
            opacity: 0,
            pointerEvents: 'none',
        },
    },
    modalVariants: {
        hidden: {
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
        close: {
            opacity: 0,
            scale: 0.95,
        },
    },
};
