export default function Stats() {
    const stats = [
        "15+ Years Experience",
        "10,000+ Patients",
        "24/7 Emergency Support",
        "Advanced Diagnostics",
    ];

    return (
        <section className="bg-blue-950 text-white py-16">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-8 text-center">

                    {stats.map((item) => (
                        <div
                            key={item}
                            className="border border-blue-700 rounded-xl p-6"
                        >
                            <h3 className="text-2xl font-bold">
                                {item}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}