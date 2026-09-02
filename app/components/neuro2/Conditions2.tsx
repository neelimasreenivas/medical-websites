import AppointmentForm2 from "./AppointmentForm2";
export default function Conditions2() {
    const conditions = [
        "Headache & Migraine",
        "Stroke Care",
        "Epilepsy",
        "Vertigo & Dizziness",
        "Parkinson's Disease",
        "Peripheral Neuropathy",
        "Memory Disorders",
        "Movement Disorders",
    ];

    return (
        <section
            id="conditions"
            className="py-24 px-8 bg-white"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <span className="text-emerald-700 font-semibold uppercase tracking-wider">
                        Areas of Expertise
                    </span>

                    <h2 className="text-5xl font-bold text-slate-900 mt-4">
                        Neurological Conditions Managed
                    </h2>

                    <p className="text-slate-600 mt-6 max-w-3xl mx-auto">
                        Comprehensive evaluation, diagnosis and management
                        of a wide spectrum of neurological disorders.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {conditions.map((condition) => (

                        <div
                            key={condition}
                            className="
                                bg-slate-50
                                rounded-3xl
                                p-8
                                shadow-sm
                                hover:shadow-xl
                                hover:-translate-y-2
                                transition-all
                                duration-300
                                border
                                border-slate-100
                            "
                        >

                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">

                                <span className="text-2xl">
                                    🧠
                                </span>

                            </div>

                            <h3 className="text-xl font-semibold text-slate-900">
                                {condition}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}