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
      <div id="Imkoniyatlar" className="mt-[140px] ">
        <div className="flex gap-[40px] mb-[62px] ">
          <h3 className="text-black font-medium text-[28px] px-[7px] rounded-[5px]  bg-[#b9ff66] text-center my-auto">
            Imkoniyatlar
          </h3>
          <p className="w-[508px] font-[400] text-[18px]">
            MyFit bilan sog‘lom ovqatlaning, vazningizni nazorat qiling va
            dietolog darslari orqali o‘zingizni rivojlantiring. Maqsadingizga
            sog‘lom va to‘g‘ri yo‘l bilan yeting!
          </p>
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <div className="flex  w-[600px] p-[50px]  rounded-[45px] shadow-[0_5px_0_0_#191a23]  bg-[#f3f3f3] border-[#191a23] border justify-between">
            <div>
              <div>
                <p className="text-black font-medium text-[30px] bg-[#b9ff66] px-[7px] rounded-[7px] text-wrap shrink-0 whitespace-nowrap">
                  Kundalik ovqatlar
                </p>
                <p className="text-black font-medium text-[30px] bg-[#b9ff66] inline-block px-[7px] rounded-[7px]">
                  sarfi hisoboti
                </p>
              </div>
              <div className="flex items-center gap-[15px] mt-[93px]">
                <LearnMoreIcon />
                <p className="font-[400] text-[20px] leading-[140%] text-black">
                  Learn more
                </p>
              </div>
            </div>
            <div>
              <img src={img1} alt="#" />
            </div>
          </div>
          <div className="flex  w-[600px] p-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#b9ff66] border-[#191a23] border justify-between">
            <div>
              <div>
                <p className="text-black font-medium text-[30px] bg-white px-[7px] rounded-[7px]">
                  Kundalik suv
                </p>
                <p className="text-black font-medium text-[30px] bg-white inline-block px-[7px] rounded-[7px]">
                  taqsimoti
                </p>
              </div>
              <div className="flex items-center gap-[15px] mt-[93px]">
                <LearnMoreIcon />
                <p className="font-[400] text-[20px] leading-[140%] text-black">
                  Learn more
                </p>
              </div>
            </div>
            <div>
              <img src={img2} alt="#" />
            </div>
          </div>

          <div className="flex  w-[600px] py-[50px] pl-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#191a23] border-[#191a23] border justify-between">
            <div>
              <div>
                <p className="text-black font-medium text-[30px] bg-white px-[7px] rounded-[7px] whitespace-nowrap">
                  Sog'liq statistikasi vazn
                </p>
                <p className="text-black font-medium text-[30px] bg-white inline-block px-[7px] rounded-[7px]">
                  bel o'lchami, <br /> tana yog' foizi
                </p>
              </div>
              <div className="flex items-center gap-[15px] mt-[93px]">
                <LearnMoreIcon />
                <p className="font-[400] text-[20px] leading-[140%] text-white">
                  Learn more
                </p>
              </div>
            </div>
            <div>
              <img src={img3} alt="#" />
            </div>
          </div>

          <div className="flex  w-[600px] p-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#f3f3f3] border-[#191a23] border justify-between">
            <div>
              <div>
                <p className="text-black font-medium text-[30px] bg-[#b9ff66] px-[7px] rounded-[7px] whitespace-nowrap">
                  Kundalik va oylik
                </p>
                <p className="text-black font-medium text-[30px] bg-[#b9ff66] inline-block px-[7px] rounded-[7px]">
                  qadam o'lchovi
                </p>
              </div>
              <div className="flex items-center gap-[15px] mt-[93px]">
                <LearnMoreIcon />
                <p className="font-[400] text-[20px] leading-[140%] text-black">
                  Learn more
                </p>
              </div>
            </div>
            <div>
              <img src={img4} alt="#" />
            </div>
          </div>
          <div className="flex relative  w-[600px] p-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#b9ff66] border-[#191a23] border justify-between">
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
          <div className="flex  w-[600px] p-[50px] rounded-[45px] shadow-[0_5px_0_0_#191a23] bg-[#191a23] border-[#191a23] border justify-between relative">
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
        </div>
      </div>
    </>
  );
};
