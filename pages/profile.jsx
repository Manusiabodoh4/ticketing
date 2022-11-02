import loadable from "@loadable/component";
import { useRouter } from "next/router";
import useSwr from "swr";

const SidebarComponent = loadable(()=>import("../components/Sidebar-Component"))
const Image = loadable(()=>import("next/image"))

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Profile(){

  const router = useRouter()  

  const { data, error } = useSwr(`/api/static/profile`, fetcher)

  if (error) return <div>Failed to load ticket</div>
  if (!data) return <div>Loading...</div>  

  return(
    <SidebarComponent title={"Page detail ticketing for all task"}>
      <div className="w-full bg-white rounded py-4 px-6">
        <p className=" font-bold text-gray-800 text-lg">
          PROFILE
        </p>
        <p className="text-gray-600 font-light text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>
      <div className="w-full md:flex mt-0 md:mt-6 space-x-0 md:space-x-5 px-6 md:px-0">
        
        <div className="w-full md:w-1/4">

          <div className="bg-white p-4 rounded">
            
            <div className="w-full justify-center flex">
              <Image src={data.photo} width={150} height={150} className="rounded-full"></Image>          
            </div>
          
            <p className="text-center mt-3 text-xl font-light text-gray-900">
              {data.name}
            </p>
          
            <p className="text-gray-500 text-center text-[0.65rem]">
              {data.name_departnemt}
            </p>

          </div>        

        </div>

        <div className="w-full md:w-3/4">
          <div className="w-full bg-white rounded p-4 space-y-3">                                  

            <div className="">
              <p className="text-xs mb-1 text-gray-700 font-bold">
                Alamat
              </p>
              <input type="text" className="w-full border rounded border-gray-300 pl-3 py-2 text-gray-700 text-xs" 
              value={data.address} />
            </div>

            <div className="mt-6">
              <button onClick={()=>router.push("/")} className="text-xs text-center w-full border border-gray-400 rounded py-2">
                Back Dashboard
              </button>
            </div>

          </div>
        </div>
      </div>
    </SidebarComponent>
  )
}