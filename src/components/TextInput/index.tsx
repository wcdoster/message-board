import { ChangeEvent, FC } from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
}

export const TextInput: FC<Props> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  onEnter,
}) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      className="m-2 w-full max-w-xl rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={
        onEnter
          ? (e) => {
              if (e.key === "Enter") {
                onEnter();
              }
            }
          : undefined
      }
    />
  );
};
