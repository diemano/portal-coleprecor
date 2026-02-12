import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[var(--color-primary-dark)] text-white mt-12 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1: Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[var(--color-warning)]">Portal Coleprecor</h3>
                        <p className="text-gray-200">
                            Colégio de Presidentes e Corregedores dos Tribunais Regionais do Trabalho (Coleprecor).
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--color-warning)]">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li><Link href="/sobre" className="hover:text-[var(--color-warning-light)] transition-colors">Sobre o Coleprecor</Link></li>
                            <li><Link href="/noticias" className="hover:text-[var(--color-warning-light)] transition-colors">Todas as Notícias</Link></li>
                            <li><Link href="/transparencia" className="hover:text-[var(--color-warning-light)] transition-colors">Transparência</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--color-warning)]">Contato</h3>
                        <p className="text-gray-200">
                            Brasília - DF<br />
                            Email: contato@coleprecor.com.br
                        </p>
                    </div>
                </div>

                <div className="border-t border-[var(--color-primary)] pt-8 mt-8 text-center text-sm text-gray-300">
                    <p>&copy; {new Date().getFullYear()} Coleprecor. Todos os direitos reservados.</p>
                    <div className="mt-2 text-xs">
                        <span className="font-semibold text-white">Justiça do Trabalho</span>.
                    </div>
                </div>
            </div>
        </footer>
    );
}
