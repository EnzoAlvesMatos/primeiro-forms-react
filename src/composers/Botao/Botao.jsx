
export default function Botao(props, onclick){
    return(
        <>
        <div>
            <button className="btn btn-primary" onClick={() => alert(props.legenda)}>{props.nome}</button>
        </div>
        </>
    )
}
