import React from 'react'

function TableHeader({ item }) {
  return <th className={`py-3 px-6 text-${item.position}`}>{item.heading}</th>
}

function TableRow({ columns, dataItem, onClick }) {  
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer" onClick={()=>onClick(dataItem)}>
      {columns.map((item, key) => {
        const { value } = item
        const newValue = typeof value === 'function' ? value(dataItem) : dataItem[value];
        return (
          <td className={`py-3 px-6 text-${item.position}`} key={key}>
            {newValue || '-'}
          </td>
        )
      })}
    </tr>
  )
}

export default function Table({ columns, data, onClick }) {  

  if (typeof columns === "undefined") {
    columns = []
  }

  if (typeof data === "undefined") {
    data = []
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-center font-sans overflow-hidden">
        <div className="w-full">
          <div className="bg-white shadow-md rounded">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  {columns.map((value, key) => <TableHeader key={key} item={value}></TableHeader>)}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data.map((value, key) => <TableRow onClick={onClick} key={key} columns={columns} dataItem={value}></TableRow>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}