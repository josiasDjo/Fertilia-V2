export const FadeContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
        ease: "easeOut",
        },
    },
}

export const FadeItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.6,
        ease: "easeOut",
        },
    },
};