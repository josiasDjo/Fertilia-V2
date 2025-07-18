export const scrollToPrograms = (link) => {
    const element = document.getElementById(link)
    if (element) {
        const yOffset = -40
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
    }
}