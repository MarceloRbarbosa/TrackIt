import { useState } from "react"


function Header(){
    const [image , setImage]= useState['']

    return(
     <div>
        <p>TrackIt </p>
        <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/Goku_Dragon-Ball.png?w=1200&h=1200&crop=1"/>
     </div>
    )
}

export default Header