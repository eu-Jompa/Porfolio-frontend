import React from 'react'
import style from './Cards.module.css'
import { FaExternalLinkAlt,  FaGithub } from "react-icons/fa";

const Cards = ({img,title,description}) => {
    return (
        
        <div className={style.card}>
                
            <img src={img} alt="" />
            <div className={style.info}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
            <div className={style.buttons}>
                <div className={style.link}>
                    <FaExternalLinkAlt />
                </div>
                <div className={style.link}>
                    <FaGithub />
                </div>
                
            </div>
            
        </div>
        
        
    )
}

export default Cards