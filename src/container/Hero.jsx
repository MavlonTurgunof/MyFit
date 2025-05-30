import heroImage from "../Assets/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="mb-[70px] flex md:flex-row flex-col justify-between max-md:mx-[10px]">
        <div className="md:w-[531px] w-full max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center">
          <h1 className="font-medium text-[40px] md:text-[60px] mb-[35px] leading-[120%]">
            MyFit – Sog‘lom hayotga qadam qo‘yish!
          </h1>
          <p className="font-[400] text-[20px] md:leading-[140%] mb-[35px] ">
            MyFit orqali to‘g‘ri ovqatlanish va sog‘lom turmush tarzini
            boshlang.
          </p>
          <div>
            <button className="font-[400] text-[20px] leading-[140%] py-[15px] md:py-[20px] px-[25px] md:px-[35px] rounded-[14px] bg-[#191a23] text-white ">
              Bepul konsultatsiya
            </button>
          </div>
        </div>
        <div className="max-md:hidden">
          <img src={heroImage} alt="#" />
        </div>
      </div>
    </>
  );
};
