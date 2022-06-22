import Nav from "./Nav"
import Header from "./Header"
import styles from "../styles/Layout.module.css"
import ImageBar from "./ImageBar"
const Layout = ({children}) => {
  return (
    <div>
      <Nav />
      <ImageBar names={
        Array.from(Array(19).keys()).map(x => ({x, sort: Math.random() })).sort((a,b) => a.sort - b.sort).map(({x}) => x).map(x => x+1).slice(0, 20)
      }/>
      <div className={styles.container}>
          <main className={styles.main}>
              <Header />
              {children}
          </main>
      </div>
    </div>
  )
}

export default Layout