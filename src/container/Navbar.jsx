import { useState } from "react";
import { LogoIcon } from "../Assets/Logo-Icon";
import Modal from "./Modal";
import { XIcon } from "../../public/icon";

export const Navbar = ({ active, setActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleSmoothNav = (item) => {
    setMobileMenuOpen(false);
    setActive(item);
  };

  return (
    <>
      <div className="flex items-center justify-between py-[30px] md:py-[60px] mx-[15px] md:mx-0">
        <div className="flex items-center gap-[10px] md:gap-[17px] cursor-pointer">
          <LogoIcon />

          <h3 className="font-bold text-[35px] md:text-[40px] text-[#020202]">
            MyFit
          </h3>
        </div>

        <div className="md:hidden ">
          <button
            className="lg:hidden bg-[#B9FF66] p-3 rounded-full"
            onClick={() => setMobileMenuOpen(true)}
          >
            <img src="/img/menu.svg" alt="menu" className="h-8 w-9" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-[40px]">
          <ul className="flex items-center gap-[40px] ">
            {[
              "Malumot",
              "Imkoniyatlar",
              "Kuzatuv tizimi",
              "Mijozlar fikri",
            ].map((item) => (
              <li key={item} className="p-[7px]">
                <a
                  onClick={() => setActive(item)}
                  className={`cursor-pointer p-2 rounded-full ${
                    active === item
                      ? "router-link-active router-link-exact-active whitespace-nowrap cursor-pointer no-underline  transition-all duration-300 border-[0.5px] border-solid border-[#020202]  bg-opacity-5 rounded-full !text-[#020202] p-[10px] h-[58px]"
                      : "text-black"
                  }`}
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-normal cursor-pointer text-[20px] leading-[140%] text-center text-black py-[20px] px-[35px] border rounded-[14px]"
            >
              Kirish
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        <div
          className={`p-[10px] rounded-tl-3xl fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 duration-1000 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-row">
            <button onClick={() => setMobileMenuOpen(false)}>
              <XIcon />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-[20px] mt-[30px]">
            {[
              "Malumot",
              "Imkoniyatlar",
              "Kuzatuv tizimi",
              "Mijozlar fikri",
            ].map((item) => (
              <li key={item} className="p-[7px]">
                <a
                  onClick={() => handleSmoothNav(item)}
                  className={`cursor-pointer p-2 rounded-full ${
                    active === item
                      ? "router-link-active router-link-exact-active whitespace-nowrap shadow-sm shadow-cyan-500 cursor-pointer no-underline font-bold  transition-all duration-300 border-[0.5px] border-solid border-[#020202]  bg-opacity-5 rounded-full !text-[#020202] p-[10px] h-[58px]"
                      : "text-black font-medium"
                  }`}
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
            ))}
            <div>
              <button
                onClick={() => handleModalOpen()}
                className="font-medium cursor-pointer text-[20px]  text-center text-black bg-[#B9FF66] py-[10px] px-[25px]  rounded-[14px] hover:scale-[110%] hover:bg-[#B9FF66]/80 hover:shadow-blue-500 hover:shadow-2xl"
              >
                Kirish
              </button>
            </div>
          </ul>
        </div>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
