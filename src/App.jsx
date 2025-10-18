import Botao from "./composers/Botao/Botao";
import TextArea from "./composers/TextArea/TextArea";
import RadioButao from "./composers/RadioBotao/RadioButao";
import Seletor from "./composers/seletor/Seletor";
import Numero from "./composers/numero/Numero";
import Label from "./composers/Label/Label";
import Texto from "./composers/texto/texto";
import "./app.css";
export default function App(){
  return( <>
  <div className="login container">
  
  <h1>Cadastro  de Filmes</h1>
   <form className="login-form">
  <Texto legenda="Nome" nome="Nome"/>
  <Texto legenda="Diretor" nome="Diretor"/>
   <Numero legenda="Ano" nome="Ano"/>
   <Seletor legenda="Estilo" nome1="Estilo" nome2="Estilo" id="Estilo" conteudo1="Romance" conteudo2="Terror" conteudo3="Comedia" conteudo4="Suspense"/>
 
   <RadioButao nome="Nota" legenda1="Nota1" nome1="1" name="Nota1" id1="Nota1" legenda2="Nota2" nome2="2" name2="Nota2" id2="Nota2" legenda3="Nota3" nome3="3" name3="Nota3" id3="Nota3" legenda4="Nota4" nome4="4" name4="Nota4" id4="Nota4" legenda5="Nota5" nome5="5" name5="Nota5" id5="Nota5" />

   <TextArea legenda="Review" nome="Review"/>
   <Botao legenda="Cadastro de filme" nome="Enviar"/>
   </form>
  </div>  </>)
}