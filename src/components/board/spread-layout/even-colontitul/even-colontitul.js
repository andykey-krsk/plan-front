import { react } from "react"
import style from "./even-colontitul.module.scss"

export const EvenColontitul = (props) => {
  //code
  return (
    //jsx
    <div className={style.evenColontitul}>
      <div className={style.numPage}>{props.info.number}</div>
      <div className={style.ver}>{props.info.ver}</div>
      <div className={style.cor}>{props.info.cor}</div>
      <div className={style.ver}>{props.info.qr}</div>
    </div>
  )
}
