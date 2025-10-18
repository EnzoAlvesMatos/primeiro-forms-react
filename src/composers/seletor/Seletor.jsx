
export default function Seletor(props){
return(
    <>
     <div className="form-group" >
      <label htmlFor={props.legenda}>{props.nome1}</label>
      <select className="form-control form-control-sm " name={props.nome2} id={props.id}>
        <option value="">Selecione</option>
        <option value="1">{props.conteudo1}</option>
        <option value="2">{props.conteudo2}</option>
        <option value="3">{props.conteudo3}</option>
        <option value="4">{props.conteudo4}</option>
      </select>
     </div>
    </>
)
}