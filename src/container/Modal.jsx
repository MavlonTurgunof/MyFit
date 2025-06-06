import { useState } from "react";
import { XIcon } from "../../public/icon";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxnlAZNaICDS55EOX0yNhu8hSAl2iJlMrCzueQG_QWE1rreAAbnd8M1nXkRYOoMIBptQA/exec";

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("phone", form.phone);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("✅ Muvaffaqiyatli yuborildi");
        setTimeout(() => {
          onClose();
          setForm({ name: "", phone: "" });
        }, 1500);
      } else {
        toast.error("❌ Ma'lumotlaringizni yuborishda xatolik yuz berdi");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Ma'lumotlaringizni yuborishda xatolik yuz berdi");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex justify-center items-center z-50 ">
        <div className="bg-white max-w-[1100px] flex md:flex-row flex-col gap-[38px] justify-center items-end rounded-[20px] relative max-md:m-[10px]">
          <button
            onClick={onClose}
            className="absolute top-[5px] right-[5px] md:top-[15px] md:right-[15px]"
          >
            <XIcon />
          </button>

          <div className="md:my-[91px] md:ml-[70px] my-[30px] mx-[20px]">
            <h1 className="font-bold text-[40px] md:text-[50px] mb-[20px] text-center">
              3 oylik bepul <span className="text-[#B9FF66]">Premium</span>{" "}
              sovg'a
            </h1>

            <p className="font-light text-[20px] md:text-[24px] text-center">
              Ariza qoldiring — dastur tayyor bo‘lganda sizga 3 oylik Premium
              bepul taqdim etamiz!
            </p>
            <div className="flex flex-col justify-center items-center mt-[22px]">
              <input
                type="text"
                value={form.name}
                name="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ism"
                className="border-[2px] border-[#B9FF66] w-full mb-[9px] p-[10px] md:p-[20px] rounded outline-none font-light text-[18px]"
              />
              <input
                type="number"
                value={form.phone}
                name="phone"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Telefon raqam"
                inputMode="numeric"
                className="border-[2px] border-[#B9FF66] w-full mb-[22px] p-[10px] md:p-[20px] rounded outline-none font-light text-[18px]"
              />
              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-[#B9FF66] text-black px-[8px] py-[12px] md:px-[10px] md:py-[15.5px] w-1/2 font-bold text-[22px] rounded-[10px] shadow-lg shadow-blue-500/50 hover:scale-[105%] hover:shadow-2xl hover:transition-all hover:duration-500"
              >
                Yuborish
              </button>
            </div>
          </div>

          <div className="max-md:hidden">
            <div className="bg-[url(/img/Ellipse.svg)] w-[550px] h-[510px] bg-no-repeat bg-cover flex justify-center items-center">
              <img src="./img/Giveaway.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Modal;
