import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Home: React.FC = () => {
  const [inputIP, setInputIP] = useState('')
  const router = useRouter()
  const env = process.env.NEXT_PUBLIC_IP_EXAMPLE;
  // const file = getScreenshot('https://myip.ms/')
  function handleClick(text: any) {
    alert(text)
  }
  useEffect(() => {
    console.log(env)
    setInputIP(env)
  }, [])
  return (
    <div className="container">
      <Head>
        <title>Primefox - Get RangeIP</title>;
      </Head>
      <div className="card">
        <h3>Buscar. . .</h3>
        <input type="text" placeholder={inputIP} onChange={e => setInputIP(e.target.value)} />
        {/* <button type="submit" onClick={() => router.push(`/getrange/${inputIP}`)}>API Range</button><p /> */}
        <button type="button" onClick={() => handleClick(inputIP)}>Get Range</button>
      </div>
      <div className="bottom">
        <a href="http://primefox.com.br" target="_blank">Primefox Soluções</a>
        <img src="logo-prime.png" alt="PrimeFox Soluçoes em T.i" />
      </div>
    </div>
  )
}
export default Home;