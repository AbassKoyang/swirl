import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <Link className="flex items-center gap-2">
            <img src="../src/assets/swirl-logo.svg" alt="Swirl Logo" />
            <h1>Swirl</h1>
        </Link>
    </header>
  )
}

export default Navbar