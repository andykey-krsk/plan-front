import { react } from "react"
import style from "./menu.module.scss"

export const Menu = () => {
  //code
  return (
    <div className={style.menu}>
      <div>Текущий номер</div>
      <div>Новый номер</div>
      <div>Список материалов</div>
      <div>Реклама</div>
      <div>Номера заказа</div>
      <div>Запас</div>
      <div>Список рубрик</div>
      <div>Архив</div>
      <div>15.00</div>
    </div>
  )
}
