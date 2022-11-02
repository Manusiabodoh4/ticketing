import SidebarComponent from "../components/Sidebar-Component";
import Table from "../components/Table-Component";

export default function Ticket(){
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
      <div className="w-full mt-6 bg-white rounded py-4 px-6">
        <Table></Table>
      </div>
    </SidebarComponent>
  )
}