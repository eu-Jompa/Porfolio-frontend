import React from 'react'
import style from './Portfolio.module.css'
import Sobremim from '../Sobremim/Sobremim'
import Cards from '../Cards/Cards'


const Portfolio = () => {
    return (
        <div className={style.container}>
            
                <h2>Port<span>Folio</span></h2>
                <hr></hr>
            
            
            <div className={style.cards}>
                <Cards img="./PamelaCapa.PNG" title="Leao" description="Gosto muito de te ver leaozinho"/>
                <Cards img="./EmailMarketingCapa.PNG" title="Claro Flex" description="Projeto realizado em html buscando utilizar booas práticas para email marketing"/>
                <Cards img="./PamelaCapa.PNG" title="Leao" description="Gosto muito de te ver leaozinho"/><Cards img="./PamelaCapa.PNG" title="Leao" description="Gosto muito de te ver leaozinho"/>
            </div>
            

            
        </div>
    )
}

export default Portfolio