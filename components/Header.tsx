"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const menuItems = [
    { name: "Home", href: "/" },
    {
        name: "Imprensa",
        href: "#",
        submenu: [
            { name: "Notícias", href: "/noticias" },
            { name: "Álbum de Fotos", href: "/albuns-de-fotos" },
        ],
    },
    {
        name: "Quem Somos",
        href: null, // Not clickable
        submenu: [
            { name: "Galeria Presidentes", href: "/quem-somos/galeria-presidentes" },
            { name: "Composição", href: "/quem-somos/composicao" },
            { name: "Relatórios das Gestões", href: "/quem-somos/relatorios" },
        ],
    },
    { name: "A Justiça do Trabalho", href: "/justica-do-trabalho" },
    { name: "Fale Conosco", href: "/contato" },
];

export function Header() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

    return (
        <header className="bg-[var(--color-primary-dark)] text-white shadow-md relative z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center space-x-4">
                    <Link href="/" className="hover:opacity-90 transition-opacity">
                        <Image
                            src="/logo-coleprecor.png"
                            alt="Portal Coleprecor"
                            width={280}
                            height={80}
                            className="h-[80px] w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1 ml-auto mr-8">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 text-sm font-medium hover:text-[var(--color-warning)] transition-colors rounded px-3 py-2"
                                >
                                    {item.name}
                                    {item.submenu && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                                </Link>
                            ) : (
                                <span
                                    className="flex items-center gap-1 text-sm font-medium hover:text-[var(--color-warning)] transition-colors rounded px-3 py-2 cursor-default select-none"
                                >
                                    {item.name}
                                    {item.submenu && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                                </span>
                            )}

                            {/* Dropdown */}
                            {item.submenu && openDropdown === item.name && (
                                <div className="absolute top-full left-0 mt-0 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 min-w-[220px] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                                    {item.submenu.map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            className="block px-4 py-2.5 text-sm hover:bg-[var(--color-primary-light,#e8f4fd)] hover:text-[var(--color-primary)] transition-colors"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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
                        className="lg:hidden p-2 hover:bg-[var(--color-primary)] rounded-full transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[var(--color-primary-dark)] border-t border-white/10 pb-4">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            {item.submenu ? (
                                <>
                                    <button
                                        className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
                                        onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.name ? null : item.name)}
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === item.name ? "rotate-180" : ""}`} />
                                    </button>
                                    {mobileSubmenuOpen === item.name && (
                                        <div className="bg-black/10">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block px-10 py-2.5 text-sm hover:bg-white/10 transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : item.href ? (
                                <Link
                                    href={item.href}
                                    className="block px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ) : null}
                        </div>
                    ))}
                </div>
            )}

            {/* Description Bar */}
            <div className="bg-[#1e293b] py-1 text-center border-t border-white/10">
                <p className="text-[10px] md:text-xs font-medium text-gray-300 px-4 uppercase tracking-wide">
                    Colégio de Presidentes(as) e Corregedores(as) dos Tribunais Regionais do Trabalho
                </p>
            </div>

            {/* Decorative Bar */}
            <div className="h-1 bg-gradient-to-r from-[var(--color-success)] to-[var(--color-warning)]"></div>
        </header>
    );
}
