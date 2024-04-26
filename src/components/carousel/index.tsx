import {useState} from "react";
import './style.sass';
import LeftCaretIcon from "./leftCaretIcon";
import RightCaretIcon from "./rightCaretIcon";

type Props = {
  elements: string[],
  className?: string,
}

function selectNextPicture (index: number, size: number) {
  return index + 1 >= size ? 0 : index + 1;
}
function selectPreviousPicture (index: number, size: number) {
  return index - 1 < 0 ? size - 1 : index - 1;
}

export default function Carousel ({ elements, className }: Props) {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const goPrevious = () => setCurrentIndex(selectPreviousPicture(currentIndex, elements.length));
  const goNext     = () => setCurrentIndex(selectNextPicture(currentIndex, elements.length));

  return <div className={`image-carousel ${className ?? ''}`}>
    <img src={`/images/rent/${elements[currentIndex]}`} alt="" className="image-carousel--screen" />

    <span className="image-carousel--count">{currentIndex + 1}/{elements.length}</span>

    <button className="image-carousel--action" onClick={goPrevious}>
      <LeftCaretIcon />
    </button>
    <button className="image-carousel--action" onClick={goNext}>
      <RightCaretIcon />
    </button>
  </div>
}
