import img from "../Assets/question.png";
export const Questions = () => {
  return (
    <>
      <div className="py-[60px] pl-[60px] flex bg-[#f3f3f3] my-[106px] rounded-[46px] justify-between  relative ">
        <div className="w-[500px]">
          <h3 className="mb-[26px] font-[500] text-[30px] text-black">
            Savollaringiz bormi?
          </h3>
          <p className="mb-[26px] font-[400] text-[18px] text-black">
            Biz bilan bog‘lanib, farzandingiz rivojlanishi haqida <br /> savollarni
            yoki takliflarni bera olasiz. Biz sizga yordam <br /> berishga tayyormiz!
          </p>
          <div>
            <button className="text-[20px] leading-[140%] font-[400] py-[20px] px-[35px] bg-[#191a23] text-white rounded-[14px] ">
              Biz bilan bog’lanish
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0">
          <img src={img} alt="#" />
        </div>
      </div>
    </>
  );
};
