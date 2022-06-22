import Head from 'next/head'
import Image from 'next/image'
import { flushSync } from 'react-dom'
import homeStyles from '../styles/Home.module.css'
import {server} from "../config"
import Layout from "../components/Layout"
const fs = require('fs')

export default function Home( {filesJson} ) {
  return (
    <>
      <Head>
        <title>The Dolly Club</title>
        <meta name="keywords" content="dolly" />
      </Head>
      <table className={homeStyles.table}>
        <tbody>
          <tr>
            <td><p>Money 4 hugs?</p></td>
            <td><Image src="/placeholder.png" alt="Placeholder for the title" width="450px" height="200px" /></td>
            <td><p>Ahoy there, this be the site of the dolly club!</p></td>
          </tr>
        </tbody>
      </table>

      <h2>{filesJson}</h2>

      {/*{filesJson.map((file, i) => <h3 key={i}>{file}</h3>)}*/}

      </>
  )
}
{/*
export const getInitialProps = async () => {
  const dirPath = "../photos"
  const filesJson = {message:"Test"}
  fs.readdir(dirPath, function(err, files) {

    filesJson = files.json()
    console.log(filesJson)
  })
  return {
    props: filesJson
  }
}

*/}

export const getServerSideProps = async () => {
  let filesJson = `${server}/photos`
  return {
    props: {filesJson}
  }
}