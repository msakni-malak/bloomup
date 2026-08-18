import { useState } from "react";
import ConfirmModal from "../components/ConfirmModal";

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 64 64" fill="none">
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
);

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 200 200" fill="none">
    <path
      d="M176.81 71.41c-6.19 4.5-12.94 7.86-20.75 8-6.84.09-12.27-2.53-18.08-5.44 6.9-4.56 13.79-6.47 22-4 5 1.51 11.6 4.39 16.26.75a.61.61 0 0 0-.38-1.07A40.4 40.4 0 0 1 161.59 68a27.8 27.8 0 0 0-9.59-1.55c-.78 0-1.55.14-2.32.26a79.4 79.4 0 0 0 16.22-12.86c.37-.4 0-1.09-.57-.76-7.3 4.53-14 10-21.43 14.27-4.3 2.49-8.71 4.74-13.21 6.79 2.08-7.57 3.11-14.54 7.33-21.41a46.7 46.7 0 0 1 7.09-8.93c2.56-2.52 5.73-4.29 8.32-6.7a27.3 27.3 0 0 1-1.8 7.71 61.7 61.7 0 0 1-6.47 11c-4.3 6.18-9.16 11.92-14 17.65-.16.18.13.35.29.22a95.7 95.7 0 0 0 17.83-20.56c3.65-5.59 8.56-14 5.77-20.77-.22-.54-1-.19-1 .26-.13.9-.23 1.77-.32 2.64h-.12c-7.23 2-13.62 10.26-17.28 16.42-3.77 6.35-7.33 15.11-6 22.63q-5.5 2.49-11.19 4.58c-6.41 2.35-12.91 4.47-19.3 6.85A53.56 53.56 0 0 0 120 63.64c4.87-10 7.49-23.38 4.43-34.43v-.64a.89.89 0 0 0-.47-.81c0-.14-.08-.28-.13-.42a.78.78 0 0 0-1.5.37l.06.83c-1.88 5.83-3.61 11.05-7.09 16.25-3.32 5-7.28 9.45-10.81 14.26-5.72 7.81-11 17.43-8.68 27.4a8 8 0 0 0 .18.78 98.6 98.6 0 0 0-20.69 10.7 94 94 0 0 0-8 6.32c-.43-13.74-.11-27.46 2.54-41a145 145 0 0 1 6-21.7c2.16-5.86 5.28-11.37 7.54-17.15 2.65 5.28 5.21 10.1 6.09 16.37A56.2 56.2 0 0 1 88 62.59C84.07 77.51 75 89.63 67.9 103c-.13.25.19.39.35.2C78.51 90.8 87.79 75.34 91 59.38c2.43-11.9 2.16-30.28-7.9-39-.62-.54-1.68.11-1.3.91l.48 1C78.42 27.72 76 34.78 73.76 41a141.4 141.4 0 0 0-5.61 20.51c-2.78 14.16-3.67 28.84-1.29 43.1a126.9 126.9 0 0 0-23.39 28.23c1.77-6.79 3-13.83 4.85-20.59 2.06-7.39 4.16-14.78 5.61-22.31 2.65-13.72 3.71-30.16-3.69-42.68-.17-.29-.74-.11-.63.24l.17.56a1.1 1.1 0 0 0-.45.3c-9.58 11.7-18.1 27-19.83 42.2A72.6 72.6 0 0 0 31.37 115c1.86 8 4.32 17 8.26 24.31a225.5 225.5 0 0 0-17.39 40.29.18.18 0 0 0 .33.13c7.34-14.3 13.19-29.26 21.29-43.16A65.9 65.9 0 0 1 66.44 135c7.93.89 15.73 2.43 23.75 2.43 13.53 0 29.82-2.69 41.22-10.44a1 1 0 0 0-.65-1.81l-.67.26c.41-.19.54-.82 0-1-4.9-1.44-9.9-2.55-14.61-4.59-4.19-1.8-8.17-4-12.27-6-7.7-3.73-15.71-6.24-24.36-5.44a42.06 42.06 0 0 0-21 8.37 96.7 96.7 0 0 1 21.32-19 89 89 0 0 1 12.67-6.66c5.41 9.18 18.94 13.43 28.36 16.58 6.51 2.17 13.12 4 19.42 6.81 5.77 2.53 10.71 6 15.84 9.6.27.56 1.16.36 1.32-.18a.72.72 0 0 0 0-.56c-.28-12.22-11.38-24.46-21.36-30.2C123 86 107.38 85.25 94.58 91.76c-.55-.4-1.11-.79-1.67-1.18 10.36-4.42 21.32-7.49 31.78-11.67 3.78-1.5 7.67-3.17 11.56-5 10.12 11.71 31.82 9.26 41.34-1.71.51-.59-.18-1.2-.78-.79m-136.66 67c-1.63-7.42-4.69-14.59-6.46-22-1.94-8.13-3.07-16.53-2.23-24.89 1.61-16.2 11.16-28 18.91-41.55 4.18 14.12 4.25 27.85 1.12 42.43-1.66 7.73-3.92 15.31-6 22.93-1.88 6.86-4.57 14.54-4.61 21.71v.09c-.24.41-.48.87-.73 1.26zm22.6-22.5a37.1 37.1 0 0 1 25-5c14.87 2.38 26.66 14.94 42.15 14.5a1 1 0 0 0 .17 0c-6.92 2.62-13.44 5.74-20.75 7.41a85.8 85.8 0 0 1-24.17 2c-12.25-.74-28.27-6-40.1-.16.49-.81 1-1.62 1.49-2.42.3-.48.61-1 .92-1.44a25 25 0 0 0-.63 2.49c0 .23.29.25.39.1 4.51-6.79 8.33-13.09 15.53-17.5zm71.88-20.21A44.1 44.1 0 0 1 148 108.29c2.51 3.62 4 7.5 5.58 11.42-7.26-6.69-18.18-9.79-27.21-12.65-6.3-2-12.65-3.9-18.65-6.71-4.72-2.22-8.61-5.28-12.72-8.26 13.18-4.09 27.64-3.64 39.63 3.61m-33.46-27.32c2.72-5 6.34-9.44 9.88-13.88 4.1-5.14 9.27-11.3 11.82-18 .26 8.58-.45 16.72-4.19 25.16a59 59 0 0 1-20.59 24.66c-3.99-3.32 1.74-15.46 3.08-17.94"
      fill="#4F5D2F"
    />
  </svg>
);

const TaskIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
    <path
      d="M26.206 3H25V2a1 1 0 0 0-2 0v1h-6V2a1 1 0 0 0-2 0v1H9V2a1 1 0 0 0-2 0v1H5.794A3.8 3.8 0 0 0 2 6.794v20.412A3.8 3.8 0 0 0 5.794 31h20.412A3.8 3.8 0 0 0 30 27.206V6.794A3.8 3.8 0 0 0 26.206 3M28 27.206A1.8 1.8 0 0 1 26.206 29H5.794A1.8 1.8 0 0 1 4 27.206V6.794A1.8 1.8 0 0 1 5.794 5H7v1a1 1 0 0 0 2 0V5h6v1a1 1 0 0 0 2 0V5h6v1a1 1 0 0 0 2 0V5h1.206A1.8 1.8 0 0 1 28 6.794Z"
      fill="currentColor"
    />
    <path
      d="M12.293 11.293 10 13.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414M24 13h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2M12.293 20.293 10 22.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414M24 22h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2"
      fill="currentColor"
    />
  </svg>
);

const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 753.23 753.23" fill="none">
    <path
      d="M494.308 659.077c12.993 0 23.538-10.546 23.538-23.539V353.077c0-12.993-10.545-23.539-23.538-23.539s-23.538 10.545-23.538 23.539v282.461c0 12.993 10.544 23.539 23.538 23.539m141.23-564.923h-141.23V47.077C494.308 21.067 473.24 0 447.23 0H306c-26.01 0-47.077 21.067-47.077 47.077v47.077h-141.23c-26.01 0-47.077 21.067-47.077 47.077v47.077c0 25.986 21.067 47.077 47.077 47.077v423.692c0 51.996 42.157 94.153 94.154 94.153h329.539c51.996 0 94.153-42.157 94.153-94.153V235.385c26.01 0 47.077-21.091 47.077-47.077V141.23c-.001-26.009-21.068-47.076-47.078-47.076M306 70.615c0-12.993 10.545-23.539 23.538-23.539h94.154c12.993 0 23.538 10.545 23.538 23.539v23.539H306zm282.461 588.462c0 25.986-21.066 47.076-47.076 47.076H211.846c-26.01 0-47.077-21.09-47.077-47.076V235.385h423.692zM612 188.308H141.23c-12.993 0-23.538-10.545-23.538-23.539s10.545-23.539 23.538-23.539H612c12.993 0 23.538 10.545 23.538 23.539S624.993 188.308 612 188.308M258.923 659.077c12.993 0 23.539-10.546 23.539-23.539V353.077c0-12.993-10.545-23.539-23.539-23.539s-23.539 10.545-23.539 23.539v282.461c0 12.993 10.546 23.539 23.539 23.539m117.692 0c12.993 0 23.538-10.546 23.538-23.539V353.077c0-12.993-10.545-23.539-23.538-23.539s-23.539 10.545-23.539 23.539v282.461c.001 12.993 10.546 23.539 23.539 23.539"
      fill="#EFEBCE"
    />
  </svg>
);

