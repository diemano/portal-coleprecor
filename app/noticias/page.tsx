import Image from "next/image";
import Link from "next/link";

const noticias = [
    {
        id: 1,
        titulo: "Magistradas dos TRTs têm 9 vagas exclusivas em curso internacional de liderança; inscrições vão até sexta (6)",
        resumo: "Iniciativa promovida em parceria com a Enamat visa fomentar a presença feminina em cargos de gestão no Judiciário; aulas presenciais acontecerão em abril...",
        data: "06/03/2026",
        categoria: "Destaque",
        imagem: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        titulo: "Presidente do Coleprecor defende modernização institucional na abertura do 11º Curso de Formação Continuada",
        resumo: "A presidente do Colégio de Presidentes e Corregedores dos Tribunais Regionais do Trabalho (Coleprecor), desembargadora Herminegilda Leite Machado, participou...",
        data: "20/02/2026",
        categoria: "Notícias",
        imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        titulo: "Mesa diretora do Coleprecor participa das sessões de abertura do ano judiciário no TST e no STF",
        resumo: "Presidente Herminegilda Leite Machado e secretário-geral Jasiel Ivo acompanharam as diretrizes traçadas pelas cúpulas do Judiciário, com foco na ética...",
        data: "20/02/2026",
        categoria: "Notícias",
        imagem: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        titulo: "Justiça do Trabalho em evidência no Prêmio CNJ de Qualidade 2025",
        resumo: "O Colégio de Presidentes(as) e Corregedores(as) dos Tribunais Regionais do Trabalho (Coleprecor) manifesta seu orgulho e reconhecimento aos Tribunais...",
        data: "20/02/2026",
        categoria: "Destaque",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/12/54960606580_fd660d3d41_o-512x341.jpg",
    },
    {
        id: 5,
        titulo: "Vice-presidente do TST destaca papel dos Cejuscs para a expansão da conciliação na Justiça do Trabalho",
        resumo: "O vice-presidente do Tribunal Superior do Trabalho (TST), ministro Guilherme Augusto Caputo Bastos, afirmou nesta quinta-feira (27/11), durante a 9ª reunião...",
        data: "20/02/2026",
        categoria: "Notícias",
        imagem: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 6,
        titulo: "2º vice-presidente do TRT-MG avalia impactos de nova legislação sobre precatórios",
        resumo: "O 2ª vice-presidente do TRT-MG, desembargador Emerson José Alves Lage, comentou, nesta quinta-feira (27/11), os impactos da Emenda Constitucional 136...",
        data: "20/02/2026",
        categoria: "Notícias",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/IMG_5005-512x341.jpg",
    },
    {
        id: 7,
        titulo: "Professor Valerio Mazzuoli fala sobre o projeto da Lei Geral de Direito Internacional Privado no Coleprecor",
        resumo: "O professor Valerio de Oliveira Mazzuoli, da Universidade Federal de Mato Grosso (UFMT), falou, na manhã desta quinta-feira (27), sobre o projeto da nova...",
        data: "20/02/2026",
        categoria: "Notícias",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/IMG_4931-512x341.jpg",
    },
    {
        id: 8,
        titulo: "Projeto do TRT-MT oferece bolsas em curso preparatório para magistratura a pessoas negras",
        resumo: "O Tribunal Regional do Trabalho da 23ª Região (Mato Grosso) apresentou ações para promoção da equidade no Judiciário, nesta quarta-feira (26/11)...",
        data: "20/02/2026",
        categoria: "Notícias",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/IMG_4855-1-512x341.jpg",
    },
];

const categoriaColors: Record<string, string> = {
    Institucional: "bg-blue-100 text-blue-800",
    Destaque: "bg-amber-100 text-amber-800",
    Normativo: "bg-purple-100 text-purple-800",
    Tribunais: "bg-green-100 text-green-800",
    Capacitação: "bg-rose-100 text-rose-800",
    Tecnologia: "bg-cyan-100 text-cyan-800",
};

export default function Noticias() {
    const destaque = noticias[0];
    const demais = noticias.slice(1);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)]">Notícias</h1>
                    <p className="text-gray-500 text-lg mt-1">
                        Acompanhe as últimas notícias do Coleprecor e da Justiça do Trabalho.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Featured News */}
                <div className="mb-12">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-64 lg:h-auto min-h-[300px] bg-gray-200">
                                <Image
                                    src={destaque.imagem}
                                    alt={destaque.titulo}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoriaColors[destaque.categoria] || "bg-gray-100 text-gray-800"}`}>
                                        {destaque.categoria}
                                    </span>
                                    <span className="text-sm text-gray-400">{destaque.data}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                                    {destaque.titulo}
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {destaque.resumo}
                                </p>
                                <span className="text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                                    Leia mais →
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {demais.map((noticia) => (
                        <article
                            key={noticia.id}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
                        >
                            <div className="relative h-48 bg-gray-200">
                                <Image
                                    src={noticia.imagem}
                                    alt={noticia.titulo}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoriaColors[noticia.categoria] || "bg-gray-100 text-gray-800"}`}>
                                        {noticia.categoria}
                                    </span>
                                    <span className="text-xs text-gray-400">{noticia.data}</span>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors leading-tight line-clamp-2">
                                    {noticia.titulo}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                                    {noticia.resumo}
                                </p>
                                <span className="text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                                    Leia mais →
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
