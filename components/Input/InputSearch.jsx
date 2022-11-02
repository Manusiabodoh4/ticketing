import { FiSearch } from 'react-icons/fi'

export default function InputSearch(){
  return(
    <div className="pt-2 relative text-gray-600">
      <input className="border border-gray-300 bg-white h-10 px-3 pr-4 lg:pr-7  rounded-lg text-sm focus:outline-none"
        type="search" name="search" placeholder="Search"/>
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <FiSearch className="text-gray-600 h-4 w-4"></FiSearch>        
      </button>
    </div>
  )
}