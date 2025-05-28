import heroImage from "../Assets/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="mb-[70px] flex justify-between">
        <div className="w-[531px]">
          <h1 className="font-[500] text-[60px] mb-[35px]">
            MyFit – Sog‘lom hayotga qadam qo‘yish!
          </h1>
          <p className="font-[400] text-[20px] leading-[140%] mb-[35px] ">
            MyFit orqali to‘g‘ri ovqatlanish va sog‘lom turmush tarzini
            boshlang.
          </p>
          <div>
            <button className="font-[400] text-[20px] leading-[140%] py-[20px] px-[35px] rounded-[14px] bg-[#191a23] text-white ">
              Bepul konsultatsiya
            </button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="#" />
        </div>
      </div>
    </>
  );
};
