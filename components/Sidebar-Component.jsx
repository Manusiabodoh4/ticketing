import {useEffect, useState} from 'react'
import loadable from '@loadable/component'
import {FaChevronLeft} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import {AiOutlineUser, AiOutlineHome, AiOutlineCodepen} from 'react-icons/ai'
import { useRouter } from 'next/router';
import { useWindowDimensions } from '../hooks'

const Head = loadable(()=>import("../components/Head-Component"))
const Link = loadable(()=>import('next/link'))
const Image = loadable(()=>import("next/image"))

export default function SidebarComponent({title, description, children}){
  
  const {push} = useRouter()

  const { width } = useWindowDimensions()
  const [isHide, setIsHide] = useState(false);    

  const handlerLink = (href) => {
    push(href)
  }   

  useEffect(()=>{
    if (width <= 1006) {
      setIsHide(true)
      return
    }
  },[width])

  return(
    <>
      <Head title={title} description={description}></Head>
      <div>

        <div className="flex flex-wrap z-50 w-full bg-white justify-between border-b border-gray-100 px-4 py-4">
          <Link href="/">
            <div className="flex cursor-pointer align-middle">            
              <p className="text-gray-800 text-2xl font-thin">Ticketing
                <span className="font-semibold text-green-500" >.com</span>
              </p>       
            </div>
          </Link>
          <div className="flex align-middle space-x-4">
          <Link href="/login">
            <button className="bg-red-400 hover:bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded">
              Logout
            </button>
          </Link>
          </div>
        </div>

        <div className="md:flex md:flex-wrap w-full hidden">
          
          <div className={`${(isHide)?"block":"hidden"} w-20 bg-white h-screen text-center text-gray-600 overflow-y-auto`}>
            <div className="flex flex-wrap w-full justify-center mt-4 bg-white hover:bg-gray-100 py-4 cursor-pointer" onClick={()=>setIsHide(false)}>
              <FiChevronRight size={30}></FiChevronRight>            
            </div>             
            <div onClick={()=>handlerLink("/")} className="flex flex-wrap w-full justify-center mt-4 bg-white hover:bg-gray-100 py-4 cursor-pointer">
              <AiOutlineHome size={30}></AiOutlineHome>            
            </div>
            <div onClick={()=>handlerLink("/profile")} className="flex flex-wrap w-full justify-center mt-4 bg-white hover:bg-gray-100 py-4 cursor-pointer">
              <AiOutlineUser size={30}></AiOutlineUser>
            </div>
            <div onClick={()=>handlerLink("/ticket")} className="flex flex-wrap w-full justify-center mt-4 bg-white hover:bg-gray-100 py-4 cursor-pointer">
              <AiOutlineCodepen size={30}></AiOutlineCodepen>            
            </div>            
         
          </div>

          <div className={`${(!isHide)?"block":"hidden"} w-60 bg-white h-screen border-r border-gray-100 overflow-y-auto`}>
            
            <div className="w-full mt-4 px-3 mb-4 py-4 flex flex-wrap align-middle border-t border-b border-gray-200 cursor-pointer" onClick={()=>setIsHide(true)}>
              <FaChevronLeft size={18} className=" text-green-400 mt-1 mr-2"></FaChevronLeft>              
              <p className="text-gray-700">Sembunyikan Menu</p>
            </div>
            
            <div className="w-full flex flex-wrap px-3">
            <Image src={"/vercel.svg"} width={10} height={10} alt="Logo for Kotakjualan.com" className='w-10 h-10 mr-2 rounded-full mt-1'/>              
              <div className="flex flex-1 flex-col">
                <p className="text-gray-800 font-semibold">{"Reza Andriansyah"}</p>
                <p className="text-gray-800 font-thin text-xs">{"Profile menu"}</p>              
                <button onClick={()=>handlerLink("/profile")} className="text-white bg-green-400 hover:bg-green-500 rounded px-1 py-1 mt-2 font-semibold w-20 text-xs">
                  More
                </button>                
              </div>
            </div>            

            <div className="w-full border border-gray-100 mt-4 mb-4"></div>          

            <div onClick={()=>handlerLink("/")} className="w-full flex flex-wrap bg-white hover:bg-gray-200 cursor-pointer py-4 align-middle px-5 text-gray-700 mt-4">
              <AiOutlineHome size={20}></AiOutlineHome>
              <p className="ml-3 font-semibold">Dashboard</p>
            </div>

            <div onClick={()=>handlerLink("/ticket")} className="w-full flex flex-wrap bg-white hover:bg-gray-200 cursor-pointer py-4 align-middle px-5 text-gray-700 mt-4">
              <AiOutlineCodepen size={20}></AiOutlineCodepen>
              <p className="ml-3 font-semibold">Ticket</p>
            </div>                        
          </div>
          
          <div className="flex-1 bg-gray-200 p-6">
            {children}
          </div>

        </div>

      </div>

      <div className="block md:hidden">
        <div className="flex-1 md:p-4 mb-20">
          {children}
        </div>
        <div className="fixed w-full border-t border-gray-600 bottom-0">
          <div className="grid grid-cols-3">            
            <div onClick={()=>handlerLink("/")} className="w-full bg-white hover:bg-gray-200 align-middle flex justify-center flex-wrap py-3">
              <AiOutlineHome size={30}></AiOutlineHome>                       
            </div>
            <div onClick={()=>handlerLink("/profile")} className="w-full bg-white hover:bg-gray-200 align-middle flex justify-center flex-wrap py-3">
              <AiOutlineUser size={30}></AiOutlineUser>                       
            </div>
            <div onClick={()=>handlerLink("/ticket")} className="w-full bg-white hover:bg-gray-200 align-middle flex justify-center flex-wrap py-3">
              <AiOutlineCodepen size={30}></AiOutlineCodepen>                       
            </div>                        
          </div>
        </div>
      </div>

    </>
  )
}