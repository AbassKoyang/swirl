import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="w-full">
        <Navbar />
        <main className="w-full min-h-screen bg-[#262626]">
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout;