
const Button = ({img,color,type,id,Edit,Delete}) => {

  const eventHadle = () => {

    switch (type) {

      case 'delete': Delete(id); break;
      case 'edit' : Edit(id); break;
    }
  }

  return (
    <div onClick={eventHadle}  className={`h-14 w-14 rounded-[10px] cursor-pointer ${color} flex justify-center items-center`}>
        <img className="h-10 w-10" src={img} alt="" />
    </div>
  )
}

export default Button;