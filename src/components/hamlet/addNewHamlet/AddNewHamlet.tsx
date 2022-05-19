import AddNewHamletView from "./AddNewHamletView";

interface props {
  offModal: () => void;
  id: number;
}

const AddNewHamlet = ({ offModal, id }: props) => {
  const props = {
    offModal,
    id,
  };
  return <AddNewHamletView {...props} />;
};

export default AddNewHamlet;
