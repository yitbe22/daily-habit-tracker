import StatCard from "./StatCard";
import { Flame, Trophy, CircleCheck, ChartLine } from "lucide-react";

const Stat = ({ onAddHabit }) => {
  return (
    <div className="mx-auto w-full max-w-230">
      <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-center  px-6 sm:px-7 md:px-8 py-5">
        <div className="space-y">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Good morning 👋
          </h1>
          <p className="font-light">"Consistency is the key to progress."</p>
        </div>
        <div>
          <button
            onClick={onAddHabit}
            className="bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300"
          >
            + Add Habit
          </button>
        </div>
      </div>
      <div className="px-6 sm:px-7 md:px-8 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Flame}
          title="Current Streak"
          value="12"
          unit="days"
          iconColor="text-orange-600"
          borderColor="text-orange-200"
        />

        <StatCard
          icon={Trophy}
          title="Best Streak"
          value="45"
          unit="days"
          iconColor="text-purple-600"
          borderColor="text-purple-200"
        />

        <StatCard
          icon={CircleCheck}
          title="Completed Today"
          value="3/5"
          iconColor="text-green-600"
          borderColor="text-green-200"
        />

        <StatCard
          icon={ChartLine}
          title="Completion Rate"
          value="85%"
          iconColor="text-blue-600"
          borderColor="text-blue-200"
        />
      </div>
    </div>
  );
};

export default Stat;
