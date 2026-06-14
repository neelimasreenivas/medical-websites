import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Anu Neuro Care
                    </h1>

                    <p className="text-sm text-slate-500">
                        Advanced Neurology Center
                    </p>
                </div>

                <div className="flex gap-8 text-slate-700 font-medium">
                    <a href="#about">About</a>
                    <a href="#conditions">Conditions</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}