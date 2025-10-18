export default function RadioButao(props){
    return(
        <>
       
            <div className="form-group">
                 <div className="">
                <label  htmlFor={props.legenda}>{props.nome}</label>
        </div>
            <div className="form-check form-check-inline">
                <label className="form-check-label"htmlFor={props.legenda1}>{props.nome1}</label>
                <input className="form-check-input" type="radio" name={props.name1} id={props.id1} value={props.valor1}/>
            </div>
             <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor={props.legenda2}>{props.nome2}</label>
                                       <input  className="form-check-input" type="radio" name={props.name2} id={props.id2} value={props.valor2}/>
                       </div>
                      <div className="form-check form-check-inline">
       <label className="form-check-label" htmlFor={props.legenda3}>{props.nome3}</label>
                                       <input  className="form-check-input" type="radio" name={props.name3} id={props.id3} value={props.valor3}/>
                       </div>
            <div className="form-check form-check-inline">
           <label className="form-check-label" htmlFor={props.legenda4}>{props.nome4}</label>
                                       <input  className="form-check-input" type="radio" name={props.name4} id={props.id4} value={props.valor}/>
                       </div>
              <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor={props.legenda5}>{props.nome5}</label>
                                       <input  className="form-check-input" type="radio" name={props.name5} id={props.id5} value={props.valor}/>
                       </div>
       
        </div>
        </>
    )
}