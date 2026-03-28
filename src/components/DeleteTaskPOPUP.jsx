const Delete = ({ onConfirm, onCancel }) => {
  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-80 text-center">
        <h1 className="text-lg text-red-500 font-semibold mb-4">
          Confirm delete task?
        </h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded"
          >
            Confirm
          </button>

          <button
            onClick={onCancel}
            className="bg-green-400 px-4 cursor-pointer py-2 rounded"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default Delete;