import { Calendar as CalendarIcon, MapPin } from "lucide-react";

export function CalendarWidget() {
    const events = [
        { day: "15", month: "FEV", title: "1ª Reunião Ordinária", location: "Brasília - DF" },
        { day: "22", month: "MAR", title: "Encontro de Corregedores", location: "São Paulo - SP" },
        { day: "10", month: "ABR", title: "Webinário sobre Acessibilidade", location: "Online" },
        { day: "26", month: "MAI", title: "2ª Reunião Ordinária", location: "Curitiba - PR" },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full">
            <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-gray-100">
                <div className="p-2 bg-[var(--color-primary-light)] rounded-lg text-[var(--color-primary)]">
                    <CalendarIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-primary-dark)]">Agenda</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <div key={index} className="group flex items-start space-x-4 cursor-pointer p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all bg-white">
                        <div className="bg-[var(--color-primary)] text-white p-3 rounded-xl text-center min-w-[70px] group-hover:bg-[var(--color-primary-dark)] transition-colors shadow-md">
                            <span className="block text-2xl font-bold leading-none">{event.day}</span>
                            <span className="block text-xs font-medium opacity-80 mt-1">{event.month}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                                {event.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 mt-2">
                                <MapPin className="w-4 h-4 mr-1 text-[var(--color-success)]" />
                                <span className="truncate">{event.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a href="/agenda" className="block text-center mt-8 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all">
                Ver calendário completo
            </a>
        </div>
    );
}
