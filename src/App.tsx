import Navbar from "./scenes/navbar"
import { useState, useEffect } from 'react';
import { SelectedPage } from './shared/type';

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if(window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  },[]) 



  return (
    <div className="bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
