export default function TextArea(props){
    return(
      <>
      <div className="form-group">
          <label htmlFor={props.legenda}>{props.nome}</label> 
         <textarea className="form-control"/>
      </div>
      </>
    )
}