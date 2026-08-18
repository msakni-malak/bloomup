const GoalCard = ({ goal, onView }) => {
    const tasks = goal.tasks || [];
    const progress =
      tasks.length === 0
        ? 0
        : Math.round(
            (tasks.filter((t) => t.done).length / tasks.length) * 100
          );
    const daysLeft = Math.ceil(
      (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
    );
    return (
      <div
        onClick={() => onView(goal)}
        className="group cursor-pointer habit-card flex flex-col gap-2 md:gap-4 overflow-hidden p-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="h-2 w-full rounded-t-3xl bg-[#A3A380]" />
        <div className="px-4 pb-4 md:px-6 md:pb-6 flex flex-col gap-2 md:gap-3">
          <div className="hidden md:flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#f0f0e8] text-[#A3A380]">
              {goal.category}
            </span>
            <span
              className={`text-xs font-bold ${
                daysLeft < 30 ? "text-[#BB8588]" : "text-[#A3A380]"
              }`}
            >
              {daysLeft > 0 ? `${daysLeft} days left` : "Overdue"}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-title font-bold text-[#4F5D2F] leading-tight">
            {goal.title}
          </h3>
          <p className="paragraph text-sm line-clamp-2 hidden md:block">
            {goal.description}
          </p>
          <p className="text-xs text-[#A3A380] hidden md:flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 64 64" fill="none" className="flex-shrink-0">
              <path
                d="M56.562 17.372C56.246 12.117 51.858 8 46.573 8H44V6a2 2 0 0 0-4 0v2H24V6a2 2 0 0 0-4 0v2h-2.573c-5.286 0-9.674 4.117-9.989 9.372-.593 9.884-.582 19.91.033 29.799.312 5.022 4.335 9.045 9.357 9.357 5.033.313 10.102.469 15.171.469s10.138-.156 15.171-.469c5.022-.312 9.045-4.335 9.357-9.357.616-9.884.627-19.909.035-29.799m-4.026 29.551a6.006 6.006 0 0 1-5.613 5.613c-9.902.615-19.944.615-29.846 0a6.006 6.006 0 0 1-5.613-5.613A241 241 0 0 1 11.147 24h41.707c.252 7.64.155 15.323-.318 22.923M22 16a2 2 0 0 0 2-2v-2h16v2a2 2 0 0 0 4 0v-2h2.573c3.173 0 5.807 2.465 5.996 5.611.047.794.067 1.593.106 2.389h-41.35c.04-.796.059-1.595.106-2.389C11.62 14.465 14.253 12 17.427 12H20v2a2 2 0 0 0 2 2"
                fill="currentColor"
              />
              <circle cx="22" cy="33" r="3" fill="currentColor" />
              <circle cx="32" cy="33" r="3" fill="currentColor" />
              <circle cx="22" cy="43" r="3" fill="currentColor" />
              <circle cx="42" cy="33" r="3" fill="currentColor" />
              <circle cx="42" cy="43" r="3" fill="currentColor" />
              <circle cx="32" cy="43" r="3" fill="currentColor" />
            </svg>
            {new Date(goal.deadline).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="border-t border-dashed border-[#D7CE93] hidden md:block" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#4F5D2F] flex items-center gap-1">
              🌿
              {progress}% complete
            </span>
            <span className="text-xs text-[#A3A380]">
              <span className="md:hidden">
                {tasks.filter((t) => t.done).length}/{tasks.length}
              </span>
              <span className="hidden md:inline">
                {tasks.filter((t) => t.done).length}/{tasks.length} tasks
              </span>
            </span>
          </div>
          <div className="w-full bg-[#D7CE93] rounded-full h-2">
            <div
              className="h-2 rounded-full bg-[#7A8F4D] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button className="button-1 opacity-0 group-hover:opacity-100 transition-all duration-200 hidden md:block">
            🔍 View Details
          </button>
        </div>
      </div>
    );
};

export default GoalCard;
