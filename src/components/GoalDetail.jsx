import { useState } from "react";
const GoalDetail = ({ goal, onBack, onDelete, onUpdateTasks }) => {
  const [tasks, setTasks] = useState(goal.tasks || []);
  const [newTask, setNewTask] = useState("");
  const progress = tasks.length === 0 ? 0 : Math.round((tasks.filter(t => t.done).length / tasks.length) * 100);
  const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const addTask = () => {
    if (!newTask.trim()) return;
    const newTasks = [...tasks, { id: Date.now(), title: newTask, done: false }];
    setTasks(newTasks);
    onUpdateTasks(goal.id, newTasks);
    setNewTask("");
  };
  
  const toggleTask = (id) => {
    const newTasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
    setTasks(newTasks);
    onUpdateTasks(goal.id, newTasks);
  };
  
  const deleteTask = (id) => {
    const newTasks = tasks.filter(t => t.id !== id);
    setTasks(newTasks);
    onUpdateTasks(goal.id, newTasks);
  };
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="relative bg-[#A3A380] px-10 py-12 overflow-hidden">
  <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full opacity-10 bg-[#EFEBCE]" />
  <div className="absolute bottom-0 right-24 w-36 h-36 rounded-full opacity-10 bg-[#4F5D2F]" />


  <button onClick={onBack} className="text-[#EFEBCE]/80 font-bold mb-8 text-xl hover:text-[#EFEBCE] transition gap-2">
    ← Back to Goals
  </button>
  <button
      onClick={() => { onDelete(goal.id); onBack(); }}
      className="absolute top-8 right-8 px-6 py-3 rounded-2xl bg-white/10 text-[#EFEBCE] font-bold hover:bg-white/20 transition border border-white/20"
    >
      🗑️ Delete Goal
    </button>
  <div className="flex flex-col items-center text-center gap-4">
    <span className="text-xs font-bold uppercase tracking-widest text-[#EFEBCE]/70 bg-white/20 px-4 py-1 rounded-full">
      {goal.category}
    </span>

    <h1 className="text-4xl font-title font-bold text-[#EFEBCE] leading-tight max-w-lg">
      {goal.title}
    </h1>

    <p className="text-[#EFEBCE]/70 text-sm">
      📅 {daysLeft > 0 ? `${daysLeft} days remaining` : "Overdue"} · Due {new Date(goal.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
    </p>

  </div>
</div>
  
      <div className="p-10 bg-[#EFEBCE] flex flex-col gap-6">
        <div className="habit-card">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380] mb-3">About this goal</h2>
          <p className="paragraph">{goal.description}</p>
        </div>
  
        <div className="habit-card flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380]">📝 Tasks</h2>
            <span className="text-lg font-bold text-[#7A8F4D]">{progress}%</span>
          </div>
          <div className="w-full bg-[#D7CE93] rounded-full h-2">
            <div className="h-2 rounded-full bg-[#7A8F4D] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <form onSubmit={e => { e.preventDefault(); addTask(); }} className="flex gap-3">
            <input className="input-box flex-1 text-sm" placeholder="Add a new task..." value={newTask} onChange={e => setNewTask(e.target.value)} />
            <button type="submit" className="px-5 py-2 rounded-2xl font-bold text-[#EFEBCE] bg-[#7A8F4D] hover:bg-[#5f6f3a] transition">+ Add</button>
          </form>
          <div className="flex flex-col gap-2">
            {tasks.length === 0 && <p className="paragraph text-sm text-center py-4">No tasks yet. Add one above! 🌱</p>}
            {tasks.map(task => (
              <div key={task.id} className={`flex items-center gap-3 p-3 rounded-2xl border-l-4 transition-all ${task.done ? "bg-[#f0f0e8] border-[#A3A380]" : "bg-white border-[#D7CE93]"}`}>
                <button onClick={() => toggleTask(task.id)}
                  className="w-6 h-6 rounded-full border-2 border-[#7A8F4D] flex items-center justify-center flex-shrink-0 transition-all text-xs font-bold text-[#EFEBCE]"
                  style={{ background: task.done ? "#7A8F4D" : "transparent" }}>
                  {task.done && "✓"}
                </button>
                <span className={`flex-1 text-sm font-medium ${task.done ? "line-through text-[#A3A380]" : "text-[#4F5D2F]"}`}>{task.title}</span>
                <button onClick={() => deleteTask(task.id)} className="text-[#BB8588] hover:text-[#a06060] text-xs font-bold">✕</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalDetail;
