
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <ExpandableText maxChar={100}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
      </ExpandableText>
    </div>
  );
}

export default App;







/* import ListGroup from "./components/ListGroup";
import { CgProfile } from "react-icons/cg"
import styles from './App.module.css'

function App() {

  const items = ["New York", "New Fork"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={() => { console.log(items); }} />
      <div className={styles.leftIconContainer}>
        <CgProfile size={40} />
      </div>

    </div>


  );
}

export default App; */

/* 
import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      contact: "0171256489"
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <div>
      <button onClick={handleClick} style={{borderRadius: '6px',position:"fixed"}}>Click Here</button>
    </div>
  );
}

export default App;
*/

/* 
  const [pizza,setPizza]=useState({
    name: 'Chicken',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']});
  };
  
*/


/* 
function App() {
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 }
    ]
  });
  const handleClick = () => {
    setCart({ ...cart, items: cart.items.map(item => item.id == 1 ? { ...item, quantity: item.quantity + 1 } : item) });
  };

*/

/* 
function App() {
  const [tags, setTags] = useState(['HAPPY','CHEERFUL']);

  const handleClick = () => {
    //Add
    setTags([...tags,'adding this to the array'])

    //Remove
    setTags(tags.filter(tag => tag!='HAPPY'))

    //Update
    setTags(tags.map(tag => tag==='HAPPY' ? 'Happiness' : tag))
  };
*/

/* 
import { useState } from "react";
import {produce} from "immer";

function App() {
  const [cartItems, setCartItems] = useState({
    Price: 6,
  });

  const handleClick = () => {
    setCartItems(
      produce(cartItems, draft => {
        draft.Price = 5;
      })
    );
  };

  return (
    <div>
      {cartItems.Price}
      <button onClick={handleClick}>Update Price</button>
    </div>
  );
}

export default App;
*/