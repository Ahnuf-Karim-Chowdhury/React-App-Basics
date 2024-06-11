import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import styles from "./CleanHeart.module.css";

const CleanHeart = () => {
  const [isLiked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!isLiked);
  };

  return (
    <div onClick={handleClick} className={styles.iconContainer}>
      {isLiked ? (
        <IoMdHeart className={[styles.leftIconContainer , styles.heartLiked].join(' ')} size={40} />
      ) : (
        <CiHeart className={styles.leftIconContainer} size={40} />
      )}
    </div>
  );
};

export default CleanHeart;



/* 
import CleanHeart from "./components/ReactHeartButton/CleanHeart";


function App() {


  return (
    <div>
    <CleanHeart />
    </div>
  );
}

export default App;
*/