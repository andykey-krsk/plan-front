import { react } from "react"
import { OddColontitul } from "../odd-colontitul/odd-colontitul"
import style from "./odd-page.module.scss"

export const OddPage = (props) => {
  //code
  return (
    //jsx
    <>
      <div className={style.oddPage}>
        <OddColontitul info={props.page} />
        <div className={style.content}>{props.page.article}</div>
      </div>
    </>
  )
}
