type HeroProps = {
    title: string;
    subtitle: string;
};

export default function Hero({
    title,
    subtitle,
}: HeroProps) {
    return (
        <section className="bg-gradient-to-r from-blue-950 to-slate-900 text-white py-32">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <p className="uppercase tracking-widest text-blue-300 mb-4">
                    Advanced Neurology Care
                </p>

                <h1 className="text-6xl font-bold mb-6">
                    {title}
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    {subtitle}
                </p>

                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition">
                    Book Appointment
                </button>

            </div>
        </section>
    );
}