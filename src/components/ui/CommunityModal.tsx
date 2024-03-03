import { Modal } from "@mantine/core";
import TextEditor from "./TextEditor";
import { FormEvent, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCureentUser } from "../../redux/features/auth/authSlice";

interface ModalFormProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUser {
  name: string;
}

const isUser = (user: unknown): user is IUser => {
  return typeof user === "object" && user !== null && "name" in user;
};

interface IUserData {
  userName: string;
  title: string;
  value: string;
}

const CommunityModal: React.FC<ModalFormProps> = ({ opened, setOpened }) => {
  const user = useAppSelector(useCureentUser);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [userName, setUserName] = useState(isUser(user) ? user.name : "");

  const userData: IUserData = {
    userName,
    title,
    value,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userData);

    setTitle("");
    setValue("");
  };

  return (
    <div>
      <Modal
        size="lg"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Write your warm wishes!"
      >
        <hr className=" border-gray-200" />
        <div className="my-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="text-md text-gray-600" htmlFor="userName">
                User Name
              </label>
              <input
                className="w-full border border-gray-200 h-[40px] outline-none rounded-lg pl-3"
                type="text"
                value={userName}
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
                id=""
              />
            </div>
            <div className="mb-3">
              <label className="text-md text-gray-600" htmlFor="title">
                Title
              </label>
              <input
                className="w-full border border-gray-200 h-[40px] outline-none rounded-lg pl-3"
                type="text"
                name="title"
                value={title}
                placeholder="Donation Product Title"
                onChange={(e) => setTitle(e.target.value)}
                id=""
              />
            </div>
            <div>
              <label className="text-md text-gray-600" htmlFor="title">
                Feedback
              </label>
              <TextEditor value={value} setValue={setValue} />
            </div>
            <div className="flex items-end justify-end">
              <input
                className="bg-[#191F2D] text-white px-5 py-3 rounded-lg cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CommunityModal;
