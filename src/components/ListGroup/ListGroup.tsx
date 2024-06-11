import { useState } from "react";
import styles from "./ListGroup.module.css"

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className={[styles.ListGroup,styles.container].join(' ')}>
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item+" In the OnSelectItem Property");
                        }}

                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;


/* 
import ListGroup from "./components/ListGroup";

function App(){
  const items = ['One', 'Two', 'Three'];
  const handleSelectItem =(item: string) => {
    console.log(item);
  }
  return <h1><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></h1>
}

export default App;
*/


/* 
using bootstrap: 

import { useState } from "react";
import "./ListGroup.css"

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item+" In the OnSelectItem Property");
                        }}

                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
*/