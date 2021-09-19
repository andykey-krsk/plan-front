import { react } from "react"
import { EvenPage } from "./even-page"
import { FirstPage } from "./first-page"
import { LastPage } from "./last-page"
import { OddPage } from "./odd-page"
import { Spread } from "./spread"
import style from "./spread-layout.module.scss"

export const SpreadLayout = () => {
  //code
  return (
    //jsx
    <div className={style.spread}>
      <EvenPage />
      <OddPage />
    </div>
  )
}

export const FirstSpread = () => {
  //code
  return (
    //jsx
    <div className={style.firstSpread}>
      <FirstPage>Первая</FirstPage>
    </div>
  )
}

export const LastSpread = () => {
  //code
  return (
    //jsx
    <div className={style.lastSpread}>
      <LastPage>Последняя</LastPage>
    </div>
  )
}

export const EmptySpread = () => {
  //code
  return (
    //jsx
    <div className={style.EmptySpread}>{}</div>
  )
}
