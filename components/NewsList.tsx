export function NewsList() {
    const news = [
        {
            date: "19/02",
            title: "Nova diretoria do Coleprecor apresenta diretrizes em reunião com o ministro Edson Fachin",
            category: "Destaque",
            description: "A nova mesa diretora fez uma visita institucional ao presidente do STF e do CNJ para apresentar as diretrizes para 2025-2026 e defender a competência da Justiça do Trabalho."
        },
        {
            date: "10/02",
            title: "CSJT aprova novos provimentos para celeridade processual",
            category: "Institucional",
            description: "O Conselho Superior da Justiça do Trabalho estabeleceu novas metas para agilizar o julgamento de processos em 2026."
        },
        {
            date: "09/02",
            title: "Presidente do Coleprecor visita TRT da 18ª Região",
            category: "Visitas",
            description: "Encontro teve como objetivo alinhar estratégias de gestão e compartilhar boas práticas entre os tribunais."
        },
    ];

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6 pb-2 border-b border-gray-100">
                Últimas Notícias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <article key={index} className="group cursor-pointer border border-gray-100 p-4 rounded-lg hover:shadow-md transition-shadow flex flex-col h-full">
                        <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                            {item.category} • {item.date}
                        </span>
                        <h3 className="text-lg font-medium text-gray-800 group-hover:text-[var(--color-primary)] transition-colors mb-2 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>
            <a href="/noticias" className="block mt-6 text-[var(--color-primary)] font-semibold hover:underline">
                Ver mais notícias
            </a>
        </section>
    );
}
