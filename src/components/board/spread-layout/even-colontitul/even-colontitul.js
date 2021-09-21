import { react } from "react"
import style from "./even-colontitul.module.scss"

export const EvenColontitul = (props) => {
  //code
  return (
    //jsx
    <div className={style.evenColontitul}>
      <div className={style.numPage}>{props.number}</div>
      <div className={style.ver}>А</div>
      <div className={style.cor}>Н</div>
      <div className={style.ver}>Q</div>
    </div>
  )
}
