import { FC } from "react"

interface props{
    text:string,
    Icon: any
}

const HeaderLink:FC<props> = ({Icon, text}) => {
  return (
    <div className="flex flex-col text-gray-500 items-center">
      <div>{<Icon/>}</div>
      <div>{text}</div>
    </div>
  )
}

export default HeaderLink