import React from 'react'
import style from './Sobremim.module.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from "react-icons/fa";

import { PiFileSqlFill } from "react-icons/pi";


const Sobremim = () => {
    return (
        <div className={style.sobremim}>
            <h2>Sobre <span>Mim</span></h2>
            <hr />
            <p>
                Olá! Me chamo João Paulo Nascimento, sou Desenvolvedor Web com foco em Front-End e estudante de Análise e Desenvolvimento de Sistemas na UNIFOR.
                Tenho experiência em desenvolvimento de sites responsivos utilizando HTML, CSS, JavaScript e React.js, além de conhecimento com WordPress.
                Atualmente, atuo como agente de atendimento ao cliente, o que fortaleceu ainda mais minha habilidade de comunicação, empatia e resolução de problemas — habilidades que também aplico na construção de interfaces que realmente atendem às necessidades do usuário.
                Estou em constante aprendizado e buscando oportunidades na área de tecnologia para aplicar e evoluir minhas habilidades técnicas.
            </p>
            
            <div className={style.habilidades}>
                <p>Habilidades</p>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJsSquare />
                <FaReact />
                <PiFileSqlFill />
                <FaGithub />

            </div>
            
        </div>
    )
}

export default Sobremim