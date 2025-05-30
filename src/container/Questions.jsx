import img from "../Assets/question.png";
export const Questions = () => {
  return (
    <>
      <div className="max-md:py-[20px] max-md:p-[10px] md:py-[60px] md:pl-[60px] flex md:flex-row flex-col bg-[#f3f3f3] md:my-[106px] my-[70px] rounded-[26px] md:rounded-[46px] justify-between relative max-md:mx-[10px]">
        <div className="md:w-[500px] w-full max-md:flex flex-col md:flex-row max-md:justify-center max-md:items-center">
          <h3 className="mb-[15px] md:mb-[26px] font-[500] text-[30px] text-black max-md:text-center">
            Savollaringiz bormi?
          </h3>
          <p className="mb-[26px] font-[400] text-[15px] md:text-[18px] text-black max-md:text-center">
            Biz bilan bog‘lanib, farzandingiz rivojlanishi haqida <br />{" "}
            savollarni yoki takliflarni bera olasiz. Biz sizga yordam <br />{" "}
            berishga tayyormiz!
          </p>
          <div>
            <button className="text-[20px] leading-[140%] font-[400] py-[20px] px-[35px] bg-[#191a23] text-white rounded-[14px] ">
              Biz bilan bog’lanish
            </button>
          </div>
        </div>
        <div className="max-md:hidden absolute right-0 top-0">
          <img src={img} alt="#" />
        </div>
      </div>
    </>
  );
};
