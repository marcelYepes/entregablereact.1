import getRandomArray from "../utils/getRandomArray";
import phrases from "../utils/phrases.json";

const Button = ({ setPhraseRandom, setnumberImg }) => {
  const handleClick = () => {
    setPhraseRandom(getRandomArray(phrases));
    setnumberImg(getRandomArray([1, 2, 3, 4]));
  };

  return (
    <button className="App__btn" onClick={handleClick}>
      Ver otro
    </button>
  );
};

export default Button;
