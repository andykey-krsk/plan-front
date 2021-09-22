import { react } from "react"
import style from "./header.module.scss"

export const Header = (props) => {
  //code
  return (
    //jsx
    <div className={style.header}>{props.numberData}</div>
  )
}
