import React, { useState } from 'react';
import style from './Contato.module.css';
import axios from 'axios';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        // Validação simples para evitar 400
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        try {
            await axios.post('https://porfolio-backend-xxhc.onrender.com/contato', {
                nome,
                email,
                mensagem
            });

            alert('Mensagem enviada com sucesso!');

            // Limpa os campos após envio
            setNome('');
            setEmail('');
            setMensagem('');
        } catch (error) {
            alert("Erro ao enviar a mensagem. Tente novamente.");
            console.error(error);
        }
    }

    return (
        <div className={style.container}>
            <h2>Entre em<span> Contato</span></h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Escreva sua mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={5} // opcional, define altura
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contato;
