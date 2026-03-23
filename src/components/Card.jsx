import Button from "./Button";

const Card = () => {
  return (
    <>
    <div className="bg-[#374151] flex flex-col p-4 w-full rounded-2xl gap-3">
      <div className="flex w-full gap-4">
        <div className="flex-1 h-20 bg-[#111827] p-4 rounded-2xl border border-[#4B5563] min-w-0">
          <p className="font-semibold text-[#E5E7EB] break-words">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt beatae consectetur nulla deserunt illo similique delectus
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button img="../public/right.png" color="hover:bg-green-500/50" />
          <Button img="../public/not.png" color="hover:bg-yellow-500/20" />
          <Button img="../public/edit.png" color="hover:bg-violet-500/20" />
          <Button img="../public/delete.png" color="hover:bg-red-500/20" />
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="bg-green-500 px-2 py-1 rounded text-xs font-semibold">
          Low
        </span>
        <span className="bg-blue-500 px-2 py-1 rounded text-xs font-semibold">
          Personal
        </span>

        <span className=" font-bold text-[#9CA3AF]">Created: Mar 21, 09:17 PM</span>
      </div>
    </div>







    <div className="bg-[#374151] flex flex-col p-4 w-full rounded-2xl gap-3">
      <div className="flex w-full gap-4">
        <div className="flex-1 h-20 bg-[#111827] p-4 rounded-2xl border border-[#4B5563] min-w-0">
          <p className="font-semibold text-[#E5E7EB] break-words">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel Lorem Lorem 
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button img="./right.png" color="hover:bg-green-500/50" />
          <Button img="./not.png" color="hover:bg-yellow-500/20" />
          <Button img="./edit.png" color="hover:bg-violet-500/20" />
          <Button img="./delete.png" color="hover:bg-red-500/20" />
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="bg-green-500 px-2 py-1 rounded text-xs font-semibold">
          Low
        </span>
        <span className="bg-blue-500 px-2 py-1 rounded text-xs font-semibold">
          Personal
        </span>

        <span className=" font-bold text-[#9CA3AF]">Created: Mar 21, 09:17 PM</span>
      </div>
    </div>

    </>
  );
};

export default Card;
