/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Works from "../components/Works"; 

function Home() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Works />
      <Footer />
    </>
  );
}

export default Home;
