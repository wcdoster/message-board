"use client";
import { FC, useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";

interface LoginModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="text-center">
        <h2 className="text-xl m-2">Log In</h2>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="m-2 w-full text-md max-w-md rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="m-2 w-full max-w-md rounded-lg border border-gray-300 bg-gray-50 p-2 text-md text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <div className="text-left pl-2 m-2">
          <a className="m-2">Forgot Password?</a>
          <p className="m-2">
            New User? <a>Sign up</a>
          </p>
        </div>
        <Button
          theme="primary"
          onClick={() => {
            closeModal();
          }}
        >
          Login
        </Button>
      </div>
    </Modal>
  );
};
