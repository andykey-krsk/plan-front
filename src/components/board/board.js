import { react } from "react"
import style from "./board.module.scss"
import { Footer } from "./footer"
import { Header } from "./header"
import { Menu } from "./menu"
import { Spread } from "./spread"

export const Board = () => {
  return (
    <div className={style.board}>
      <Menu />
      <Header />
      <div className={style.row}>
        <Spread />
        <Spread />
        <Spread />
        <Spread />
        <Spread />
        <Spread />
      </div>
      <Footer />
    </div>
  )
}
