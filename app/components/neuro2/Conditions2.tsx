interface ConditionDetail {
    title: string;
    meaning: string;
    symptoms: string[];
    causes: string[];
}

const detailedConditions: ConditionDetail[] = [
    {
        title: "Pediatric Epilepsy & Seizures",
        meaning: "A neurological condition where sudden, temporary surges of electrical activity in a child's brain disrupt normal brain signals.",
        symptoms: [
            "Uncontrollable jerking movements of arms and legs",
            "Staring spells or temporary confusion",
            "Sudden loss of consciousness or awareness",
        ],
        causes: [
            "Genetic predispositions or family history",
            "Prenatal brain injury or oxygen deprivation during birth",
            "High fever (febrile seizures) or central nervous system infections",
        ],
    },
    {
        title: "Developmental Delays & Autism Spectrum",
        meaning: "Neurodevelopmental variations affecting how a child processes information, learns, communicates, and interacts socially.",
        symptoms: [
            "Delayed speech and language acquisition",
            "Difficulty with social cues and eye contact",
            "Repetitive behaviors or heightened sensory sensitivities",
        ],
        causes: [
            "Genetic variations and inherited chromosomal changes",
            "Premature birth or low birth weight",
            "Atypical early neuro-developmental brain growth",
        ],
    },
    {
        title: "Pediatric Migraine & Chronic Headaches",
        meaning: "Recurrent, throbbing head pain in children often accompanied by sensory sensitivity and nausea.",
        symptoms: [
            "Pulsating pain on one or both sides of the head",
            "Sensitivity to light, sound, or strong odors",
            "Nausea, vomiting, or abdominal discomfort",
        ],
        causes: [
            "Irregular sleep patterns, dehydration, or missed meals",
            "Genetic predisposition to heightened nerve sensitivity",
            "Academic or emotional stress and prolonged screen exposure",
        ],
    },
    {
        title: "Cerebral Palsy & Motor Disorders",
        meaning: "A group of disorders affecting muscle tone, movement, and posture due to damage to the developing brain.",
        symptoms: [
            "Stiffness or floppy muscle tone (spasticity or hypotonia)",
            "Lack of muscle coordination during voluntary movements",
            "Delays in reaching motor milestones like sitting or walking",
        ],
        causes: [
            "Damage to the brain before, during, or shortly after birth",
            "Severe fetal or infant infections (e.g., meningitis)",
            "Restricted blood supply or oxygen to the infant brain",
        ],
    },
    {
        title: "ADHD & Behavioral Neurology Care",
        meaning: "A neurobehavioral condition marked by ongoing patterns of inattention, hyperactivity, and impulsivity.",
        symptoms: [
            "Difficulty sustaining focus on tasks or instructions",
            "Excessive restlessness, fidgeting, or talking out of turn",
            "Impulsive decision-making and organizational challenges",
        ],
        causes: [
            "Imbalances in brain neurotransmitters (dopamine and norepinephrine)",
            "Genetic factors running within families",
            "Environmental influences during critical neurodevelopment",
        ],
    },
    {
        title: "Neuromuscular & Peripheral Nerve Disorders",
        meaning: "Conditions involving nerve damage or impaired communication between peripheral nerves and muscles.",
        symptoms: [
            "Progressive muscle weakness, cramping, or twitching",
            "Numbness, tingling, or burning sensations in limbs",
            "Loss of reflexes or motor fatigue during exertion",
        ],
        causes: [
            "Autoimmune nerve reactions (e.g., Guillain-Barré Syndrome)",
            "Congenital muscle or nerve dystrophies",
            "Post-viral nerve inflammation or metabolic dysfunction",
        ],
    },
];

export default function Conditions2() {
    return (
        <section id="conditions" className="py-20 bg-slate-100/70">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-[#B58B5A] tracking-wider uppercase bg-[#D4A373]/15 px-3 py-1 rounded-full border border-[#D4A373]/30">
                        Detailed Neurological Guide
                    </span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-3">
                        Specialized Conditions Treated
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        In-depth diagnostic insights into pediatric and adult neurological health.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid md:grid-cols-2 gap-8">
                    {detailedConditions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition duration-300"
                        >
                            <div>
                                {/* Header badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-bold text-[#C59B6A] bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/50">
                                        Condition 0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                    {item.title}
                                </h3>

                                {/* Definition */}
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <strong className="text-slate-900 block mb-1">What it is:</strong>
                                    {item.meaning}
                                </p>

                                {/* Symptoms & Causes Grid */}
                                <div className="grid sm:grid-cols-2 gap-6 text-xs">

                                    {/* Symptoms */}
                                    <div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 text-[11px] text-[#B58B5A] flex items-center gap-1">
                                            <span>•</span> Common Symptoms
                                        </h4>
                                        <ul className="space-y-1.5 text-slate-600">
                                            {item.symptoms.map((symptom, sIdx) => (
                                                <li key={sIdx} className="flex items-start gap-1.5">
                                                    <span className="text-[#C59B6A] font-bold">•</span>
                                                    <span>{symptom}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Causes */}
                                    <div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 text-[11px] text-emerald-800 flex items-center gap-1">
                                            <span>•</span> Primary Causes
                                        </h4>
                                        <ul className="space-y-1.5 text-slate-600">
                                            {item.causes.map((cause, cIdx) => (
                                                <li key={cIdx} className="flex items-start gap-1.5">
                                                    <span className="text-emerald-700 font-bold">•</span>
                                                    <span>{cause}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}