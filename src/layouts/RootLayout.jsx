import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col min-h-screen bg-[#141414]">
        <Navbar />
        <main className="w-full min-h-screen bg-[#141414] flex items-center justify-center flex-col">
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout;