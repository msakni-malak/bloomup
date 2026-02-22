const GoalCard = ({ goal, onView }) => {
    const tasks = goal.tasks || [];
    const progress = tasks.length === 0 ? 0 : Math.round((tasks.filter(t => t.done).length / tasks.length) * 100);
    const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
    return(
        <div onClick={() => onView(goal)} className="group cursor-pointer habit-card flex flex-col gap-4 overflow-hidden p-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-2 w-full rounded-t-3xl bg-[#A3A380]" />
            <div className="px-6 pb-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#f0f0e8] text-[#A3A380]">{goal.category}</span>
                <span className={`text-xs font-bold ${daysLeft < 30 ? "text-[#BB8588]" : "text-[#A3A380]"}`}>
                {daysLeft > 0 ? `${daysLeft} days left` : "Overdue"}
                </span>
            </div>
            <h3 className="text-xl font-title font-bold text-[#4F5D2F] leading-tight">{goal.title}</h3>
            <p className="paragraph text-sm line-clamp-2">{goal.description}</p>
            <p className="text-xs text-[#A3A380]">📅 {new Date(goal.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
            <div className="border-t border-dashed border-[#D7CE93]" />
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#4F5D2F]">🌿 {progress}% complete</span>
                <span className="text-xs text-[#A3A380]">{tasks.filter(t => t.done).length}/{tasks.length} tasks</span>
            </div>
            <div className="w-full bg-[#D7CE93] rounded-full h-2">
                <div className="h-2 rounded-full bg-[#7A8F4D] transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <button className="button-1 opacity-0 group-hover:opacity-100 transition-all duration-200">🔍 View Details</button>
            </div>
        </div>
    )
};
export default GoalCard ;