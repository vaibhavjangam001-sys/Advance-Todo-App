
const Button = ({img,color}) => {
  return (
    <div className={`h-14 w-14 rounded-[10px] cursor-pointer ${color} flex justify-center items-center`}>
        <img className="h-10 w-10" src={img} alt="" />
    </div>
  )
}

export default Button;