'use client'
import Progress from "@/components/common/Progress";
import { Tab } from "@/components/common/Tab";
import { Calendar } from "@/components/features/calendar/Calendar";
import RoutineList from "@/components/features/routine/List";
import { ScheduleList } from "@/components/features/schedule";
import Header from "@/components/layout/Header";
import { useState } from "react";

export default function Home() {
  const MODE_OPTIONS = [
    {
      key: 'schedule',
      index: 0,
      label: '일정'
    },
    {
      key: 'routine',
      index: 1,
      label: '루틴'
    },
  ]
  const [selectedMode, setSelectedMode] = useState<number>(0);
  const handleModeChange = (index: number) => {
    setSelectedMode(index);
  }
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex flex-row h-4/5">
        <div className="flex flex-col w-2/3 border-r border-gray-200">
          <Calendar />
          
        </div>
        <div className="flex flex-col w-1/3">
          <div className="w-full h-1/4 border-b border-gray-200 p-4">
            <h4 className="text-lg font-bold">{`yyyy-mm-dd`}</h4>
            <div className="flex flex-col gap-1 flex-auto">
              <div className="flex flex-row gap-1 ">
                <span>이날의 일정</span>
                <div className="flex-auto">
                  <Progress value={100}  />
                </div>
                <span>n개</span>
              </div>
              <div className="flex flex-row gap-1">
                <span>이날의 루틴</span>
                <div className="flex-auto">
                  <Progress value={100}  />
                </div>
                <span>n개</span>
              </div>
            </div>
          </div>
          <div className="w-full h-3/4 border-b border-gray-200">
            <Tab options={MODE_OPTIONS} selectedIndex={selectedMode} onSelect={handleModeChange} />
            <div className="w-full h-full p-4">
              {selectedMode === 0 ? <ScheduleList /> : <RoutineList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
