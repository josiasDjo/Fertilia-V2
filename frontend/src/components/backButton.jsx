

export default function BackButton() {
    return (
        <motion.button variants={FadeItem} type="button" id="closeSignin" onClick={handleNavigate} className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full text-center items-center justify-center flex w-10 h-10 closeSignin absolute top-16 left-6 text-2xl text-skin-text">
            <i className="fa-solid fa-arrow-left"></i>
        </motion.button>
    )
}