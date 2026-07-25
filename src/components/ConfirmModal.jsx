const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#FAF7EE] rounded-3xl p-8 w-full max-w-sm shadow-2xl flex flex-col gap-5">
        <p className="text-lg font-bold text-[#4F5D2F] text-center">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-2xl border-2 border-[#c9c3a0] text-[#4F5D2F] font-bold hover:bg-[#EFE8CE] transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-2xl bg-[#BB8588] text-white font-bold hover:bg-[#a06060] transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;