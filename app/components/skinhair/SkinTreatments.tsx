"use client";

const treatments = [
    {
        icon: "✨",
        category: "Skin Aesthetics",
        title: "Acne & Scar Therapy",
        description: "Targeted chemical peels, microneedling, and laser resurfacing to restore clear, smooth skin texture.",
    },
    {
        icon: "🌿",
        category: "Trichology",
        title: "PRP Hair Regeneration",
        description: "Platelet-Rich Plasma therapy designed to stimulate dormant follicles and decrease hair thinning.",
    },
    {
        icon: "💎",
        category: "Anti-Aging Care",
        title: "Botox & Dermal Fillers",
        description: "Subtle, natural enhancements to smooth fine lines, restore contours, and refresh facial youthful elasticity.",
    },
    {
        icon: "☀️",
        category: "Laser Surgery",
        title: "Pigmentation & Laser Toning",
        description: "Advanced Q-switched laser care for stubborn melasma, sun spots, and uneven complexion.",
    },
    {
        icon: "💧",
        category: "Medi-Facials",
        title: "Hydra-Glow Treatments",
        description: "Deep pore cleansing, lymphatic drainage, and vitamin infusion for instant hydration and luminosity.",
    },
    {
        icon: "🔬",
        category: "Scalp Health",
        title: "Dandruff & Scalp Detox",
        description: "Clinical evaluation and anti-microbial treatments to alleviate chronic scalp inflammation.",
    },
];

export default function SkinTreatments() {
    return (
        <section id="treatments" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
                        Clinical Offerings
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-3 mb-4">
                        Specialized Aesthetic & Hair Therapies
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
                        Efficacy-driven dermatology protocols tailored to your unique skin profile and hair goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {treatments.map((item, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-3xl bg-rose-50/30 border border-rose-100 hover:bg-white hover:shadow-xl hover:border-rose-200 transition duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-rose-100 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                                {item.icon}
                            </div>
                            <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">
                                {item.category}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}