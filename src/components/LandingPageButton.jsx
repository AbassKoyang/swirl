import Arrow from "../assets/yellowarrow.svg";

const LandingPageButton = ({text, styles}) => {
  return (
    <button to='/' className={styles}>
        <p>{text}</p>
        <img src={Arrow} alt="Arrow icon" />
    </button>
  )
}

export default LandingPageButton