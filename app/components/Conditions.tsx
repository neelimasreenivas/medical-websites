export default function Conditions() {
    const conditions = [
        "Migraine",
        "Stroke",
        "Epilepsy",
        "Vertigo",
        "Parkinson's Disease",
        "Neuropathy",
    ];

    return (
        <section id="conditions" className="bg-slate-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10">
                    Conditions Treated
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {conditions.map((condition) => (
                        <div
                            key={condition}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
                        >
                            <div className="text-4xl mb-4">
                                🧠
                            </div>

                            <h3 className="text-xl font-semibold">
                                {condition}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}