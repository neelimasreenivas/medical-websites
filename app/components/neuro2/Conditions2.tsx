interface ConditionItem {
    title: string;
    description: string;
}

const pediatricConditions: ConditionItem[] = [
    {
        title: "Pediatric Epilepsy & Seizures",
        description: "Specialized evaluation, EEG monitoring, and safe therapeutic protocols for infants, children, and teens.",
    },
    {
        title: "Developmental Delays & Autism Care",
        description: "Early intervention strategies and neurodevelopmental assessments to support motor and cognitive growth.",
    },
    {
        title: "Pediatric Migraine & Headaches",
        description: "Child-friendly diagnostic approaches and gentle management plans for chronic pediatric headaches.",
    },
    {
        title: "Cerebral Palsy & Motor Disorders",
        description: "Comprehensive multidisciplinary plans to enhance mobility, manage spasticity, and foster independence.",
    },
    {
        title: "ADHD & Neurological Behavioral Care",
        description: "In-depth cognitive assessments and holistic management for attention and neuro-behavioral challenges.",
    },
    {
        title: "Neuromuscular & Nerve Disorders",
        description: "Diagnostic evaluation for congenital and acquired nerve or muscle weaknesses in young patients.",
    },
];

export default function Conditions2() {
    return (
        <section id="conditions" className="py-20 bg-slate-100/60">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Specialized Conditions Treated
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Expert clinical care spanning adult and pediatric neurological disorders.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pediatricConditions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 border border-slate-200/80"
                        >
                            <span className="text-2xl font-bold text-[#C59B6A] block mb-3">
                                0{index + 1}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
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