import React, { useState } from 'react'
import data from './data'
import './style.css'

const Index = () => {
 // const [selected,setSelected] = useState(null)
  const [multiple,setMultiple] = useState([])
  const handleSingleChange = (id)=>{
      //setSelected(id===selected?null:id)

      const cpyMultiple = [...multiple]
      const indexOfCurrentId = cpyMultiple.indexOf(id)
      console.log(indexOfCurrentId)
      if(indexOfCurrentId===-1){
        cpyMultiple.push(id)
      }
      else{
        cpyMultiple.splice(indexOfCurrentId,1)
      }
      setMultiple(cpyMultiple)
      
  }
  console.log(selected,multiple)
  return (
    <div className='wrapper'>
      <div className='accordian'>
          {
            data && data.length>0?(
            data.map((dataItem)=>(
            <div className='item'>
              <div onClick={()=>handleSingleChange(dataItem.id)} className='title'>
                <h3>{dataItem.name}</h3>
                <span>+</span>
              </div>
              {

                    /* selected===dataItem.id ||*/ multiple.indexOf(dataItem.id) >=0 ?<div className='content'>{dataItem.age}</div>:null
                  }
            </div>)
            ))
            :(<div>No data Found</div>)
          }
      </div>
    </div>
  )
}

export default Index
