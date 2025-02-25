"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    isOpen && (
      <div
        className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50 z-40"
        onClick={() => {
          closeModal();
        }}
      >
        <div
          className="inset-0 z-50 border w-[560px] rounded-lg border-gray-800 p-8 dark:bg-black bg-white bg-opacity-100"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="flex justify-end flex-row p-4">
            <span>
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="hover:cursor-pointer"
                onClick={() => {
                  closeModal();
                }}
              />
            </span>
          </div>
          {children}
        </div>
      </div>
    )
  );
};
