import { useState } from "react";
const GoalForm = ({ onClose, onSave }) => {
    const [form, setForm] = useState({
        title: "",
        category: "",
        deadline: "",
        description: "",
        tasks: []
      });
      const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
        onClose();
      };
      return(
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#EFEBCE] rounded-3xl p-8 w-full max-w-md shadow-2xl border border-[#D7CE93]">
            <h2 className="text-2xl font-title font-bold text-[#4F5D2F] mb-6">🌱 Plant a New Goal</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input className="input-box" placeholder="Goal title" value={form.title} onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))} required />
                <textarea className="input-box resize-none" placeholder="Description" rows={3} value={form.description} onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))} />
                <div className="flex gap-3">
                <select className="input-box flex-1" value={form.category} onChange={e => setForm(prev => ({ ...prev, category: e.target.value }))}>
                    <option>Learning</option>
                    <option>Health</option>
                    <option>Work</option>
                    <option>Personal</option>
                </select>
                <input type="date" className="input-box flex-1" value={form.deadline} onChange={e => setForm(prev => ({ ...prev, deadline: e.target.value }))} required />
                </div>
                <div className="flex gap-3 mt-2">
                <button type="button" onClick={onClose} className="flex-1 py-3 rounded-2xl border-2 border-[#A3A380] text-[#4F5D2F] font-bold hover:bg-[#D7CE93] transition">Cancel</button>
                <button type="submit" className="flex-1 py-3 rounded-2xl bg-[#4F5D2F] text-[#EFEBCE] font-bold hover:bg-[#3a4422] transition">Plant It 🌱</button>
                </div>
            </form>
            </div>
        </div>
      );
};
export default GoalForm;