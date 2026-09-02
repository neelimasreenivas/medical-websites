export default function Testimonials2() {
    const testimonials = [
        {
            name: "Patient A",
            text: "The consultation was thorough and reassuring. The diagnosis and treatment plan were explained clearly.",
        },
        {
            name: "Patient B",
            text: "Excellent attention to detail and a very professional approach. I felt confident throughout my treatment.",
        },
        {
            name: "Patient C",
            text: "The doctor took time to listen and address every concern. Highly satisfied with the care provided.",
        },
    ];

    return (
        <section className="py-24 px-8 bg-white">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <span className="text-emerald-700 font-semibold uppercase tracking-wider">
                        Patient Experiences
                    </span>

                    <h2 className="text-5xl font-bold text-slate-900 mt-4">
                        Trusted By Patients
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {testimonials.map((testimonial) => (

                        <div
                            key={testimonial.name}
                            className="
                                bg-slate-50
                                rounded-3xl
                                p-8
                                shadow-sm
                                hover:shadow-lg
                                transition
                            "
                        >

                            <div className="text-emerald-600 text-4xl mb-6">
                                "
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                {testimonial.text}
                            </p>

                            <h4 className="font-semibold text-slate-900">
                                {testimonial.name}
                            </h4>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}