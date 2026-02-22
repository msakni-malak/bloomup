import { useState } from "react";
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const AddHabitModal = ({ onClose, onSave, prefill }) => {
  const [form, setForm] = useState({
    title: prefill?.title || "",
    icon: prefill?.icon || "🌱",
    duration: prefill?.duration || 15,
    unit: "min",
    days: [],
    streak: 0,
  });

  const toggleDay = (day) => {
    setForm(prev => ({
      ...prev,
      days: prev.days.includes(day) ? prev.days.filter(d => d !== day) : [...prev.days, day]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#FAF7EE] rounded-3xl p-8 w-full max-w-md shadow-2xl flex flex-col gap-5">
        <h2 className="habit-card-title text-2xl">🌱 New Habit</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="input-box"
            placeholder="Habit name"
            value={form.title}
            onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
            required
          />
          <div className="flex gap-3">
            <input
              className="input-box w-20"
              placeholder="Icon"
              value={form.icon}
              onChange={e => setForm(prev => ({ ...prev, icon: e.target.value }))}
            />
            <input
              type="number"
              className="input-box flex-1"
              placeholder="Duration (min)"
              value={form.duration}
              onChange={e => setForm(prev => ({ ...prev, duration: e.target.value }))}
              min={1}
              required
            />
          </div>

          <div>
            <p className="text-sm font-bold text-[#4F5D2F] mb-2">Which days?</p>
            <div className="flex gap-2 flex-wrap">
              {DAYS.map(day => (
                <button
                  type="button"
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-3 py-1 rounded-full text-sm font-bold border-2 transition-all ${form.days.includes(day) ? "bg-[#7A8F4D] text-white border-[#7A8F4D]" : "bg-transparent text-[#4F5D2F] border-[#c9c3a0]"}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-2xl border-2 border-[#c9c3a0] text-[#4F5D2F] font-bold hover:bg-[#EFE8CE] transition">
              Cancel
            </button>
            <button type="submit" className="flex-1 py-3 rounded-2xl bg-[#7A8F4D] text-white font-bold hover:bg-[#5f6f3a] transition">
              Plant It 🌿
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddHabitModal;