import AdvancedFilters from "@/components/advanced-filters/AdvancedFilters";
import BasicFilters from "@/components/advanced-filters/BasicFilters";

export const metadata = {
  title: "Search Filters",
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <AdvancedFilters />
      <BasicFilters />
    </div>
  );
};

export default page;
