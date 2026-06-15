"use client";

import { useState } from "react";

export default function WhyChooseUs() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    const points = [
        {
            title: "Experienced Care",
            icon: "👨‍⚕️",
            description:
                "Extensive experience in diagnosing and managing a wide range of neurological disorders with patient-focused care.",
        },
        {
            title: "Modern Diagnostics",
            icon: "🔬",
            description:
                "Advanced diagnostic techniques help ensure accurate evaluations and effective treatment planning.",
        },
        {
            title: "Personalized Treatment",
            icon: "📋",
            description:
                "Every patient receives an individualized treatment plan tailored to their unique condition and needs.",
        },
        {
            title: "Compassionate Support",
            icon: "❤️",
            description:
                "Dedicated support and guidance throughout diagnosis, treatment, recovery, and long-term care.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {points.map((point, index) => (

                        <div
                            key={index}
                            className="h-[320px] cursor-pointer"
                            style={{ perspective: "1000px" }}
                            onClick={() =>
                                setFlippedCard(
                                    flippedCard === index ? null : index
                                )
                            }
                        >

                            <div
                                className="relative w-full h-full duration-700"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transition: "transform 0.7s",
                                    transform:
                                        flippedCard === index
                                            ? "rotateY(180deg)"
                                            : "rotateY(0deg)",
                                }}
                            >

                                {/* FRONT */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-white
                                        rounded-3xl
                                        shadow-lg
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        text-center
                                        p-8
                                    "
                                    style={{
                                        backfaceVisibility: "hidden",
                                    }}
                                >
                                    <div className="text-6xl mb-6">
                                        {point.icon}
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4">
                                        {point.title}
                                    </h3>
                                </div>

                                {/* BACK */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-blue-900
                                        text-white
                                        rounded-3xl
                                        shadow-lg
                                        flex
                                        items-center
                                        justify-center
                                        text-center
                                        p-6
                                    "
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    <p className="text-lg leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </div>
        </section>
    );
}