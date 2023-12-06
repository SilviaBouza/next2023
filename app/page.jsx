import Image from 'next/image'
import styles from './page.module.css'

/*
CSS Modules
*/
export default function Home() {
  return (
    <main className={styles.main}>
      {/*page.js es la pagina de la home */}
      <h1>Hola Mundo</h1>
      </main>
  )
 }