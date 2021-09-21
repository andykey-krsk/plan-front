import { react } from "react"
import style from "./odd-colontitul.module.scss"

export const OddColontitul = (props) => {
  //code
  return (
    //jsx
    <div className={style.oddColontitul}>
      <div className={style.ver}>Q</div>
      <div className={style.ver}>А</div>
      <div className={style.cor}>Н</div>
      <div className={style.numPage}>{props.number}</div>
    </div>
  )
}
