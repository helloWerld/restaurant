import Hero from "@/components/homepage/Hero";
import AdvancedFilters from "@/components/advanced-filters/AdvancedFilters";

export default function Home() {
  return (
    <main className="flex flex-col items-between justify-center">
      <Hero />
      <AdvancedFilters />
    </main>
  );
}
