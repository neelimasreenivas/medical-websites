export default function WhyChooseUs2() {
    const points = [
        {
            title: "Evidence-Based Neurology",
            description:
                "Clinical decisions guided by current neurological research and best practices.",
        },
        {
            title: "Individualized Care Plans",
            description:
                "Treatment strategies tailored to each patient's symptoms, goals and lifestyle.",
        },
        {
            title: "Comprehensive Evaluation",
            description:
                "Thorough assessment of neurological conditions for accurate diagnosis and management.",
        },
        {
            title: "Long-Term Patient Support",
            description:
                "Continuous guidance throughout treatment, recovery and follow-up care.",
        },
    ];

    return (
        <section className="py-24 px-8 bg-slate-50">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <span className="text-emerald-700 font-semibold uppercase tracking-wider">
                        Why Patients Choose Us
                    </span>

                    <h2 className="text-5xl font-bold text-slate-900 mt-4">
                        Compassionate Expertise
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {points.map((point) => (

                        <div
                            key={point.title}
                            className="
                                bg-white
                                rounded-3xl
                                p-10
                                shadow-sm
                                hover:shadow-lg
                                transition
                            "
                        >

                            <div className="flex items-start gap-5">

                                <div className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-emerald-100
                                    flex
                                    items-center
                                    justify-center
                                    flex-shrink-0
                                ">
                                    ✓
                                </div>

                                <div>

                                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                                        {point.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed">
                                        {point.description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}