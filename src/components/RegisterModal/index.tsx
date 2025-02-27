"use client";
import { useAuthContext } from "@/util/authProvider";
import { FC, useEffect, useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";

interface RegisterModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const RegisterModal: FC<RegisterModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const { register, loading, clearAuthState, error } = useAuthContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return () => {
      clearAuthState();
    };
  }, []);

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="text-center">
        <h2 className="text-xl m-2">Register</h2>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="m-2 w-full text-md max-w-md rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
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
        {error && <p className=" text-red-500">{error}</p>}
        <Button
          theme="primary"
          onClick={async () => {
            if (register) {
              const success = await register(username, email, password);
              if (success) {
                closeModal();
              }
            }
          }}
          disabled={Boolean(loading)}
        >
          Create Account
        </Button>
      </div>
    </Modal>
  );
};
