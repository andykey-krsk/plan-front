import { react } from "react"
import { EvenPage } from "./even-page"
import { FirstPage } from "./first-page"
import { LastPage } from "./last-page"
import { OddPage } from "./odd-page"
import { Spread } from "./spread"
import style from "./spread-layout.module.scss"

export const SpreadLayout = (props) => {
  //code
  return (
    //jsx
    <div className={style.spread}>
      <EvenPage page={props.even} />
      <OddPage page={props.odd} />
    </div>
  )
}

export const FirstSpread = (props) => {
  //code
  return (
    //jsx
    <div className={style.firstSpread}>
      <FirstPage page={props.page} />
    </div>
  )
}

export const LastSpread = (props) => {
  //code
  return (
    //jsx
    <div className={style.lastSpread}>
      <LastPage page={props.page} />
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
