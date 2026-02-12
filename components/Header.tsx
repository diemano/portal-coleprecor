import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";

export function Header() {
    return (
        <header className="bg-[var(--color-primary-dark)] text-white shadow-md relative z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center space-x-4">
                    <Link href="/" className="hover:opacity-90 transition-opacity">
                        <Image
                            src="https://www.justicanossotrabalho.com.br/wp-content/uploads/2023/12/logo-3.png"
                            alt="Portal Coleprecor"
                            width={200}
                            height={50}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation - Right Aligned (ml-auto) */}
                <nav className="hidden md:flex items-center space-x-6 ml-auto mr-8">
                    {[
                        { name: "Início", href: "/" },
                        { name: "Notícias", href: "/noticias" },
                        { name: "O Coleprecor", href: "/sobre" },
                        { name: "Agenda", href: "/agenda" },
                        { name: "Contato", href: "/contato" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-medium hover:text-[var(--color-warning)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-warning)] rounded px-3 py-2"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Icons */}
                <div className="flex items-center space-x-4">
                    <button
                        aria-label="Buscar"
                        className="p-2 hover:bg-[var(--color-primary)] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-warning)]"
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        aria-label="Menu"
                        className="md:hidden p-2 hover:bg-[var(--color-primary)] rounded-full transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Decorative Bar */}
            <div className="h-1 bg-gradient-to-r from-[var(--color-success)] to-[var(--color-warning)]"></div>
        </header>
    );
}
