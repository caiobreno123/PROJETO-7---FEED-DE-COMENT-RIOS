import { useState } from "react";

export default function FormularioComentario({ onAdicionarComentario }) {
    const [nome, setNome] = useState("");
    const [comentario, setComentario] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Formulário submetido");
        
        if (nome && comentario) {
            console.log("Enviando:", { nome, comentario });
            onAdicionarComentario({ nome, comentario });
            setNome("");
            setComentario("");
        }
    }

    return (
        <div>
            <h1>Comentários</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nome do usuário" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                /><br />
                <input 
                    type="text" 
                    placeholder="Escreva um comentário..." 
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                /><br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}