import React from "react"
import './App.css';
import { BarMenu } from "./BarMenu";
import { Header } from "./Header"
import { SwitchLinks } from "./SwitchLinks"


function App() {
  const [bar, setBar] = React.useState(false)


  function handleContentLinks(event) {
    setBar(true)

  }
  function displayContent(event) {
    setBar(false)
  }



  return (
    <div className="w-screen h-screen">
      <div className='main w-screen py-6 border-b shadow backdrop-md-blur backdrop-md drop-shadow z-100 top-0 px-12 '>
        <Header onClick={handleContentLinks} />
      </div>

      {bar ? <BarMenu onClick={displayContent} /> : <SwitchLinks />}

    </div>
  );
}

export default App;


// backdrop-md   backdrop-sepia #e5e7eb