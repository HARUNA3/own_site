import Link from "next/link";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
];

export default function Header() {
    return (
        <header className="border-b bg;white">
            <div className="mx-auto flex mac-w-5xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    Haru.dev
                </Link>

                <nav className="flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-gray-700 hover:text-black"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}