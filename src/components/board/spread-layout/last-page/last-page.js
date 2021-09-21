import { react } from "react"
import { EvenColontitul } from "../even-colontitul/even-colontitul"
import style from "./last-page.module.scss"

export const LastPage = (props) => {
  //code
  return (
    //jsx
    <div className={style.lastPage}>
      <EvenColontitul number={props.page.number} />
      <div className={style.content}>{props.page.article}</div>
      <div className={style.row}>
        <div className={style.scanword}>сканворд</div>
        <div className={style.know}>знаете ли вы</div>
      </div>
      <div className={style.output}>выходник</div>
    </div>
  )
}