const GoalDetail = ({ goal, onBack, onDelete, onUpdateTasks }) => {
  const tasks = goal.tasks || [];
  const [newTask, setNewTask] = useState("");
  const [goalToDelete, setGoalToDelete] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (tasks.filter((t) => t.done).length / tasks.length) * 100
        );
  const daysLeft = Math.ceil(
    (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );

  const addTask = () => {
    if (!newTask.trim()) return;
    const newTasks = [...tasks, { id: Date.now(), title: newTask, done: false }];
    onUpdateTasks(goal.id, newTasks);
    setNewTask("");
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    onUpdateTasks(goal.id, newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    onUpdateTasks(goal.id, newTasks);
  };

  return (
    <>
      <div className="relative bg-[#A3A380] overflow-hidden">
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full opacity-10 bg-[#EFEBCE]" />
        <div className="absolute bottom-0 right-24 w-36 h-36 rounded-full opacity-10 bg-[#4F5D2F]" />
        <div className="max-w-6xl mx-auto w-full px-6 md:px-10 py-8 md:py-10">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <button
              onClick={onBack}
              className="text-[#EFEBCE]/80 font-bold text-lg md:text-xl hover:text-[#EFEBCE] transition -ml-4 md:-ml-6"
            >
              ← Back to Goals
            </button>
            <div className="relative">
              <button
                onClick={() => setGoalToDelete(goal.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 text-[#EFEBCE] font-bold hover:bg-white/20 transition border border-white/20 z-1"
              >
                <TrashIcon />
                <span className="hidden sm:inline">Delete Goal</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFEBCE]/70 bg-white/20 px-4 py-1 rounded-xl w-fit">
              {goal.category}
            </span>
            {progress < 100 ? (
              <span className="text-xs font-bold uppercase tracking-widest text-[#EFEBCE]/70 bg-white/20 px-4 py-1 rounded-xl w-fit flex items-center gap-2">
                🌿
                Growing
              </span>
            ) : (
              <span className="text-xs font-bold uppercase tracking-widest text-[#EFEBCE]/70 bg-white/20 px-4 py-1 rounded-xl w-fit flex items-center gap-2">
                🌸
                Bloomed
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-title font-bold text-[#EFEBCE] leading-tight max-w-2xl">
              {goal.title}
            </h1>
            <div className="flex items-center gap-2 text-[#EFEBCE]/70 text-sm">
              <CalendarIcon />
              <span>
                {daysLeft > 0 ? `${daysLeft} days remaining` : "Overdue"} · Due{" "}
                {new Date(goal.deadline).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full p-6 md:p-10 bg-[#EFEBCE] flex flex-col gap-6">
        <div className="habit-card">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380] mb-3 flex items-center gap-2">
            <LeafIcon />
            About this goal
          </h2>
          <p className="paragraph">{goal.description}</p>
        </div>

        <div className="habit-card flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A3A380] flex items-center gap-2">
              <TaskIcon />
              Tasks
            </h2>
            <span className="text-lg font-bold text-[#7A8F4D]">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-[#D7CE93] rounded-full h-2">
            <div
              className="h-2 rounded-full bg-[#7A8F4D] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              className="input-box flex-1 text-sm"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-2xl font-bold text-[#EFEBCE] bg-[#7A8F4D] hover:bg-[#5f6f3a] transition w-full sm:w-auto"
            >
              + Add
            </button>
          </form>
          <div className="flex flex-col gap-2">
            {tasks.length === 0 && (
              <p className="paragraph text-sm text-center py-4">
                No tasks yet. Add one above! 🌱
              </p>
            )}
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center gap-3 p-3 rounded-2xl border-l-4 transition-all hover:bg-[#f0f0e8] ${
                  task.done
                    ? "bg-[#f0f0e8] border-[#A3A380]"
                    : "bg-white border-[#D7CE93]"
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className="w-6 h-6 rounded-full border-2 border-[#7A8F4D] flex items-center justify-center flex-shrink-0 transition-all text-xs font-bold text-[#EFEBCE]"
                  style={{ background: task.done ? "#7A8F4D" : "transparent" }}
                >
                  {task.done && "✓"}
                </button>
                <span
                  className={`flex-1 text-sm font-medium ${
                    task.done
                      ? "line-through text-[#A3A380]"
                      : "text-[#4F5D2F]"
                  }`}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => setTaskToDelete(task.id)}
                  className="text-[#BB8588] hover:text-[#a06060] text-xs font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {goalToDelete && (
        <ConfirmModal
          message="Let this goal wither? This can't be undone. 🍂"
          onCancel={() => setGoalToDelete(null)}
          onConfirm={() => {
            onDelete(goalToDelete);
            setGoalToDelete(null);
            onBack();
          }}
        />
      )}
      {taskToDelete && (
        <ConfirmModal
          message="Remove this task from your garden? This can't be undone. 🌿"
          onCancel={() => setTaskToDelete(null)}
          onConfirm={() => {
            deleteTask(taskToDelete);
            setTaskToDelete(null);
          }}
        />
      )}
    </>
  );
};

export default GoalDetail;
