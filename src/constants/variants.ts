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
