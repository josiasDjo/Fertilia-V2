export const FadeContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

export const FadeItem = {
    hidden: { opacity: 0, y: 5 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.5 },
    },
}