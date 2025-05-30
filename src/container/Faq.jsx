import { useState, useRef } from "react";
import { Minus, Plus } from "../../public/icon";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    {
      number: 1,
      title: "Qanday bepul konsultatsiya olsa bo’ladi",
      description:
        "Bizning jamoamiz bilan bepul konsultatsiya olish uchun bizning veb-saytimizda ro‘yxatdan o‘tib, murojaat qiling. Sizga kerakli yordamni taqdim etamiz.",
    },
    {
      number: 2,
      title: "MyFit qanday ishlaydi?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem commodi blanditiis atque hic ab doloremque eos quia ea.",
    },
    {
      number: 3,
      title: "Vaznni qanday kuzatishim mumkin?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem commodi blanditiis atque hic ab doloremque eos quia ea.",
    },
    {
      number: 4,
      title: "Dietolog video darslari qanday foyda keltiradi?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem commodi blanditiis atque hic ab doloremque eos quia ea.",
    },
    {
      number: 5,
      title: "Suv ichish miqdorini qanday kuzataman?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem commodi blanditiis atque hic ab doloremque eos quia ea.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="md:mb-[89px] mb-[70px] max-md:mx-[10px]">
      <div className="flex md:flex-row flex-col gap-[20px] md:gap-[40px] mb-[60px]">
        <div className="bg-[#B9FF66] rounded-[8px] px-[7px] mr-[5%]">
          <h2 className="font-medium text-[28px] md:text-[40px]">
            Ko’p beriladigan savollar
          </h2>
        </div>
        <div className="max-w-[292px]">
          <p className="font-normal text-[18px]">
            Tizim haqida eng ko‘p beriladigan savollarga javoblar.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              <div
                className={`Card ${
                  isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
                } md:rounded-[45px] rounded-[25px] md:px-[57px] px-[10px] py-[16px] md:py-[41px] border-black border-2 transition-colors duration-300`}
              >
                <div
                  className={`${
                    isOpen ? "border-b-2 pb-[30px]" : ""
                  } flex justify-between items-center gap-[10px]`}
                >
                  <div className="flex items-center md:gap-[25px] gap-[10px]">
                    <h1 className="font-medium md:text-[60px] text-[40px] max-md:border-r-2 max-md:pr-[10px]">
                      0{faq.number}
                    </h1>
                    <h2 className="font-medium md:text-[30px] text-[20px]">
                      {faq.title}
                    </h2>
                  </div>
                  <button className="" onClick={() => handleToggle(index)}>
                    {isOpen ? <Minus /> : <Plus />}
                  </button>
                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    height: isOpen
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                    overflow: "hidden",
                    transition: "height 0.5s ease",
                  }}
                >
                  <div className="mt-[30px]">
                    <p className="font-normal text-[18px]">{faq.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
