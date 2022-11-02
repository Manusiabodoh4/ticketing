import loadable from "@loadable/component";
import useSwr from "swr";

const SidebarComponent = loadable(()=>import("../../components/Sidebar-Component"))
const WrapperTable = loadable(()=>import("../../components/TableResponsive/WrapperTableModel"))

import ItemWithNameAndImage from "../../components/TableResponsive/Item/ItemWithNameAndImage"
import ItemLabelWithColor from "../../components/TableResponsive/Item/ItemLabelWithColor";
import { ColorTemplate } from "../../data/color";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json())

const columns = [
  {
    heading:"Pengirim",
    position:"left",
    value: ({sender}) => ItemWithNameAndImage(sender?.name, sender?.photo, "test")
  },
  {
    heading:"Department",
    position:"left",
    value:"name_department"
  },
  {
    heading:"Tanggal",
    position:"left",
    value:"created"
  },
  {
    heading :"Judul",
    position:"left",
    value:"title"
  },
  {
    heading:"Prioritas",
    position:"center",
    value: ({prioritas}) => ItemLabelWithColor(prioritas, "bg-gray-200", ColorTemplate[prioritas]["textColor"])
  },
  {
    heading:"Status",
    position:"center",
    value: ({status}) => ItemLabelWithColor(status, ColorTemplate[status].bgColor, "text-white")
  }
]

export default function Ticket(){

  const router = useRouter()

  const atClickRowTable = ({id}) => {
    
    if (typeof id === "undefined") {      
      return
    }

    router.push({
      pathname: '/ticket/[id]',
      query: { id: id },
    })    

  }

  const { data, error } = useSwr('/api/static/ticket', fetcher)

  if (error) return <div>Failed to load ticket</div>
  if (!data) return <div>Loading...</div>  

  return (
    <SidebarComponent title={"Page ticketing for all task"}>
      <div className="w-full bg-white rounded py-4 px-6">
        <p className=" font-bold text-gray-800 text-lg">
          TICKET PAGE
        </p>
        <p className="text-gray-600 font-light text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>
      <div className="w-full mt-0 md:mt-6 bg-white rounded py-4 px-6">        
        <WrapperTable onClick={atClickRowTable} columns={columns} data={data} tipe={"1"}></WrapperTable>
      </div>
    </SidebarComponent>
  )
}