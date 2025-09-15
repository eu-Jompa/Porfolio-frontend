import React from 'react'
import style from './Home.module.css'
import Sobremim from '../../Components/Sobremim/Sobremim'
import { FaGraduationCap, FaLinkedin, FaInstagramSquare, FaGithubSquare   } from "react-icons/fa";
import Portfolio from '../../Components/Portfolio/Portfolio';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.profile}>
                    <img src="/Jompa.png" alt="" />
                    <h1>João Paulo Nascimento</h1>
                    <div className={style.graduation}>
                        <FaGraduationCap />
                        <p>ADS - Unifor</p>
                    </div>
                    
                    <a href="https://www.instagram.com/eu_jompa?igsh=MXJtcGs1dTByMmVyeQ==" target="_blank" rel="noopener noreferrer" className={style.rede}>
                        <FaInstagramSquare />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/jpnascimentoa/" target="_blank" rel="noopener noreferrer" className={style.rede}>
                        <FaLinkedin/>
                        <span>Linkedin</span>
                    </a>
                    
                    <a href="https://github.com/eu-Jompa" target="_blank" rel="noopener noreferrer" className={style.rede}>
                        
                        <FaGithubSquare />
                        <span>Github</span>
                    </a>
                    
                    
                    <img className={style.img} src="./Logo.png" alt="" />
                    
                    <span>• 2025 •</span>
            </div>
            <div className={style.conteudo}>
                <div className={style.menu}>
                    
                    <Link to="/">
                        <div className={style.sobremim}>
                            <p>Sobre mim</p>
                                
                        </div>
                    </Link>
                    
                    <Link to="/projetos">
                        <div className={style.Portfolio}>
                            <p>Projetos</p>
                                
                        </div>
                    </Link>
                    
                    <Link to="/contato">
                        <div className={style.Portfolio}>
                            <p>Contato</p>
                                
                        </div>
                    </Link>
                    
                        
                    
                </div>
                <Outlet/>
                
                <p></p>
            </div>

        </div>
    )
}

export default Home