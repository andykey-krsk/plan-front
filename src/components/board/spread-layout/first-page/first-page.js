import { react } from "react"
import { OddColontitul } from "../odd-colontitul/odd-colontitul"
import style from "./first-page.module.scss"

export const FirstPage = (props) => {
  //code
  return (
    //jsx
    <div className={style.firstPage}>
      <OddColontitul number={props.page.number} />
      <div className={style.content}>
        <div className={style.anons}>Анонсы</div>
        <div className={style.title}>Заголовок</div>
        <div className={style.photo}>Фото</div>
      </div>
    </div>
  )
}
