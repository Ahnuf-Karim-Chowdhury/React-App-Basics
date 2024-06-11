import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  // Inline styles for the container and button
  const containerStyle = {
    marginTop: '50px',
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <button
        type="button"
        className="btn btn-secondary"
        style={buttonStyle}
        onClick={() => setCount(count + 1)}
      >
        {children} <br /> ({count})
      </button>
    </div>
  );
};

export default Button;

/* 
import Button from "./components/Button";

function App() {

  return (<Button>Hey This is a Button</Button>);
}

export default App;
 */