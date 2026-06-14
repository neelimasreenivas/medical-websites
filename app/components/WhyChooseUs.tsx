export default function WhyChooseUs() {
    const features = [
        {
            title: "Experienced Care",
            desc: "15+ years of neurological expertise.",
            icon: "👨‍⚕️",
        },
        {
            title: "Modern Diagnostics",
            desc: "Advanced testing and imaging.",
            icon: "🧠",
        },
        {
            title: "Personalized Treatment",
            desc: "Customized care plans for every patient.",
            icon: "📋",
        },
        {
            title: "Compassionate Support",
            desc: "Friendly guidance throughout recovery.",
            icon: "❤️",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
                Why Choose Us
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center"
                    >
                        <div className="text-5xl mb-4">
                            {feature.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {feature.title}
                        </h3>

                        <p className="text-gray-600">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}