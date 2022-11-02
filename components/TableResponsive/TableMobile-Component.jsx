import React from 'react'
import { ColorTemplate } from '../../data/color'

function cardModel1(data){        
  const bg = ColorTemplate[data?.status]["border"]    
  return(
    <div className={`border rounded p-3 cursor-pointer`}>
      <div className="flex flex-wrap justify-between">
        <div className="">
          <p>Sender</p>
          <p className=' font-medium text-sm text-gray-700'>{data.sender.name}</p>
        </div>
        <p className=' text-xs '>{data.status}</p>
      </div>
    </div>
  )
}


const template = {
  "1" : (data) => cardModel1(data)
}   

export default function TableMobile({data, tipe, onClick}){

  if (typeof tipe === "undefined") {
    tipe = "1"
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2">
        
        {data.map((value, key)=>{                    
          
          const selectedTemplate = template[tipe](value)

          return(            
            <div key={key} onClick={()=>onClick(value)}>
              {selectedTemplate}
            </div>            
          )
          
        })}    
        
      </div>
    </div>
  )
}