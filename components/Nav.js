import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <div className={navStyles.flex}>
      <div className="mr1"><Link href="/contact">Contact me</Link></div>
      <div className="mr1"><Link href="/catalogue">Catalogue</Link></div>
      <div className="mr1"><Link href="/randomP">Random Photo</Link></div>
      <div className="mla">
        <div className="mr2"><Link href="/about">about</Link></div>
        <div className="mr2"><Link href="/">home</Link></div>
      </div>
    </div>
  )
}

export default Nav