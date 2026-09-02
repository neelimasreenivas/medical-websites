interface ConditionDetail {
    title: string;
    meaning: string;
    symptoms: string[];
    causes: string[];
}

const defaultConditions: ConditionDetail[] = [
    {
        title: "Stroke & Cerebrovascular Care",
        meaning: "A medical emergency that occurs when blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients.",
        symptoms: [
            "Sudden numbness or weakness in the face, arm, or leg (especially on one side)",
            "Difficulty speaking, slurred speech, or trouble understanding",
            "Sudden severe headache, dizziness, or loss of balance",
        ],
        causes: [
            "Ischemic blockages caused by blood clots in cerebral arteries",
            "Hemorrhagic bleeding from ruptured brain blood vessels",
            "High blood pressure, high cholesterol, and cardiovascular disease",
        ],
    },
    {
        title: "Epilepsy & Seizure Disorders",
        meaning: "A chronic neurological disorder characterized by recurrent, unprovoked seizures due to abnormal electrical activity in the brain.",
        symptoms: [
            "Temporary confusion or staring spells",
            "Uncontrollable jerking movements of the arms and legs",
            "Loss of consciousness, awareness, or emotional control during episodes",
        ],
        causes: [
            "Genetic factors or family history of seizure disorders",
            "Head trauma, brain injury, or prior stroke",
            "Brain infections such as meningitis or encephalitis",
        ],
    },
    {
        title: "Migraine & Chronic Headaches",
        meaning: "A complex neurological condition causing severe, throbbing headache pain, usually accompanied by sensory disturbances and autonomic symptoms.",
        symptoms: [
            "Intense throbbing or pulsating pain on one side of the head",
            "Extreme sensitivity to light, sound, or smell",
            "Nausea, vomiting, or visual disturbances (aura)",
        ],
        causes: [
            "Neurochemical imbalances affecting nerve pathways and blood vessels",
            "Hormonal fluctuations, stress, or irregular sleep cycles",
            "Specific environmental or dietary triggers",
        ],
    },
    {
        title: "Parkinson's & Movement Disorders",
        meaning: "A progressive nervous system disorder that affects movement, balance, and motor control as dopamine-producing brain cells deteriorate.",
        symptoms: [
            "Rhythmic tremors in hands, arms, legs, or jaw at rest",
            "Slowed movement (bradykinesia) and muscle stiffness",
            "Impaired posture, gait imbalance, and speech changes",
        ],
        causes: [
            "Gradual loss of dopamine-producing neurons in the substantia nigra",
            "Combination of genetic mutations and environmental factors",
            "Accumulation of abnormal protein deposits (Lewy bodies) in brain cells",
        ],
    },
    {
        title: "Peripheral Neuropathy",
        meaning: "Damage to the peripheral nerves outside the brain and spinal cord, disrupting communication between the central nervous system and the rest of the body.",
        symptoms: [
            "Gradual onset of numbness, prickling, or tingling in feet or hands",
            "Sharp, jabbing, throbbing, or burning nerve pain",
            "Extreme sensitivity to touch and muscle weakness",
        ],
        causes: [
            "Uncontrolled diabetes mellitus (Diabetic Neuropathy)",
            "Vitamin deficiencies (especially B1, B6, and B12)",
            "Autoimmune diseases, nerve compression, or metabolic disorders",
        ],
    },
    {
        title: "Memory Disorders & Dementia Care",
        meaning: "An umbrella term for neurodegenerative conditions affecting memory, thinking ability, orientation, and daily social functioning.",
        symptoms: [
            "Persistent memory loss affecting daily activities and conversations",
            "Confusion about time, place, or familiar navigation routes",
            "Difficulty planning, problem-solving, or finding the right words",
        ],
        causes: [
            "Alzheimer's disease leading to amyloid plaque accumulation",
            "Vascular damage reducing blood flow to brain tissue",
            "Neurodegenerative changes in specific cortical brain regions",
        ],
    },
];

export default function Conditions() {
    return (
        <section id="conditions" className="py-20 bg-slate-100/70">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Comprehensive Neurological Guide
                    </span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-3">
                        Conditions We Treat
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        In-depth diagnostic insights into brain, spine, and nerve disorders.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid md:grid-cols-2 gap-8">
                    {defaultConditions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition duration-300"
                        >
                            <div>
                                {/* Header badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200/60">
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
                                        <h4 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-blue-800 flex items-center gap-1">
                                            <span>•</span> Common Symptoms
                                        </h4>
                                        <ul className="space-y-1.5 text-slate-600">
                                            {item.symptoms.map((symptom, sIdx) => (
                                                <li key={sIdx} className="flex items-start gap-1.5">
                                                    <span className="text-blue-600 font-bold">•</span>
                                                    <span>{symptom}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Causes */}
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-cyan-800 flex items-center gap-1">
                                            <span>•</span> Primary Causes
                                        </h4>
                                        <ul className="space-y-1.5 text-slate-600">
                                            {item.causes.map((cause, cIdx) => (
                                                <li key={cIdx} className="flex items-start gap-1.5">
                                                    <span className="text-cyan-600 font-bold">•</span>
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