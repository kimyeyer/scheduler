import Header from "@/components/Header";
import { MonthlyComponent } from "@/components/schedule/MonthlyComponent";
import { WeeklyComponent } from "@/components/schedule/WeeklyComponent";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex flex-row h-4/5">
        <div className="flex flex-col w-2/3 border-r border-gray-200">
          <MonthlyComponent />
          
        </div>
        <div className="flex flex-col w-1/3">
        <WeeklyComponent />
        </div>
      </div>
    </div>
  );
}
