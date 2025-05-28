import { useState } from "react";
import { LogoIcon } from "../Assets/Logo-Icon";
import Modal from "./Modal";

export const Navbar = ({ active, setActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-[60px]">
        <div className="flex items-center gap-[17px] cursor-pointer">
          <LogoIcon />
          <h3 className="font-bold text-[40px] leading-[100%] text-[#020202]">
            MyFit
          </h3>
        </div>
        <div className="flex items-center gap-[40px]">
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
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
