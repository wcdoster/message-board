import clsx from "clsx";
import { ChangeEventHandler, FC } from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  extraMargin?: boolean;
}

export const TextArea: FC<Props> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  rows,
  extraMargin,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      className={clsx(
        "w-full rounded-2xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 resize-none",
        { "m-2": extraMargin },
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows ?? 8}
    />
  );
};
