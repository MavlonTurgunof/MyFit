import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AmazonIcon } from "../Assets/amazon-icon";
import { DribbleIcon } from "../Assets/dribble-icon";
import { Hubspot } from "../Assets/hubspot";
import { NetlfixIcon } from "../Assets/netlfix-icon";
import { NotionIcon } from "../Assets/notion-cion";
import { ZoomIcon } from "../Assets/zoom-icon";

export const Brands = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const brandIcons = (
    <div className="flex items-center gap-[95px] justify-center px-4">
      <AmazonIcon />
      <DribbleIcon />
      <Hubspot />
      <NotionIcon />
      <NetlfixIcon />
      <ZoomIcon />
    </div>
  );

  return isMobile ? (
    <Marquee speed={40} gradient={false} pauseOnHover>
      {brandIcons}
    </Marquee>
  ) : (
    brandIcons
  );
};
