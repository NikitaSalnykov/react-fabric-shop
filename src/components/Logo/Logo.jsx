import { Link } from "react-router-dom"
import Svg from "../Svg/Svg"

export const Logo = ({size, textSize}) => {
  return (
            <Link to="/" className="-m-1.5 p-1.5 flex justify-center items-center gap-2">
              <Svg id={'logo'} size={size}></Svg>
              <div className="flex flex-col  leading-none ">
              <p className={`text-[#cb1183] font-extrabold text-[${textSize}px] uppercase`}>Dream</p>
              <p className={`text-[white] bg-gradient-to-r to-[#c367f9] from-[#ff4f75] text-center font-extrabold text-[${textSize}px] uppercase `}>Fatin</p>
              </div>
            </Link>
  )
}
