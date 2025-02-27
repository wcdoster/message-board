"use client";

import { useAuthContext } from "@/util/authProvider";
import { FC, useCallback, useMemo } from "react";
import { LoginModal } from "../LoginModal/index";
import { useModalState } from "../Modal/util";
import { ProfileButton, ProfileMenuOptions } from "../ProfileButton";
import { RegisterModal } from "../RegisterModal/index";

export const Profile: FC = () => {
  const { logout, user } = useAuthContext();

  const {
    isOpen: loginModalIsOpen,
    closeModal: closeLoginModal,
    openModal: openLoginModal,
  } = useModalState();
  const {
    isOpen: registerModalIsOpen,
    closeModal: closeRegisterModal,
    openModal: openRegisterModal,
  } = useModalState();

  const handleOpenRegisterModal = useCallback(() => {
    closeLoginModal();
    openRegisterModal();
  }, [closeLoginModal, openRegisterModal]);

  const menuOptions: ProfileMenuOptions[] = useMemo(
    () =>
      user
        ? [
            {
              text: "Log Out",
              onClick: () => {
                if (logout) logout();
              },
            },
          ]
        : [
            {
              text: "Log In",
              onClick: () => {
                openLoginModal();
              },
            },
            {
              text: "Register",
              onClick: () => {
                openRegisterModal();
              },
            },
          ],
    [user, logout, openLoginModal, openRegisterModal],
  );
  return (
    <>
      <ProfileButton menuOptions={menuOptions} />
      {loginModalIsOpen && (
        <LoginModal
          isOpen={loginModalIsOpen}
          closeModal={closeLoginModal}
          openRegisterModal={handleOpenRegisterModal}
        />
      )}
      {registerModalIsOpen && (
        <RegisterModal
          isOpen={registerModalIsOpen}
          closeModal={closeRegisterModal}
        />
      )}
    </>
  );
};
