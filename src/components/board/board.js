import { react } from "react"
import style from "./board.module.scss"
import { Footer } from "./footer"
import { Header } from "./header"
import { Menu } from "./menu"
import {
  SpreadLayout,
  FirstSpread,
  LastSpread,
  EmptySpread,
} from "./spread-layout"

export const Board = () => {
  return (
    <div className={style.board}>
      <Menu />
      <Header />
      <div className={style.row}>
        <FirstSpread />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <EmptySpread />
        <EmptySpread />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <EmptySpread />
        <EmptySpread />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <SpreadLayout />
        <LastSpread />
      </div>
      <Footer />
    </div>
  )
}
