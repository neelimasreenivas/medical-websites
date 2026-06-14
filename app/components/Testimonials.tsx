export default function Testimonials() {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            text: "Dr. Jason provided exceptional care during my stroke recovery. Highly recommended.",
        },
        {
            name: "Priya Sharma",
            text: "The diagnosis was accurate and the treatment plan helped me manage migraines effectively.",
        },
        {
            name: "Anil Reddy",
            text: "Professional, compassionate, and very knowledgeable. Excellent neurology specialist.",
        },
    ];

    return (
        <section className="bg-slate-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Patient Testimonials
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <p className="text-gray-600 italic mb-6">
                                "{item.text}"
                            </p>

                            <h3 className="font-bold text-lg">
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}