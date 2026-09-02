interface TestimonialItem {
    name: string;
    text: string;
    relation?: string;
}

const sharadaTestimonials: TestimonialItem[] = [
    {
        name: "Priya Sharma",
        relation: "Parent of Pediatric Patient",
        text: "Dr. Sharada was exceptionally gentle and patient with my 7-year-old during his seizure evaluation. We felt completely supported.",
    },
    {
        name: "Suresh Verma",
        relation: "Adult Neurology Patient",
        text: "Dr. Sharada's targeted treatment plan made a massive difference in managing my chronic vertigo. Very attentive care.",
    },
    {
        name: "Kavitha Rao",
        relation: "Parent of Pediatric Patient",
        text: "The developmental assessment for our child gave us total clarity and a clear roadmap forward. Highly recommended!",
    },
];

export default function Testimonials2() {
    return (
        <section id="testimonials" className="py-20 bg-slate-100/60">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Patient & Family Stories
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Read how our specialized adult and pediatric care has impacted families.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {sharadaTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between"
                        >
                            <div className="mb-6">
                                {/* Champagne Star Rating */}
                                <div className="flex text-[#C59B6A] mb-4 text-lg">
                                    ★ ★ ★ ★ ★
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed italic">
                                    &quot;{item.text}&quot;
                                </p>
                            </div>

                            <div className="border-t border-slate-100 pt-4">
                                <h3 className="font-bold text-slate-900 text-base">
                                    {item.name}
                                </h3>
                                {item.relation && (
                                    <p className="text-xs text-[#B58B5A] font-medium mt-0.5">
                                        {item.relation}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}