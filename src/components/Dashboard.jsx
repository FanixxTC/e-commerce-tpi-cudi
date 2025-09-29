import { Lock } from "lucide-react"
import { Link } from "react-router-dom"

const Dashboard = ({isAdmin = true}) => {
  return isAdmin && (
        <Link Classname="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-600 flex items-center transition duration-300 ease-in-out font-medium">
            <Lock Classname="inline-block mr-1" size={18}/>
            <span className="hiden sm:inline ml-2">Dashboard</span>
        </Link>
    )
}

export default Dashboard