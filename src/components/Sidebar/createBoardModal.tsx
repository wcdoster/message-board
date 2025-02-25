"use client";

import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { createBoard, CreateBoardInput } from "@/data/boards/requests";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Modal } from "../Modal";

const initialValues: CreateBoardInput = {
  title: "",
  description: "",
  createdByUserId: "09b971eb-590e-4671-a9d6-ac2701d225da",
};

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export const CreateBoardModal: FC<Props> = ({ isOpen, closeModal }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="text-center">
        <p className="text-xl">Create New Board</p>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            setError(null);
            try {
              setIsLoading(true);
              const { id } = await createBoard({
                title: values.title,
                description: values.description,
                createdByUserId: values.createdByUserId,
              });
              router.push(`/boards/${id}`);
              closeModal();
            } catch {
              setError("There was an issue. Please try again.");
            }
            setIsLoading(false);
          }}
        >
          {({ values, setValues, handleSubmit, isValid }) => {
            return (
              <div className="p-4">
                <TextInput
                  name="title"
                  value={values.title}
                  id="title"
                  placeholder="Title"
                  onChange={(e) => {
                    setValues({ ...values, title: e.target.value });
                  }}
                />
                <TextInput
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={values.description}
                  onChange={(e) => {
                    setValues({ ...values, description: e.target.value });
                  }}
                />
                {error && <p>{error}</p>}
                <Button
                  theme="primary"
                  onClick={handleSubmit}
                  type="submit"
                  disabled={isLoading || !isValid}
                >
                  Create Board
                </Button>
              </div>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};
