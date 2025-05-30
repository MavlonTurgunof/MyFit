import { Picture } from "../../public/icon";

export const Clients = () => {
  return (
    <div id="Mijozlar fikri" className="md:mb-[112px] mb-[70px] mx-[10px]">
      <div className="flex md:flex-row flex-col gap-[20px] md:gap-[40px] mb-[30px] md:mb-[60px]">
        <div className="bg-[#B9FF66] rounded-[8px] px-[7px] max-md:mr-[50%]">
          <h2 className="font-medium md:text-[40px] text-[28px]">
            Mijozlar fikri
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

      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center   gap-[40px]">
        <div className="rounded-[45px] border-2 py-[40px] px-[35px] Card ">
          <div className="flex flex-row justify-start items-end gap-[20px] pb-[28px] border-b-2 mb-[20px]">
            <div className="w-[97.82px] h-[97.82px]">
              <Picture />
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-[20px]"> Azizbek Tursunov</h1>
              <p className="font-normal text-[18px]">Tadbirkor</p>
            </div>
          </div>
          <p className="font-normal text-[18px]">
            MyFit yordamida ovqatlanishimni tartibga soldim va oson ozdim.
          </p>
        </div>
        <div className="rounded-[45px] border-2 py-[40px] px-[35px] Card ">
          <div className="flex flex-row justify-start items-end gap-[20px] pb-[28px] border-b-2 mb-[20px]">
            <div className="w-[97.82px] h-[97.82px]">
              <Picture />
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-[20px]">Murodjanova Dildora</h1>
              <p className="font-normal text-[18px]">Shifokor</p>
            </div>
          </div>
          <p className="font-normal text-[18px]">
            Har kuni vaznimni kuzatib, o‘zgarishni ko‘rib motivatsiya olaman.
          </p>
        </div>
        <div className="rounded-[45px] border-2 py-[40px] px-[35px] Card ">
          <div className="flex flex-row justify-start items-end gap-[20px] pb-[28px] border-b-2 mb-[20px]">
            <div className="w-[97.82px] h-[97.82px]">
              <Picture />
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-[20px]">Sardorbek Rakhmonov</h1>
              <p className="font-normal text-[18px]">Dasturchi</p>
            </div>
          </div>
          <p className="font-normal text-[18px]">
            Video darslar juda sodda va foydali. Tavsiya qilaman!
          </p>
        </div>
        <div className="rounded-[45px] border-2 py-[40px] px-[35px] Card ">
          <div className="flex flex-row justify-start items-end gap-[20px] pb-[28px] border-b-2 mb-[20px]">
            <div className="w-[97.82px] h-[97.82px]">
              <Picture />
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-[20px]">Bekzod Karimov</h1>
              <p className="font-normal text-[18px]">Quruvchi</p>
            </div>{" "}
          </div>
          <p className="font-normal text-[18px]">
            MyFit bilan sog‘lom turmushni oson boshladim.
          </p>
        </div>
        <div className="rounded-[45px] border-2 py-[40px] px-[35px] Card ">
          <div className="flex flex-row justify-start items-end gap-[20px] pb-[28px] border-b-2 mb-[20px]">
            <div className="w-[97.82px] h-[97.82px]">
              <Picture />
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-[20px]">Jamila Mustafayeva</h1>
              <p className="font-normal text-[18px]">Sotuvchi</p>
            </div>{" "}
          </div>
          <p className="font-normal text-[18px]">
            Rejalashtirish va kuzatish funksiyalari juda qulay.
          </p>
        </div>
        <div className="rounded-[45px] border-2 py-[40px] px-[35px] Card ">
          <div className="flex flex-row justify-start items-end gap-[20px] pb-[28px] border-b-2 mb-[20px]">
            <div className="w-[97.82px] h-[97.82px]">
              <Picture />
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-[20px]">Sanjar Tursunov</h1>
              <p className="font-normal text-[18px]">Haydovchi</p>
            </div>
          </div>
          <p className="font-normal text-[18px]">
            Har kuni natijamni ko‘rib o‘z ustimda ishlashni davom ettiryapman.
          </p>
        </div>
      </div>
      <div className="flex md:justify-end justify-around">
        <button className="bg-black text-white md:py-[15px] md:px-[80px] py-[20px] px-[89.5px] font-normal text-[20px] rounded-[14px] mt-[40px] hover:scale-[110%] hover:shadow-black hover:shadow-2xl">
          Koproq...
        </button>
      </div>
    </div>
  );
};
