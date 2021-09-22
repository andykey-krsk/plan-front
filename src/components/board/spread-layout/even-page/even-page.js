import { react } from "react"
import { EvenColontitul } from "../even-colontitul/even-colontitul"
import style from "./even-page.module.scss"

export const EvenPage = (props) => {
  //code
  //console.log("even", props.page)
  return (
    //jsx
    <div className={style.evenPage}>
      <EvenColontitul info={props.page} />
      <div className={style.content}>{props.page.article}</div>
    </div>
  )
}
