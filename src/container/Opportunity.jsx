import { LearnMoreIcon } from "../Assets/learn-more-icon";
import img1 from "../Assets/opportunity1.png";
import img2 from "../Assets/opportunity2.png";
import img3 from "../Assets/opportunity3.png";
import img4 from "../Assets/opporttunity4.png";
import img5 from "../Assets/opportunity5.png";
import img6 from "../Assets/opportunity6.png";
export const Opportunity = () => {
  return (
    <>
      <div
        id="Imkoniyatlar"
        className="mt-[70px] md:mt-[140px] max-md:mx-[10px]"
      >
        <div className="flex items-start md:flex-row flex-col gap-[20px] md:gap-[40px] mb-[50px] md:mb-[62px] ">
          <h3 className="text-black font-medium text-[28px] md:text-[40px] px-[7px] rounded-[5px]  bg-[#b9ff66] text-center max-md:mr-[40%]">
            Imkoniyatlar
          </h3>
          <p className="md:w-[508px] font-[400] md:text-[18px] text-[16px] max-md:text-center">
            MyFit bilan sog‘lom ovqatlaning, vazningizni nazorat qiling va
            dietolog darslari orqali o‘zingizni rivojlantiring. Maqsadingizga
            sog‘lom va to‘g‘ri yo‘l bilan yeting!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-[40px] grid-cols-1">
          {/* first one */}
          <div className="flex flex-col p-[30px] md:p-[50px]  rounded-[45px] shadow-[0_5px_0_0_#191a23]  bg-[#f3f3f3] border-[#191a23] border justify-between">
            <div className="flex md:flex-row flex-col max-md:gap-5 md:justify-between justify-center max-md:items-center">
              <div>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-[#b9ff66] px-[7px] rounded-[7px] text-wrap shrink-0 whitespace-nowrap">
                  Kundalik ovqatlar
                </p>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-[#b9ff66] inline-block px-[7px] rounded-[7px]">
                  sarfi hisoboti
                </p>
              </div>
              <div>
                <img src={img1} alt="#" />
              </div>
            </div>
            <div className="flex items-center gap-[15px] max-md:mt-[20px]">
              <LearnMoreIcon />
              <p className="font-[400] text-[20px] leading-[140%] text-black">
                Learn more
              </p>
            </div>
          </div>
          {/* ///// */}
          <div className="flex flex-col p-[30px] md:p-[50px]  rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#b9ff66] border-[#191a23] border justify-between">
            <div className="flex md:flex-row flex-col max-md:gap-5 md:justify-between justify-center max-md:items-center">
              <div>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-white px-[7px] rounded-[7px]">
                  Kundalik suv
                </p>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-white inline-block px-[7px] rounded-[7px]">
                  taqsimoti
                </p>
              </div>
              <div>
                <img src={img2} alt="#" />
              </div>
            </div>
            <div className="flex items-center gap-[15px] max-md:mt-[20px]">
              <LearnMoreIcon />
              <p className="font-[400] text-[20px] leading-[140%] text-black">
                Learn more
              </p>
            </div>
          </div>

          <div className="flex flex-col p-[30px] md:p-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#191a23] border-[#191a23] border justify-between">
            <div className="flex md:flex-row flex-col max-md:gap-5 md:justify-between justify-center max-md:items-center ">
              <div>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-white px-[7px] rounded-[7px] md:whitespace-nowrap">
                  Sog'liq statistikasi vazn
                </p>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-white inline-block px-[7px] rounded-[7px]">
                  bel o'lchami, <br /> tana yog' foizi
                </p>
              </div>
              <div>
                <img src={img3} alt="#" />
              </div>
            </div>

            <div className="flex items-center gap-[15px] max-md:mt-[20px]">
              <LearnMoreIcon />
              <p className="font-[400] text-[20px] leading-[140%] text-white">
                Learn more
              </p>
            </div>
          </div>
          <div className="flex flex-col p-[30px] md:p-[50px]  rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#f3f3f3] border-[#191a23] border justify-between">
            <div className="flex md:flex-row flex-col max-md:gap-5  md:justify-between justify-center max-md:items-center">
              <div>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-[#b9ff66] px-[7px] rounded-[7px] whitespace-nowrap">
                  Kundalik va oylik
                </p>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-[#b9ff66] inline-block px-[7px] rounded-[7px]">
                  qadam o'lchovi
                </p>
              </div>
              <div>
                <img src={img4} alt="#" />
              </div>
            </div>

            <div className="flex items-center gap-[15px] max-md:mt-[20px]">
              <LearnMoreIcon />
              <p className="font-[400] text-[20px] leading-[140%] text-black">
                Learn more
              </p>
            </div>
          </div>
          <div className="max-md:hidden flex relative   p-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#b9ff66] border-[#191a23] border justify-between">
            <div>
              <div className="absolute">
                <p className="text-black font-medium text-[30px] bg-white px-[7px] rounded-[7px] whitespace-nowrap">
                  Samarali ozish va vazn olish
                </p>
                <p className="text-black font-medium text-[30px] bg-white inline-block px-[7px] rounded-[7px]">
                  uchun video <br />
                  darsliklar
                </p>
              </div>
              <div className="flex items-center gap-[15px] mt-[93px] mb-[50px] absolute bottom-0">
                <LearnMoreIcon />
                <p className="font-[400] text-[20px] leading-[140%] text-black z-10  ">
                  Learn more
                </p>
              </div>
            </div>
            <div className="mt-[76px]">
              <img src={img5} alt="#" />
            </div>
          </div>
          <div className="max-md:hidden flex  p-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#191a23] border-[#191a23] border justify-between relative">
            <div>
              <div className="absolute">
                <p className="text-black font-medium text-[30px] bg-[#b9ff66] px-[7px] rounded-[7px] whitespace-nowrap">
                  Eslatmalar: Ovqatlanish
                </p>
                <p className="text-black font-medium text-[30px] bg-[#b9ff66] inline-block px-[7px] rounded-[7px]">
                  Uyqu, suv ichish, <br /> mashqlar
                </p>
              </div>
              <div className="flex items-center gap-[15px] mt-[93px] mb-[50px] absolute bottom-0">
                <LearnMoreIcon />
                <p className="font-[400] text-[20px] leading-[140%] text-white">
                  Learn more
                </p>
              </div>
            </div>
            <div className="mt-[89px]">
              <img src={img6} alt="#" />
            </div>
          </div>
          <div className="md:hidden flex flex-col   p-[30px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#b9ff66] border-[#191a23] border justify-between">
            <div className="flex flex-col  justify-center items-center">
              <div>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-white px-[7px] rounded-[7px] whitespace-nowrap">
                  Samarali ozish va vazn olish
                </p>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-white inline-block px-[7px] rounded-[7px]">
                  uchun video <br />
                  darsliklar
                </p>
              </div>
              <div className="">
                <img src={img5} alt="#" />
              </div>
            </div>
            <div className="flex items-center gap-[15px] max-md:mt-[20px]">
              <LearnMoreIcon />
              <p className="font-[400] text-[20px] leading-[140%] text-black">
                Learn more
              </p>
            </div>
          </div>
          <div className="md:hidden flex flex-col p-[30px] md:p-[50px]  rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#191a23] border-[#191a23] border justify-between relative">
            <div className="flex md:flex-row flex-col max-md:gap-5  md:justify-between justify-center max-md:items-center">
              <div>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-[#b9ff66] px-[7px] rounded-[7px] whitespace-nowrap">
                  Eslatmalar: Ovqatlanish
                </p>
                <p className="text-black font-medium text-[25px] md:text-[30px] bg-[#b9ff66] inline-block px-[7px] rounded-[7px]">
                  Uyqu, suv ichish, <br /> mashqlar
                </p>
              </div>
              <div>
                <img src={img6} alt="#" />
              </div>
            </div>
            <div className="flex items-center gap-[15px] max-md:mt-[20px]">
              <LearnMoreIcon />
              <p className="font-[400] text-[20px] leading-[140%] text-white">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
