import React, {useState} from 'react'
import './App.css'
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className="App">
    <Header />
  <button onClick={() => setShow(true) }>Show Modal</button>
  <Modal onClose={() => setShow(false)} show={show}/>
    </div>

    </>
  )
}

export default App;
