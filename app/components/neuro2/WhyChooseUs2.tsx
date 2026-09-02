interface FeatureItem {
    title: string;
    description: string;
}

const whyChooseSharada: FeatureItem[] = [
    {
        title: "Pediatric & Adult Expertise",
        description: "Comprehensive neurological care tailored across all age groups with a gentle, child-friendly approach.",
    },
    {
        title: "Advanced Neuro-Diagnostics",
        description: "Equipped with state-of-the-art EEG and neuro-imaging modalities tailored for precise diagnosis.",
    },
    {
        title: "Holistic Rehabilitation Plans",
        description: "Customized care integration combining medical therapy, neuro-rehabilitation, and lifestyle guidance.",
    },
    {
        title: "Family-Centered Consultations",
        description: "In-depth doctor consultations that prioritize parent education and active patient involvement.",
    },
];

export default function WhyChooseUs2() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Why Choose Sharada Neuro
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Dedicated to excellence in clinical neurology, neuro-diagnostics, and family-focused care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {whyChooseSharada.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#D4A373]/15 text-[#B58B5A] border border-[#D4A373]/30 mb-4">
                                    Feature 0{index + 1}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}