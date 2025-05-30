import { useState } from "react";
import { FacebookIcon } from "../Assets/facebook-icon";
import { FooterLogoIcon } from "../Assets/Footer-Logo-Icon";
import { LinkedInIcon } from "../Assets/linked-in-icon";
import { TwitterIcon } from "../Assets/twitter-icon";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Footer = ({ setActive, active }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const isValidPhone = (value) => {
    const uzPhoneRegex = /^(\+998|998)?[0-9]{9}$/;
    return uzPhoneRegex.test(value);
  };

  const sendToTelegram = async () => {
    if (!isValidPhone(phone)) {
      setError("Iltimos, to‘g‘ri telefon raqam kiriting");
      return;
    }

    setError("");

    const BOT_TOKEN = "7896699651:AAEEYEttyklyAhTvVLN_DYysrrCuWVXN2iU";
    const CHAT_ID = "1308171294";
    const text = `📱 Yangi raqam: ${phone}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    });

    setPhone("");
    toast.success("Telefon raqamingiz yuborildi!");
  };

  return (
    <>
      <div className="bg-black px-[20px] md:px-[60px] pt-[35px] pb-[50px] rounded-t-[45px]">
        <div className="flex md:flex-row flex-col max-md:gap-[20px] items-center justify-between pb-[66px]">
          <div className="flex  items-center gap-[17px]">
            <FooterLogoIcon />
            <h3 className=" font-bold text-[40px] leading-[100%] text-white">
              MyFit
            </h3>
          </div>
          <div className="flex items-center gap-[150px] ">
            <ul className="max-md:hidden flex items-center gap-[40px] ">
              {[
                "Malumot",
                "Imkoniyatlar",
                "Kuzatuv tizimi",
                "Mijozlar fikri",
              ].map((item) => (
                <li key={item} className="p-[7px] ">
                  <a
                    onClick={() => setActive(item)}
                    className={`cursor-pointer p-2 rounded-full ${
                      active === item
                        ? "router-link-active router-link-exact-active whitespace-nowrap cursor-pointer no-underline  transition-all duration-300 border-[0.5px] border-solid border-[white]  bg-opacity-5 rounded-full !text-[white] p-[10px] h-[58px]"
                        : "text-white"
                    }`}
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-[20px]">
              <div>
                <LinkedInIcon />
              </div>
              <div>
                <FacebookIcon />
              </div>
              <div>
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="boglanish flex md:flex-row flex-col items-center gap-[50px] md:gap-[154px] pb-[50px] border-[#fff] border-b  max-md:text-center">
          <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <h3 className="rounded-[10px] bg-[#b9ff66] font-[500] text-[20px] p-[7px] leading-[100%] w-[192px] mb-[27px] ">
              Biz bilan bog’lanish
            </h3>
            <p>
              <a
                className="font-[400] text-[18px] text-white "
                href="mailto:myfit@gmail.com"
              >
                Email: myfit@gmail.com
              </a>
            </p>
            <p>
              <a
                className="font-[400] text-[18px] text-white "
                href="tel:+998-99-999-98-99"
              >
                Phone: +998-99-999-98-99
              </a>
            </p>
            <p>
              <a className="font-[400] text-[18px] text-white " href="#">
                Address: Toshkent shaxar Mirzo Ulug’bek tumani 7-uy
              </a>
            </p>
          </div>
          <div className="rounded-[10px] bg-[#292a32] md:py-[58px] md:px-[40px] py-[29px] px-[10px]  flex items-center md:gap-[20px] justify-between md:w-[517px] w-full">
            <div>
              <input
                className="font-[400] text-[18px] text-white placeholder:text-zinc-400  md:py-[22px] md:pl-[35px] py-[10px] pl-[15px] border rounded-[14px] "
                type="text"
                placeholder="+998XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {error && <p className="text-red-500 text-[14px]">{error}</p>}
            </div>
            <div>
              <button
                onClick={sendToTelegram}
                className="font-[400] text-[20px] md:text-[28px] leading-[140%] text-center md:py-[20px] md:px-[35px] py-[10px] px-[10px] rounded-[14px] bg-[#b9ff66] cursor-pointer"
              >
                Kutish
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[40px] mt-[50px]">
          <h4 className="text-white font-normal text-[18px] leading-[156%]">
            © 2025 MyFit Barcha huquqlar himoyalangan.
          </h4>
          <p>
            <a
              href="#"
              className="text-white font-normal text-[18px] leading-[156%] underline [text-decoration-skip-ink:none]"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
      />
    </>
  );
};
