import GradientText from "./GradientText"

const Footer = () => {
    return (
        <footer style={{ fontFamily: "Poppins" }} className="bg-gradient-to-tr border-t border-slate-50/5 py-10 mt-20">

            <div className='text-center'>
                <h5 className="font-semibold text-4xl mb-3">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={10}
                        showBorder={false}
                    >
                        Get Touch
                    </GradientText>
                </h5>
                <p>For business inquiry please send email to <b>muelava@gmail.com</b></p>
                <br /><br /><br />
                <p className="text-sm">Muhammad Elang Hardifal | <b>{new Date().getFullYear()}</b></p>
            </div>
        </footer>
    )
}

export default Footer