"use client";

export default function Navbar2() {
    return (
        <nav className="bg-white shadow-md">

            <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

                <div>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Sharada Neuro Care
                    </h1>

                    <p className="text-slate-500 mt-1">
                        Specialized Neurology & Brain Health
                    </p>
                </div>

                <div className="hidden md:flex gap-10 text-lg">

                    <a
                        href="#about"
                        className="text-slate-700 hover:text-emerald-700 transition"
                    >
                        About
                    </a>

                    <a
                        href="#conditions"
                        className="text-slate-700 hover:text-emerald-700 transition"
                    >
                        Conditions
                    </a>

                    <a
                        href="#contact"
                        className="text-slate-700 hover:text-emerald-700 transition"
                    >
                        Contact
                    </a>

                </div>

            </div>

        </nav>
    );
}