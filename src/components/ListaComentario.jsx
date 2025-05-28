export default function ListaComentario({ comentarios }) {
    return (
        <div>
            <h2>Comentários:</h2>
                {comentarios.map((comentario, index) => (
                    <ul key={index}>
                        <strong>{comentario.nome}:</strong> {comentario.comentario}
                    </ul>
                ))}
        </div>
    );
}