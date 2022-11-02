import React from 'react'
import loadable from '@loadable/component'
import { ColorTemplate } from '../../data/color'

const Image = loadable(()=>import("next/image"))

function cardModel1(data){        
  const bg = ColorTemplate[data?.status]["bgColor"]    
  return(
    <div className={`border rounded p-3 cursor-pointer`}>
      <div className="flex flex-wrap justify-between border-b-2 border-gray-200 mb-3 pb-3">
        <div className="">
          <Image src={data.sender.photo} width={28} height={28} className="rounded-full"></Image>
          <p className='text-sm text-gray-900 mt-1'>{data.sender.name}</p>
        </div>
        <div className="">
          <p className={`text-[0.65rem] ${bg} px-2 py-1 rounded text-white`}>{data.status}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className='text-xs font-bold'>Department</p>
        <p className='text-xs font-light text-gray-900'>{data.name_department}</p>
      </div>
      <div className="mt-4">
        <p className='text-xs font-bold'>Judul</p>
        <p className='text-xs font-light text-gray-900'>{data.title}</p>
      </div>
      <div className="mt-4">
        <p className='text-xs font-bold'>Tanggal</p>
        <p className='text-xs font-light text-gray-900'>{data.created}</p>
      </div>
      <div className="mt-4">
        <p className='text-xs font-bold'>Prioritas</p>
        <p className='text-xs font-light text-gray-900'>{data.prioritas}</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
        
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