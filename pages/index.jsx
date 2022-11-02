import SidebarComponent from "../components/Sidebar-Component";

export default function Home() {
  return (
    <SidebarComponent title={"Dashboard Ticketing"} description={"Dashboard page for summary data in this website"}>
      <div className="w-full bg-white rounded py-4 px-6">
        <p className=" font-bold text-gray-800 text-lg">
          DASHBOARD PAGE
        </p>
        <p className="text-gray-600 font-light text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mx-6 md:mx-0">
        <div className="bg-white border border-gray-200 rounded p-4 text-center">
          <p className="text-teal-500 text-4xl font-medium ">
            76
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Banyak Anggota
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded p-4 text-center">
          <p className="text-cyan-500 text-4xl font-light ">
            5
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Banyak Tiket Aktif
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded p-4 text-center">
          <p className="text-sky-500 text-4xl font-light ">
            4
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Banyak Department
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded p-4 text-center">
          <p className="text-blue-500 text-4xl font-light ">
            25
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Banyak Tiket
          </p>
        </div>
      </div>
      <div className="mt-4 bg-white border border-gray-200 rounded p-4 mx-6 md:mx-0 text-center">
        <p className="text-gray-500">GRAPH</p>
      </div>
    </SidebarComponent>
  )
}
