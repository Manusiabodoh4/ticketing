import loadable from "@loadable/component";
import useSwr from "swr";

const SidebarComponent = loadable(()=>import("../../components/Sidebar-Component"))
const WrapperTable = loadable(()=>import("../../components/TableResponsive/WrapperTableModel"))
const InputSearch = loadable(()=>import("../../components/Input/InputSearch"))

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
    value: ({status}) => ItemLabelWithColor(status, ColorTemplate[status]["bgColor"], "text-white")
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
      <div className="mt-0 md:mt-6 flex justify-end lg:justify-between bg-white px-6 pb-3 pt-1 rounded object-center">
        <div className="hidden lg:block">
          <p className="pt-4 font-light text-gray-900">
            Filter Actions
          </p>
        </div>
        <div className="flex">
          <InputSearch></InputSearch>
          <button className="w-full px-4 h-10 mt-2 py-2 ml-3 text-xs bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">
            Tambah
          </button>
        </div>
      </div>
      <div className="w-full mt-0 md:mt-4 bg-white rounded py-4 px-6">        
        <WrapperTable onClick={atClickRowTable} columns={columns} data={data} tipe={"1"}></WrapperTable>
      </div>
    </SidebarComponent>
  )
}