import { react, useRef } from "react"
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

const numberData = {
  number: 73,
  gross: 1349,
  date: "24 сентября 2021 года ",
  value: 32,
  edition: 40000,
  order: 2110,
}

const pages = makePages(32)

function makePages(value) {
  const pages = []
  for (let i = 1; i <= value; i++) {
    pages.push({
      id: i,
      number: i,
      article: "статья",
      cor: "Н",
      ver: "А",
      qr: "Q",
    })
  }
  return pages
}

const currentNumber = makeSpreads(pages)
function makeSpreads(pages) {
  const result = []
  const temp = []
  let even = {}
  let odd = {}
  pages.forEach((el) => {
    if (el.number === 1) {
      result.push(<FirstSpread page={el}/>)
      temp.push(el)
    }

    if (el.number === pages.length) {
      result.push(<LastSpread page={el} />)
      temp.push(el)
    }

    if (el.number > 1 && el.number < pages.length) {
      if (el.number % 2 === 0) {
        even = el
      } else {
        odd = el
        result.push(<SpreadLayout even={even} odd={odd} />)
        even = {}
        odd = {}
      }

      if (el.number === 11 || el.number === 21) {
        result.push(<EmptySpread />)
        result.push(<EmptySpread />)
      }
    }
  })
  return result
}

export const Board = () => {
  const ref = useRef()
  return (
    <div ref={ref} className={style.board}>
      <Menu />
      <Header
        numberData={`НКК №${numberData.number}/${numberData.gross} от ${numberData.date}`}
      />
      <div className={style.row}>{currentNumber}</div>
      <Footer />
    </div>
  )
}
