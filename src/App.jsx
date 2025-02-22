import { useState } from "react";
import "./App.css";
import { motion } from "motion/react"
import { Button } from "./components/button/Button";
import { Header } from "./components/header/Header";
import { Section3 } from "./components/section3/Section3";
import { Section2 } from "./components/section2/Section2";
import { Section0 } from "./components/section0/Section0";
import { Section1 } from "./components/section1/Section1";
import { Section4 } from "./components/section4/Section4";
import { Footer } from "./components/footer/Footer";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Header/>
     <Section0/>
    <Section1/>
     <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  );
}

export default App;
