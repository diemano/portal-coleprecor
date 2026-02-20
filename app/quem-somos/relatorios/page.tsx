import { FileText, ExternalLink } from "lucide-react";

const relatorios = [
    {
        ano: "2025",
        gestao: "Gestão da Desembargadora Adenir Alves da Silva Carruesco – TRT da 23ª Região",
        url: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/REVISTA-COLEPRECOR-Gest%C3%A3o-2025.pdf",
    },
    {
        ano: "2019",
        gestao: "Gestão da Desembargadora Eliney Bezerra Veloso – TRT da 23ª Região/MT",
        url: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/Relat%C3%B3rio-2019.pdf",
    },
    {
        ano: "2017",
        gestao: "Gestão do Desembargador James Magno Araújo Farias – TRT da 16ª Região/MA",
        url: "https://www.calameo.com/read/005392666f62cd45594e4",
    },
    {
        ano: "2016",
        gestao: "Gestão do Desembargador Lorival Ferreira dos Santos – TRT da 15ª Região/Campinas",
        url: "https://www.calameo.com/read/0029474846f7f40071a2d?authid=jBlvQ4x3WxT2",
    },
    {
        ano: "2013",
        gestao: "Gestão do Desembargador Tarcísio Régis Valente – TRT da 23ª Região/MT",
        url: "https://issuu.com/lucasalmeida9/docs/retrospectiva__coleprecor_2013",
    },
    {
        ano: "2011",
        gestao: "Gestão do Desembargador Carlos Alberto Robinson – TRT da 4ª Região/RS",
        url: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/Relat%C3%B3rio-2011.pdf",
    },
    {
        ano: "2004",
        gestao: "Gestão da Desembargadora Marama dos Santos Carneiro – TRT da 5ª Região/BA",
        url: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/Relat%C3%B3rio-2004.pdf",
    },
    {
        ano: "2000",
        gestao: "Gestão do Desembargador Vicente José Malheiros da Fonseca – TRT da 8ª Região/PA-AP",
        url: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/Relat%C3%B3rio-2000.pdf",
    },
    {
        ano: "1999",
        gestao: "Gestão do Desembargador Vicente José Malheiros da Fonseca – TRT da 8ª Região/PA-AP",
        url: "https://www.justicanossotrabalho.com.br/wp-content/uploads/2025/11/Relat%C3%B3rio-1999.pdf",
    },
];

export default function Relatorios() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-[var(--color-primary-dark)] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-8 h-8 text-[var(--color-warning)]" />
                        <h1 className="text-3xl md:text-4xl font-bold">Relatórios das Gestões</h1>
                    </div>
                    <p className="text-gray-300 text-lg">
                        Consulte os relatórios de atividades das gestões do Coleprecor.
                    </p>
                </div>
            </div>

            {/* Reports List */}
            <div className="container mx-auto px-4 py-12">
                <div className="space-y-4">
                    {relatorios.map((relatorio, index) => (
                        <a
                            key={index}
                            href={relatorio.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-5 bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-[var(--color-primary)]/20 transition-all"
                        >
                            <div className="min-w-[70px] h-[70px] bg-[var(--color-primary)] text-white rounded-xl flex items-center justify-center group-hover:bg-[var(--color-primary-dark)] transition-colors shadow-md">
                                <span className="text-xl font-bold">{relatorio.ano}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[var(--color-primary)] transition-colors">
                                    Relatório {relatorio.ano}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {relatorio.gestao}
                                </p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-primary)] transition-colors mt-1 shrink-0" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
