interface NavbarProps {
    title?: string;
    subtitle?: string;
}

export default function Navbar({
    title = "Anu Neuro Care",
    subtitle = "Advanced Neurology Center",
}: NavbarProps) {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        {title}
                    </h1>

                    <p className="text-sm text-slate-500">
                        {subtitle}
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