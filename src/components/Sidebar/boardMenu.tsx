"use client";
import { useAuthContext } from "@/util/authProvider";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { FC } from "react";
import { CollapsibleMenu } from "../CollapsibleMenu";
import { useModalState } from "../Modal/util";

const CreateBoardModal = dynamic(() =>
  import("./createBoardModal").then((mod) => mod.CreateBoardModal),
);

export const BoardMenu: FC = () => {
  const { userId } = useAuthContext();
  const { openModal, isOpen, closeModal } = useModalState();
  return (
    <>
      <CollapsibleMenu
        menuIcon={faClipboard}
        menuName="Boards"
        menuItems={[
          { href: "/boards", label: "All Boards" },
          ...(userId
            ? [
                { href: "/", label: "Favorites" },
                { href: "/", label: "Your Boards" },
                { action: openModal, label: "Create Board" },
              ]
            : []),
        ]}
      />
      {isOpen && <CreateBoardModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
};
