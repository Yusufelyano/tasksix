import { useState } from "react"

const Heroes = () => {
   const [name, setName] = useState([
      "Шерлок Холмс",
      "Доктор Ватсон",
      "Профессор Мориарти",
      "Миссис Хадсон",
      "Ирен Адлер"
   ])
   return (
      <div>
         <ul>
            {name.map((item) => {
               return <li>{item}</li>
            })}

         </ul>
      </div>
   )
}

export default Heroes