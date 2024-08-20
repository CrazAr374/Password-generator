import { useState } from 'react'
import './App.css'
import { UC, LC, SC, NC } from './var'
import Nav from './header'

function App() {

  let [UpperCase, setUpperCase] = useState(false)
  let [LowerCase, setLowerCase] = useState(false)
  let [Numbers, setNumbers] = useState(false)
  let [Symbols, setSymbols] = useState(false)
  let [passwordlen, setpasswordlen] = useState(10)
  let [fpass, setfpass] = useState('')

  let createpass = ()=>{
    let finalpass = ''
    let charset = ''
    if(UpperCase || LowerCase || Numbers || Symbols){
      if(UpperCase) charset += UC;
      if(LowerCase) charset += LC;
      if(Numbers) charset += NC;
      if(Symbols) charset += SC;
      for(let i=0; i<passwordlen; i++){
        finalpass += charset.charAt(Math.floor(Math.random()*charset.length));
      }
      setfpass(finalpass);
    }
    else{
      alert('Please atleast one checkbox')
    }
  }

  let copypass = () => {
    navigator.clipboard.writeText(fpass);
    alert('Password copied to clipboard!')
  }

  return (
    <>
    <Nav></Nav>
      <div className='password'>
        <h2>Password Generator</h2>
        <div className='inp'>
          <input type = 'text' value={fpass} readOnly/><button onClick={copypass}>Copy Code</button>
        </div>
        <div className='len'>
          <label>Password length</label>
          <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setpasswordlen(event.target.value)}/>
        </div>
        <div className='len'>
          <label>UpperCase</label>
          <input type='checkbox' checked = {UpperCase} onChange={()=>setUpperCase(!UpperCase)}/>
        </div>
        <div className='len'>
          <label>LowerCase</label>
          <input type='checkbox' checked = {LowerCase} onChange={()=>setLowerCase(!LowerCase)}/>
        </div>
        <div className='len'>
          <label>Numbers</label>
          <input type='checkbox' checked = {Numbers} onChange={()=>setNumbers(!Numbers)}/>
        </div>
        <div className='len'>
          <label>Symbols</label>
          <input type='checkbox' checked = {Symbols} onChange={()=>setSymbols(!Symbols)}/>
        </div>
        <div className='btn'>
          <button onClick={createpass}>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
