import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import FormsCreatPost from './Components/FormsCreatPost';
import Postlist from './Components/Postlist';
import { useState } from 'react';
import Postprovider from './Poststore/Postprovider';



function App() {
  const [currtab, settab] = useState("Home");


  const activtab = (value) => {
    if (value === "Home") {
      settab("Home")
    } else {
      settab("")
    }
  }

  return (
    <Postprovider>
      <div className='Appcontainer'>
        <Sidebar currtab={currtab} activtab={activtab} />
        <div className="hf">
          <Header />
          <div className='appcn'>
            {currtab === "Home" ? <Postlist /> : <FormsCreatPost />}
          </div>
          <Footer />
        </div>
      </div>
    </Postprovider>
  )
}

export default App
