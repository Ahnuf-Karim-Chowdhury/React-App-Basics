import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import "./Heart.css";

const Heart = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={handleClick}>
      {isLiked ? (
        <IoMdHeart size={40} className="heart liked" />
      ) : (
        <CiHeart size={40} className="heart unliked" />
      )}
    </div>
  );
};

export default Heart;




/* 

*/


/* 
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";

const Heart = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={handleClick}>
      {isLiked ? <IoMdHeart /> : <CiHeart />}
    </div>
  );
};

export default Heart;


*/

/* 
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import "./Heart.css"

const Heart = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={handleClick}>
      {isLiked ? <IoMdHeart className="heart liked" /> : <CiHeart className="heart" />}
    </div>
  );
};

export default Heart;
*/

/* 
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

const Heart = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={handleClick}>
      <CiHeart className={`heart ${isLiked ? 'liked' : ''}`} />
    </div>
  );
};

export default Heart;
 */