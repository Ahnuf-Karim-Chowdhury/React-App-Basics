import {ReactNode} from 'react'

interface Props{
    children: ReactNode;
    color?: "primary" | "secondary" | "danger";
    onClick: ()=>void;
}

const Buttons = ({children,color="primary",onClick}:Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Buttons

/* 
import Buttons from "./components/Buttons";

function App() {

  return (<Buttons color="secondary" onClick={()=>{console.log("Clicked");}}> Zangetsu </Buttons>);
}

export default App;
 */