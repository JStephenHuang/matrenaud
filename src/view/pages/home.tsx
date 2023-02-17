import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <header className="h-[10%]"></header>
      <div className="w-full flex">
        <div className="w-1/3 flex flex-col">
          <Link
            to="/photo/1"
            className="bg-white w-full h-[15rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[30rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[20rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[40rem] border border-black hover:opacity-70 transition-all"
          ></Link>
        </div>
        <div className="w-1/6 flex flex-col">
          <Link
            to="/photo/1"
            className="bg-white w-full h-[15rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[20rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[10rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[40rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[30rem] border border-black hover:opacity-70 transition-all"
          ></Link>
        </div>
        <div className="w-1/3 flex flex-col">
          <Link
            to="/photo/1"
            className="bg-white w-full h-[15rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[30rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[20rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[40rem] border border-black hover:opacity-70 transition-all"
          ></Link>
        </div>
        <div className="w-1/6 flex flex-col">
          <Link
            to="/photo/1"
            className="bg-white w-full h-[15rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[20rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[10rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[40rem] border border-black hover:opacity-70 transition-all"
          ></Link>
          <Link
            to="/photo/1"
            className="bg-white w-full h-[30rem] border border-black hover:opacity-70 transition-all"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
