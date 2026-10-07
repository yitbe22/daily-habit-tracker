
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ActivityHeatmap = ({ habit, color, darkMode }) => {
  const year = new Date().getFullYear();

  const months = [];

  for (let m = 0; m < 12; m++) {
    const first = new Date(year, m, 1);
    const daysInMonth = new Date(year, m + 1, 0).getDate();

    const days = Array(first.getDay()).fill(null);

    for (let d = 1; d <= daysInMonth; d++) {
      const mm = String(m + 1).padStart(2, "0");
      const dd = String(d).padStart(2, "0");
      days.push(`${year}-${mm}-${dd}`);
    }

    months.push(days);
  }

  return (
    <div className="">
      <h1 className="pb-2">Activity Heatmap</h1>

       <div className="flex gap-3 overflow-x-auto pb-2">
        {months.map((days, i) => (
          <div key={i}>
            <p className="text-xs text-gray-400 pb-1">{monthNames[i]}</p>

            <div className="grid grid-flow-col grid-rows-7 auto-cols-3 gap-1">
              {days.map((day, j) => {
                if (!day) return <div key={j} className="h-3 w-3" />;

                const done = habit.completions[day];
                return (
                  <div
                    key={day}
                    title={day}
                    style={{background:done? color.value: darkMode? "#374151"
      : "#808080"}}
                    className={`h-3 w-3 rounded-sm cursor-pointer`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityHeatmap;
