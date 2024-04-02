import React, { useEffect, useState } from 'react'

const RandomColor = () => {
  const [typeOfColor,setTypeOfColor] = useState('hex')
  const [color,setColor] = useState('#000000')

  function generateRandomColorUtility (len){
      return Math.floor(Math.random()*len)
  }

  const HandleCreateHexColor = ()=>{
    
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let HexColor = '#'
    for (let index = 0; index < 6; index++) {
        HexColor+=hex[generateRandomColorUtility(hex.length)]
    }
    // console.log( 'k', generateRandom(hex.length))
    // console.log('h',HexColor)
    setColor(HexColor)
  }
  const HandleCreateRGBColor=()=>{
      let r = generateRandomColorUtility(256)
      let g = generateRandomColorUtility(256)
      let b = generateRandomColorUtility(256)
      
      setColor(`rgb(${r},${g},${b})`)
      
  }

  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      background:color,
      display:'flex',
      justifyContent:'center',
      alignItems:'flex-start'
    }}>
      <button onClick={()=>setTypeOfColor('hex')}>Create hex color </button>
      <button onClick={()=>setTypeOfColor('rgb')}>create RGB color</button> 
      <button onClick={typeOfColor==='hex'?HandleCreateHexColor:HandleCreateRGBColor}>Generate random color</button>
      
        <h1>{color}</h1>
      
    </div>
  )
}

export default RandomColor