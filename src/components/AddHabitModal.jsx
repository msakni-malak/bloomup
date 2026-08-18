import { useState } from "react";
import { HABIT_ICONS, DEFAULT_ICON } from "../data/habitIcons";
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const AddHabitModal = ({ onClose, onSave, prefill }) => {
  const [form, setForm] = useState({
    title: prefill?.title || "",
    icon: prefill?.icon || DEFAULT_ICON,
    duration: prefill?.duration || 15,
    unit: "min",
    days: prefill?.days ? [...prefill.days] : [],
    streak: prefill?.streak || 0,
  });

  const toggleDay = (day) => {
    setForm((prev) => ({
      ...prev,
      days: prev.days.includes(day) ? prev.days.filter((d) => d !== day) : [...prev.days, day],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#EFEBCE] rounded-3xl p-8 w-full max-w-md shadow-2xl border border-[#D7CE93]">
        <h2 className="text-2xl font-title font-bold text-[#4F5D2F] mb-6">🌱 New Habit</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="input-box"
            placeholder="Habit name"
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            required
          />

          <div>
            <p className="text-sm font-bold text-[#4F5D2F] mb-2">Habit icon</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {HABIT_ICONS.map((iconOption) => {
                const selected = form.icon === iconOption.filename;
                return (
                  <button
                    type="button"
                    key={iconOption.filename}
                    onClick={() => setForm((prev) => ({ ...prev, icon: iconOption.filename }))}
                    className={`flex items-center justify-center rounded-2xl border-2 p-2 transition-all ${
                      selected ? "border-[#7A8F4D] bg-[#dcefd0]" : "border-[#D7CE93] bg-white/60"
                    }`}
                    title={iconOption.name}
                  >
                    <img src={iconOption.path} alt={iconOption.name} className="w-8 h-8 object-contain" />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-[#4F5D2F] mb-2">Duration</p>
            <input
              className="input-box"
              type="number"
              placeholder="Minutes"
              value={form.duration}
              onChange={(e) => setForm((prev) => ({ ...prev, duration: Number(e.target.value) }))}
              min={1}
              required
            />
          </div>

          <div>
            <p className="text-sm font-bold text-[#4F5D2F] mb-2">Which days?</p>
            <div className="flex gap-2 flex-wrap">
              {DAYS.map((day) => (
                <button
                  type="button"
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-3 py-1 rounded-full text-sm font-bold border-2 transition-all ${
                    form.days.includes(day) ? "bg-[#7A8F4D] text-white border-[#7A8F4D]" : "bg-transparent text-[#4F5D2F] border-[#c9c3a0]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-2xl border-2 border-[#A3A380] text-[#4F5D2F] font-bold hover:bg-[#D7CE93] transition">
              Cancel
            </button>
            <button type="submit" className="flex-1 py-3 rounded-2xl bg-[#4F5D2F] text-[#EFEBCE] font-bold hover:bg-[#3a4422] transition">
              Plant It 🌱
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabitModal;
