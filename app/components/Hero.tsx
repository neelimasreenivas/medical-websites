interface HeroProps {
    title?: string;
    subtitle?: string;
    bgStyle?: string;
    badgeText?: string;
    badgeStyle?: string;
    buttonStyle?: string;
    textColor?: string;
    subtitleColor?: string;
}

export default function Hero({
    title = "Sharada Neuro",
    subtitle = "Advanced Neurology Care",
    bgStyle = "bg-[#F2F4F3]",
    badgeText = "ADVANCED NEUROLOGY CARE",
    badgeStyle = "bg-[#EAEBE7] text-[#5B6658] border border-[#8A9A86]/20",
    buttonStyle = "bg-[#5B6658] hover:bg-[#8A9A86]",
    textColor = "text-[#1E2421]",
    subtitleColor = "text-[#5B6658]",
}: HeroProps) {
    return (
        <section className={`relative ${bgStyle} py-28 md:py-32 overflow-hidden transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 ${badgeStyle}`}>
                    {badgeText}
                </span>

                <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight ${textColor}`}>
                    {title}
                </h1>

                <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed ${subtitleColor}`}>
                    {subtitle}
                </p>

                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className={`${buttonStyle} hover:scale-105 transition duration-300 px-8 py-4 rounded-full font-semibold shadow-md text-white`}
                    >
                        Book Appointment
                    </a>
                </div>

            </div>
        </section>
    );
}