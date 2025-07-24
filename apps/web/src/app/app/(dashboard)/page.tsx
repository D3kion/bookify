// import data from "./_data.json";
import { Chart } from "./_chart";
import { StatsCards } from "./_stats";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <StatsCards />
          <div className="px-4 lg:px-6">
            <Chart />
          </div>
          {/* <DataTable data={data} /> */}
          <div>data table</div>
        </div>
      </div>
    </div>
  );
}
