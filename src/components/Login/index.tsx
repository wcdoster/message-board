"use client";

import dynamic from "next/dynamic";
import { FC } from "react";
import { Button } from "../Button";
import { useModalState } from "../Modal/util";

const LoginModal = dynamic(() =>
  import("./loginModal").then((mod) => mod.LoginModal),
);

export const LoginButton: FC = () => {
  const { isOpen, closeModal, openModal } = useModalState();
  return (
    <>
      <Button
        theme="login"
        onClick={() => {
          openModal();
        }}
      >
        Login
      </Button>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
