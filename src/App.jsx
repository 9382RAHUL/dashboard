/* eslint-disable react/prop-types */
import { FaNoteSticky, FaRegNoteSticky } from "react-icons/fa6";
import { HiBell, HiCurrencyRupee } from "react-icons/hi";
import { MdCandlestickChart, MdDashboard, MdDocumentScanner, MdInsertChart } from "react-icons/md";

import { NavLink } from "react-router-dom";

export default function App(props) {
  return (
    <main className="w-full bg-[#F8F8FB] min-h-screen h-screen overflow-hidden">
      <div className="flex flex-row py-4 pl-4 h-full gap-12">
        <div className="w-[80px] text-white bg-gradient-to-b from-[#0F3556] to-[#17558b] h-full rounded-xl p-4 ">
          <div className="text-[40px] flex flex-col justify-around items-center h-full">
            <NavLink className="cursor-pointer" to={'/'}>
              <MdDashboard className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer bg-pink-300" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/scanners'}>
              <MdCandlestickChart className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer  bg-pink-300" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <MdInsertChart className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer  bg-pink-300" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <MdDocumentScanner className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer  bg-pink-300" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <HiBell className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer  bg-pink-300" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <FaRegNoteSticky className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer  bg-pink-300" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <FaNoteSticky className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer  bg-pink-300" />
            </NavLink>
            <NavLink className="cursor-pointer" to={'/'}>
              <HiCurrencyRupee className="hover:bg-[#ffffff40] p-2 duration-300 transform rounded-lg cursor-pointer   bg-pink-300" />
            </NavLink>
          </div>
        </div>


        <div className="p-4 w-full overflow-auto ">
          <div className="flex flex-row w-full h-20 justify-between mb-8 shadow-sm shadow-pink-400 rounded-md">
            <NavLink className="" to={"/"}>
              <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" className="w-[125px] h-auto ml-4 mt-4" />
            </NavLink>

            
            <img src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy-playing-tennis_23-2150797688.jpg?t=st=1716842801~exp=1716846401~hmac=fe48d3fe93282b3019a400beede2f3170bf23cf47bc22ed788d6c2da7f2cd266&w=996" className="w-[35px] h-[35px] mt-4 mr-4 rounded-full" />
        

          </div>

          {props.Component}
        </div>
      </div>
    </main>
  )
}