import { ReactNode } from "react";

interface Props {
     children: ReactNode;
     onClose: ()=>void;
}

const Alert = ({children,onClose}: Props) => {
  return (
    <div className="alert alert-secondary alert-dismissible">{children}
     <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert

/* 
import Alert from "./components/Alert";

function App() {

  return (<div>
      <Alert>
      Hello <span>There Traveller!</span>
      </Alert>
      </div>);
}

export default App; */

/* 
import { useState } from "react";
import Buttons from "./components/Buttons";
import Alert from "./components/Alert";


function App() {

  const [alertVisibility,setAlertVisibility] =useState(false);

  return (
    <div>
      {alertVisibility && <Alert onClose={()=>{setAlertVisibility(false)}}>Hey This is a Alert!</Alert>}
      <Buttons color="secondary" onClick={()=>{setAlertVisibility(true)}}> Zangetsu </Buttons>
    </div>)
}

export default App;
*/