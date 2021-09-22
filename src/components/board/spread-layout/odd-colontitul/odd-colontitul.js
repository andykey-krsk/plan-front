import { react } from "react"
import style from "./odd-colontitul.module.scss"

export const OddColontitul = (props) => {
  //code
  return (
    //jsx
    <div className={style.oddColontitul}>
      <div className={style.ver}>{props.info.qr}</div>
      <div className={style.ver}>{props.info.ver}</div>
      <div className={style.cor}>{props.info.cor}</div>
      <div className={style.numPage}>{props.info.number}</div>
    </div>
  )
}
