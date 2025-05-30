export const Plan = () => {
  return (
    <div
      id="Kuzatuv tizimi"
      className=" md:mb-[114px] max-md:mx-[10px] mb-[70px]"
    >
      <div className="flex md:flex-row flex-col gap-[20px] md:gap-[40px] mb-[60px] items-start">
        <div className="bg-[#B9FF66] rounded-[8px] px-[7px] max-md:mr-[20%]">
          <h2 className="font-medium text-[28px] md:text-[40px]">
            Kuzatuv Tizimi
          </h2>
        </div>
        <div className="max-w-[547px] ">
          <p className="font-normal text-[18px] ">
            Ovqatlanish, vazn va kundalik odatlaringizni oson va samarali
            kuzatib boring. Maqsadlaringiz sari aniq va nazorat ostida harakat
            qiling.
          </p>
        </div>
      </div>

      <div className="bg-[rgb(25,26,35)] md:rounded-[45px] rounded-[25px] h-auto   text-white px-[20px]">
        <div className="flex md:flex-row flex-col justify-center align-middle py-[20px] md:py-[42px] font-normal text-[18px] md:text-[24px]">
          <div className="md:px-[60px]  max-md:border-b-[1px] md:border-r-[1px] max-md:py-[20px]">
            <h2 className="pb-[20px]">1. Ovqatlanish kuzatuvi</h2>
            <p>
              "Har kunlik nonushta, tushlik va kechki ovqatni rejalashtirib,
              ovqatlanish tartibingizni nazorat qiling."
            </p>
          </div>
          <div className="md:px-[60px]  max-md:border-b-[1px] md:border-r-[1px] max-md:py-[20px]">
            <h2 className="pb-[20px]">2. Vazn o‘zgarishi</h2>
            <p>
              "Vazningizdagi o‘zgarishlarni muntazam kiritib boring va
              rivojlanishingizni grafik orqali ko‘rib boring."
            </p>
          </div>
          <div className="md:px-[60px] max-md:py-[20px]">
            <h2 className="pb-[20px]">3. Faoliyat monitoringi</h2>
            <p>
              "Kundalik faoliyatingizni tahlil qiling va sog‘lom odatlarni
              shakllantirish uchun o‘zgarishlarni kuzating."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
