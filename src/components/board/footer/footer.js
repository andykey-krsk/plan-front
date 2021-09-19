import { react } from "react"
import style from "./footer.module.scss"
import { Legend } from "./Legend"
import { Timer } from "./Timer"

export const Footer = () => {
  //code
  return (
    //jsx
    <div className={style.footer}>
      <Legend />
      <Timer />
    </div>
  )
}
