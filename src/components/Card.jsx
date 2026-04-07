import Button from "./Button";

const Card = ({ item, deleteTodo, editTask, completedTodo }) => {
  return (
    <div className="bg-[#374151] p-4 w-full rounded-2xl shadow-md">

     
      <div className="flex flex-col gap-3 md:hidden">

        {/* TEXT */}
        <div className="w-full bg-[#111827] p-3 rounded-lg border border-[#4B5563]">
          <p
            className={`font-semibold text-[#E5E7EB] break-words ${
              item.status === "Completed" || item.status === "Expired"
                ? "line-through text-[#9CA3AF]"
                : ""
            }`}
          >
            {item.text}
          </p>
        </div>

     
        <div className="flex gap-2">

        
          <span
            className={`flex-1 text-center px-2 py-1 rounded text-xs font-bold text-black ${item.priority[1]}`}
          >
            {item.priority[0]}
          </span>

         
          <span className="flex-1 text-center px-2 py-1 rounded text-xs font-bold text-black bg-blue-500">
            {item.category}
          </span>

     
          <span
            className={`flex-1 text-center px-2 py-1 rounded text-xs font-bold text-black ${
              item.status === "Active"
                ? "bg-yellow-500"
                : item.status === "Completed"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {item.status}
          </span>

        </div>

      
        <div className="flex justify-center gap-3">

          <Button
            type="complete"
            id={item.id}
            completedTodo={completedTodo}
            img={`${import.meta.env.BASE_URL}right.png`}
            color="hover:bg-green-500/50"
          />

          <Button
            type="edit"
            id={item.id}
            editTask={editTask}
            img={`${import.meta.env.BASE_URL}edit.png`}
            color="hover:bg-violet-500/20"
          />

          <Button
            type="delete"
            id={item.id}
            deleteTodo={deleteTodo}
            img={`${import.meta.env.BASE_URL}delete.png`}
            color="hover:bg-red-500/20"
          />

        </div>

      </div>

     
      <div className="hidden md:flex flex-col gap-3">

        <div className="flex w-full gap-4">
          <div className="flex-1 h-20 bg-[#111827] p-4 rounded-2xl border border-[#4B5563] min-w-0">
            <p
              className={`font-semibold text-[#E5E7EB] break-words ${
                item.status === "Completed" || item.status === "Expired"
                  ? "line-through text-[#9CA3AF]"
                  : ""
              }`}
            >
              {item.text}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="complete"
              id={item.id}
              completedTodo={completedTodo}
              img={`${import.meta.env.BASE_URL}right.png`}
              color="hover:bg-green-500/50"
            />
            <Button
              type="edit"
              id={item.id}
              editTask={editTask}
              img={`${import.meta.env.BASE_URL}edit.png`}
              color="hover:bg-violet-500/20"
            />
            <Button
              type="delete"
              id={item.id}
              deleteTodo={deleteTodo}
              img={`${import.meta.env.BASE_URL}delete.png`}
              color="hover:bg-red-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className={`px-2 ${item.priority[1]} py-1 w-[60px] flex justify-center items-center rounded text-xs text-black font-bold`}>
            {item.priority[0]}
          </span>

          <span className="bg-blue-500 flex justify-center px-2 py-1 text-black items-center w-[100px] rounded text-xs font-bold">
            {item.category}
          </span>

          <span
            className={`text-black flex justify-center px-2 py-1 items-center w-[140px] ${
              item.status === "Active"
                ? "bg-yellow-500"
                : item.status === "Completed"
                ? "bg-green-500"
                : "bg-red-500"
            } rounded text-xs font-bold`}
          >
            Status :- {item.status}
          </span>

          <span className="font-bold text-[#9CA3AF]">
            Created Date : {item.createDate}
          </span>

          <span className="ml-8 font-bold text-[#9CA3AF]">
            End Date : {item.revEndDate}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Card;