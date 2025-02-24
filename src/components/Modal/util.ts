import { useState } from "react";

export const useModalState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return { isOpen, closeModal, openModal };
};
