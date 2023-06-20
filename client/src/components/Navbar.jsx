import { Link } from "react-router-dom";
import 'animate.css'

export default function Navbar() {



  return (
    <>
    <div className="flex justify-between py-2 items-center">
    <h1 className="text-3xl font-['Amatic_SC'] pl-4 font-bold">Task Management with SQL</h1>
    </div>
    <div className="flex justify-end items-center flex-col w-full">
      <ul className="flex justify-center items-center p-5 uppercase font-bold text-lg font-['Handlee']">
        <li className="p-2 flex">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:animate-pulse rounded-md bg-green-600 px-2 py-1 text-white text-3x">
          <Link to="/new">➕ New Task</Link>
        </li>
      </ul>
    </div>
   
  </>
  );
}
