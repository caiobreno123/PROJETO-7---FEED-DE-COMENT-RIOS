import { useState } from "react";
import FormularioComentario from "./FormularioComentario";
import ListaComentario from "./ListaComentario";

export default function FeedComentarios() {
    const [comentarios, setComentarios] = useState([]);

    function adicionarComentario(novoComentario) {
        console.log("Adicionando comentário:", novoComentario);
        const novaLista = [...comentarios, novoComentario];
        console.log("Nova lista:", novaLista);
        setComentarios(novaLista);
    }

    return (
        <div>
            <FormularioComentario onAdicionarComentario={adicionarComentario} />
            <ListaComentario comentarios={comentarios} />
        </div>
    );
}
