import { AmazonIcon } from "../Assets/amazon-icon";
import { DribbleIcon } from "../Assets/dribble-icon";
import { Hubspot } from "../Assets/hubspot";
import { NetlfixIcon } from "../Assets/netlfix-icon";
import { NotionIcon } from "../Assets/notion-cion";
import { ZoomIcon } from "../Assets/zoom-icon";

export const Brands = () => {
  return (
    <>
      <div className="flex items-center gap-[95px] justify-center">
        <div>
          <AmazonIcon />
        </div>
        <div>
          <DribbleIcon />
        </div>
        <div>
          <Hubspot />
        </div>
        <div>
          <NotionIcon />
        </div>
        <div>
          <NetlfixIcon />
        </div>
        <div>
          <ZoomIcon />
        </div>
      </div>
    </>
  );
};
