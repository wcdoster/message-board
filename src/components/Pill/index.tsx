import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props {
  icon: IconProp;
  text: string | number;
}

export const Pill: FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex flex-row flex-start basis-auto p-1 rounded-3xl bg-gray-100 dark:bg-gray-700 w-auto">
      <FontAwesomeIcon className="my-auto mx-2" icon={icon} />
      <p className="px-1">{text}</p>
    </div>
  );
};
