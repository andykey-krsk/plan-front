import { react } from "react"
import style from "./legend.module.scss"

export const Legend = () => {
  //code
  return (
    //jsx
    <div className={style.legend}>
      <div className={style.legendBox}>
        <div className={style.legendMarker}>{}</div>
        <div className={style.legendText}>Текст у редактора</div>
      </div>
      <div className={style.legendBox}>
        <div className={style.legendMarker}>{}</div>
        <div className={style.legendText}>Текст сданм ожно читать</div>
      </div>
      <div className={style.legendBox}>
        <div className={style.legendMarker}>{}</div>
        <div className={style.legendText}>Текст вычитан</div>
      </div>
      <div className={style.legendBox}>
        <div className={style.legendMarker}>{}</div>
        <div className={style.legendText}>Полоса на верстке</div>
      </div>
      <div className={style.legendBox}>
        <div className={style.legendMarker}>{}</div>
        <div className={style.legendText}>Полоса в чистом</div>
      </div>
    </div>
  )
}
