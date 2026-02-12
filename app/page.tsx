import { HeroSection } from "@/components/HeroSection";
import { GiroTribunais } from "@/components/GiroTribunais";
import { CalendarWidget } from "@/components/CalendarWidget";
import { NewsList } from "@/components/NewsList";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection />

      <div className="container mx-auto px-4">
        {/* Main Content Area - Full Width for News now that Calendar is moved */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3 space-y-12">
            <NewsList />
          </div>
        </div>
      </div>

      {/* Calendar Section - Moved below as requested */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <CalendarWidget />
        </div>
      </div>

      <GiroTribunais />
    </div>
  );
}
