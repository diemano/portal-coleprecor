import { HeroSection } from "@/components/HeroSection";
import { GiroTribunais } from "@/components/GiroTribunais";
import { CalendarWidget } from "@/components/CalendarWidget";
import { NewsList } from "@/components/NewsList";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <NewsList />
            {/* Banner Publicidade ou Destaque Secundário */}
            <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-400 border-2 border-dashed border-gray-300">
              Espaço para Banner / Publicidade
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <CalendarWidget />
          </div>
        </div>
      </div>

      <GiroTribunais />
    </div>
  );
}
