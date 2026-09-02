interface StatsProps {
    bgStyle?: string;
    textColor?: string;
    labelColor?: string;
    borderColor?: string;
}

export default function Stats({
    bgStyle = "bg-[#EAEBE7]",
    textColor = "text-[#5B6658]",
    labelColor = "text-[#1E2421]",
    borderColor = "border-[#8A9A86]/20",
}: StatsProps) {
    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "10,000+", label: "Patients Treated" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "24/7", label: "Emergency Care" },
    ];

    return (
        <section className={`${bgStyle} py-12 border-y ${borderColor}`}>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="p-4">
                        <p className={`text-4xl md:text-5xl font-extrabold mb-2 ${textColor}`}>
                            {stat.value}
                        </p>
                        <p className={`text-sm md:text-base font-medium ${labelColor}`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}