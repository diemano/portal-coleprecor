export function NewsList() {
    const news = [
        { date: "10/02", title: "CSJT aprova novos provimentos para celeridade processual", category: "Institucional" },
        { date: "09/02", title: "Presidente do Coleprecor visita TRT da 18ª Região", category: "Visitas" },
        { date: "08/02", title: "Nota de Pesar: Falecimento do Desembargador X", category: "Comunicado" },
        { date: "05/02", title: "Gestão documental é tema de debate nacional", category: "Eventos" },
    ];

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6 pb-2 border-b border-gray-100">
                Últimas Notícias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <article key={index} className="group cursor-pointer border border-gray-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                            {item.category} • {item.date}
                        </span>
                        <h3 className="text-lg font-medium text-gray-800 group-hover:text-[var(--color-primary)] transition-colors mt-1">
                            {item.title}
                        </h3>
                    </article>
                ))}
            </div>
            <a href="/noticias" className="block mt-6 text-[var(--color-primary)] font-semibold hover:underline">
                Ver mais notícias
            </a>
        </section>
    );
}
