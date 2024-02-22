import { Link } from "react-router-dom";
import Arrow from "../assets/yellowarrow.svg";

const LandingPageButton = ({text, styles}) => {
  return (
    <Link className={styles}>
        <p>{text}</p>
        <img src={Arrow} alt="Arrow icon" className="size-3.5" />
    </Link>
  )
}

export default LandingPageButton