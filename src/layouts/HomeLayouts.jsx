import React from "react";
import Header from "../components/Header";
import BreakingNews from "../components/BreakingNews";
import Navbar from "../components/Navbar";
import LeftSideComp from "../components/layout-componrnts/LeftSideComp";
import MainComp from "../components/layout-componrnts/MainComp";
import RightComp from "../components/layout-componrnts/RightComp";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {

  return (
    <div className="container mx-auto">
      <div className="w-11/12 mx-auto font-poppins">
        {/* header */}
        <header>
          <Header />
          <section className="">
              <BreakingNews/>
          </section>
        </header>
        {/* navbar */}
        <nav className="py-3">
             <Navbar/>
        </nav>
        {/* main comp */}
        <main className="grid md:grid-cols-12 py-20 gap-6">
            {/* left side content */}
             <aside className="col-span-3">
                  leftAside
                  <LeftSideComp/>
             </aside>
             {/* middle content */}
             <section className="col-span-6">
                   main post
                   {/*  */}
                  <Outlet/>
             </section>
             {/* right side content */}
             <aside className="col-span-3">
                 right aside
                 <RightComp/>
             </aside>
        </main>
      </div>
    </div>
  );
};

export default HomeLayouts;
