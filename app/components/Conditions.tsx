"use client";

import { useState } from "react";

const conditions = [
    {
        title: "Migraine",
        icon: "🧠",
        symptoms:
            "Severe headache, nausea, vomiting, sensitivity to light and sound.",
        causes:
            "Stress, hormonal changes, sleep disturbances, certain foods and genetics.",
    },
    {
        title: "Stroke",
        icon: "🧠",
        symptoms:
            "Sudden weakness, facial drooping, speech difficulty, vision problems.",
        causes:
            "Blocked or ruptured blood vessels, high blood pressure, diabetes, smoking.",
    },
    {
        title: "Epilepsy",
        icon: "🧠",
        symptoms:
            "Seizures, loss of awareness, unusual sensations, temporary confusion.",
        causes:
            "Brain injury, infections, genetics, developmental disorders.",
    },
    {
        title: "Vertigo",
        icon: "🧠",
        symptoms:
            "Dizziness, spinning sensation, nausea, balance problems.",
        causes:
            "Inner ear disorders, infections, migraines, head injuries.",
    },
    {
        title: "Parkinson's Disease",
        icon: "🧠",
        symptoms:
            "Tremors, slow movement, muscle stiffness, balance issues.",
        causes:
            "Loss of dopamine-producing brain cells, genetics, environmental factors.",
    },
    {
        title: "Neuropathy",
        icon: "🧠",
        symptoms:
            "Numbness, tingling, burning pain, muscle weakness.",
        causes:
            "Diabetes, infections, injuries, autoimmune diseases.",
    },
];

export default function Conditions() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    const handleFlip = (index: number) => {
        if (flippedCard === index) {
            setFlippedCard(null);
        } else {
            setFlippedCard(index);
        }
    };

    return (
        <section
            id="conditions"
            className="py-24 px-8 bg-slate-100"
        >
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold mb-16">
                    Conditions Treated
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {conditions.map((condition, index) => (
                        <div
                            key={index}
                            className="h-72 perspective cursor-pointer"
                            onClick={() => handleFlip(index)}
                        >
                            <div
                                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flippedCard === index ? "rotate-y-180" : ""
                                    }`}
                            >

                                {/* Front */}
                                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center items-center">

                                    <div className="text-6xl mb-6">
                                        {condition.icon}
                                    </div>

                                    <h3 className="text-3xl font-bold text-center">
                                        {condition.title}
                                    </h3>

                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-blue-900 text-white rounded-3xl shadow-lg p-6 flex flex-col justify-center">

                                    <h3 className="text-xl font-bold mb-4">
                                        {condition.title}
                                    </h3>

                                    <div className="mb-4">
                                        <p className="font-semibold">
                                            Symptoms:
                                        </p>

                                        <p className="text-sm text-blue-100">
                                            {condition.symptoms}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            Causes:
                                        </p>

                                        <p className="text-sm text-blue-100">
                                            {condition.causes}
                                        </p>
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