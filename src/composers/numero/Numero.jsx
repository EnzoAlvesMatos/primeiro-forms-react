export default function Numero(props){
    return(
        <>
        <div className="form-group">
            <label htmlFor={props.legenda}>{props.nome}</label>
            <input className="form-control" type="number" />
        </div>
        </>
    )
}
