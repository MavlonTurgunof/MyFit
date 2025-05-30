import React, { useEffect, useState } from "react";
import Button from "./Button";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Uzbek");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("malumot");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["malumot", "imkoniyatlar", "lavhalar"];
      let current = activeSection;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
            break;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const languages = [
    { name: "English", flag: "/img/en.png" },
    { name: "Uzbek", flag: "/img/uz.png" },
    { name: "Russian", flag: "/img/ru.png" },
  ];

  const availableLangs = languages.filter((lang) => lang.name !== selectedLang);
  const currentLang = languages.find((lang) => lang.name === selectedLang);

  return (
    <div
      className={`bg-white/90 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <header className="max-w-[1320px] w-full mx-auto flex items-center justify-between md:px-6 px-10">
        <div className="flex items-center space-x-2">
          <img
            src="/img/logo.svg"
            alt="Zingo Logo"
            className={`transition-all duration-300 ${
              scrolled ? "md:h-7 h-9" : "md:h-9 h-10"
            }`}
          />
        </div>

        <div className="md:hidden ">
          <button
            className="lg:hidden bg-[#FF556E] p-3 rounded-full"
            onClick={() => setMobileMenuOpen(true)}
          >
            <img src="/img/menu.svg" alt="menu" className="h-8 w-9" />
          </button>
        </div>

        <div className="hidden md:flex border border-[#FF556E] p-[5px] gap-x-[15px] rounded-[64px] items-center px-2">
          {["malumot", "imkoniyatlar", "lavhalar"].map((section) => (
            <button
              key={section}
              onClick={() => {
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(section);
              }}
              className={`font-medium px-3 py-2 rounded-full transition-all duration-300 ease-in-out transform ${
                activeSection === section
                  ? "scale-105 text-[#FF556E] bg-[#FF556E]/10 border border-[#FF556E]"
                  : "scale-100 text-black border border-transparent"
              }`}
            >
              {section === "malumot"
                ? "Ma'lumot"
                : section === "imkoniyatlar"
                ? "Imkoniyatlar"
                : "Lavhalar"}
            </button>
          ))}

          <div className="relative flex items-center space-x-1">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-1"
            >
              <img
                src={currentLang?.flag}
                alt="flag"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-medium text-black">{selectedLang}</span>
            </button>
            {showDropdown && (
              <div className="absolute left-4 right-0 mt-40 border w-36 rounded-md shadow-lg bg-white">
                <div className="py-1">
                  {availableLangs.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => {
                        setSelectedLang(lang.name);
                        setShowDropdown(false);
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <Button
            color="bg-[#FF556E]"
            borderColor="border-transparent"
            textColor="text-white"
          >
            <span className="text-[18px]">Sinab ko'ring</span>
          </Button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`rounded-tl-3xl fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 transform transition-transform duration-1000 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <button onClick={() => setMobileMenuOpen(false)}>
            <img src="/img/modal-close.svg" alt="close" className="h-9 w-9" />
          </button>
          <div className="flex items-center gap-3 mt-4">
            <img
              src={currentLang?.flag}
              alt="flag"
              className="h-6 w-6 rounded-full"
            />
            <span>{selectedLang}</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 p-4">
          {["malumot", "imkoniyatlar", "lavhalar"].map((section) => (
            <button
              key={section}
              onClick={() => {
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(section);
                setMobileMenuOpen(false);
              }}
              className={`font-medium px-3 py-2 rounded-full transition-all duration-300 ease-in-out transform ${
                activeSection === section
                  ? "scale-105 text-[#FF556E] bg-[#FF556E]/10 border border-[#FF556E]"
                  : "scale-100 text-black border border-transparent"
              }`}
            >
              {section === "malumot"
                ? "Ma'lumot"
                : section === "imkoniyatlar"
                ? "Imkoniyatlar"
                : "Lavhalar"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
