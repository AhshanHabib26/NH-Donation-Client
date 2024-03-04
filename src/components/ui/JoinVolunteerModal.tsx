import { Modal } from "@mantine/core";
import AboutUsForm from "./AboutUsForm";

interface ModalFormProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinVolunteerModal: React.FC<ModalFormProps> = ({
  opened,
  setOpened,
}) => {
  return (
    <div>
      <Modal
        size="lg"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Join our Volunteer Teams"
        centered
      >
        <AboutUsForm />
      </Modal>
    </div>
  );
};

export default JoinVolunteerModal;
