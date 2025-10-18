export default function Label(props){
    return(
        <>
        <div>
            <label htmlFor={props.legenda}>{props.nome}</label>
        </div>
        </>
    )
}