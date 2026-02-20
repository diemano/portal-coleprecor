import Image from "next/image";
import Link from "next/link";

const noticias = [
    {
        id: 1,
        titulo: "Mesa diretora do Coleprecor participa das sessões de abertura do ano judiciário no TST e no STF",
        resumo: "A presidente do Coleprecor, desembargadora Herminegilda Leite Machado, e demais integrantes da Mesa Diretora participaram das solenidades de abertura do Ano Judiciário de 2026 no Tribunal Superior do Trabalho e no Supremo Tribunal Federal.",
        data: "15/02/2026",
        categoria: "Institucional",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-03-at-17.05.09.jpeg",
    },
    {
        id: 2,
        titulo: "Justiça do Trabalho em evidência no Prêmio CNJ de Qualidade 2025",
        resumo: "Diversos Tribunais Regionais do Trabalho foram reconhecidos no Prêmio CNJ de Qualidade, destacando-se pela excelência na prestação jurisdicional e inovação em gestão.",
        data: "10/02/2026",
        categoria: "Destaque",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/01/premio-cnj-qualidade.jpg",
    },
    {
        id: 3,
        titulo: "Presidente do Coleprecor defende modernização institucional na abertura do 11º Curso de Formação",
        resumo: "Em discurso na abertura do 11º Curso de Formação Continuada em Administração Judiciária, a presidente reforçou a importância da modernização e da transformação digital nos tribunais trabalhistas.",
        data: "05/02/2026",
        categoria: "Institucional",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/02/11-curso-formacao.jpg",
    },
    {
        id: 4,
        titulo: "Coleprecor aprova resolução sobre padronização de sistemas processuais",
        resumo: "Em reunião ordinária realizada no TST, o Coleprecor aprovou por unanimidade resolução que visa padronizar os sistemas processuais eletrônicos em todos os TRTs do país.",
        data: "28/01/2026",
        categoria: "Normativo",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/01/reuniao-coleprecor.jpg",
    },
    {
        id: 5,
        titulo: "TRT-GO vence concurso de boas práticas com política de conflito de interesses",
        resumo: "O Tribunal Regional do Trabalho da 18ª Região (GO) foi premiado no concurso nacional de boas práticas por sua inovadora política de prevenção e tratamento de conflitos de interesses.",
        data: "20/01/2026",
        categoria: "Tribunais",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/01/trt-go-boas-praticas.jpg",
    },
    {
        id: 6,
        titulo: "Magistradas dos TRTs participam de curso internacional de liderança",
        resumo: "Nove magistradas dos Tribunais Regionais do Trabalho foram selecionadas para participar de programa internacional de desenvolvimento de liderança feminina no Judiciário.",
        data: "15/01/2026",
        categoria: "Capacitação",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/02/curso-lideranca-magistradas.jpg",
    },
    {
        id: 7,
        titulo: "Reunião extraordinária discute impactos da IA no Judiciário Trabalhista",
        resumo: "Presidentes dos TRTs se reuniram em sessão extraordinária para debater os impactos e oportunidades da inteligência artificial na tramitação processual e na gestão administrativa.",
        data: "08/01/2026",
        categoria: "Tecnologia",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/01/ia-judiciario.jpg",
    },
    {
        id: 8,
        titulo: "TRT-PB destaca-se pela celeridade na tramitação processual do 2º grau",
        resumo: "O Tribunal Regional do Trabalho da 13ª Região (PB) alcançou índice recorde de celeridade na tramitação de processos em segunda instância, servindo como referência nacional.",
        data: "02/01/2026",
        categoria: "Tribunais",
        imagem: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/01/trt-pb-celeridade.jpg",
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
