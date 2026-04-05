const Button = ({ img, color, type, id, editTask, deleteTodo, completedTodo }) => {

  const eventHandle = () => {
    switch (type) {
      case "delete":
        deleteTodo?.(id);
        break;
      case "edit":
        editTask?.(id);
        break;
      case "complete":
        completedTodo?.(id);
        break;
    }
  };

  return (
    <div
      onClick={eventHandle}
      className={`h-14 w-14 rounded-[10px] cursor-pointer ${color} flex justify-center items-center`}
    >
      <img className="h-10 w-10" src={img} alt="" />
    </div>
  );
};

export default Button;