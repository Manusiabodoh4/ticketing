import loadable from '@loadable/component'

const Table = loadable(()=>import("./Table-Component"))
const TableMobile = loadable(()=>import("./TableMobile-Component"))
const ResponsiveXl = loadable(()=>import("../Responsive/ResponsiveXl"))

export default function WrapperTable({columns, data, tipe, onClick}){
  return(
    <ResponsiveXl>
      <Table columns={columns} data={data} onClick={onClick}/>
      <TableMobile columns={columns} data={data} tipe={tipe} onClick={onClick}/>
    </ResponsiveXl>
  )
}