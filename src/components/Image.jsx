import { BiCheckbox } from "react-icons/bi";
import { FaCheckSquare } from "react-icons/fa";

const Image = ({ id, image, selectedImg, setSelectedImg }) => {
  const isSelected = selectedImg.includes(id);

  const handleCheckboxClick = () => {
    if (isSelected) {
      setSelectedImg(selectedImg.filter((imgId) => imgId !== id));
    } else {
      setSelectedImg([...selectedImg, id]);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-500">
      {isSelected ? (
        <>
          <FaCheckSquare
            className="absolute top-2 right-2 text-xl rounded-lg text-blue-600 cursor-pointer z-10"
            onClick={handleCheckboxClick}
          />
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover filter hover:blur-sm"
          />
        </>
      ) : (
        <>
          <BiCheckbox
            className="absolute top-2 right-2 text-2xl rounded-lg text-blue-600 cursor-pointer z-10"
            onClick={handleCheckboxClick}
          />
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover filter hover:blur-sm"
          />
        </>
      )}
    </div>
  );
};

export default Image;
