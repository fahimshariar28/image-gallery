import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import { FaImage } from "react-icons/fa";

function App() {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState([]);

  // Fetching images from json file
  useState(() => {
    fetch("images.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  // Handle delete images by selected id
  const handleDelete = () => {
    let updatedImages = [...images];
    if (selectedImg.length > 0) {
      updatedImages = updatedImages.filter(
        (image) => !selectedImg.includes(image.id)
      );
      setSelectedImg([]);
    }
    setImages(updatedImages);
  };

  return (
    <div className="bg-gray-400 h-full m-0 p-10">
      <div className="bg-white rounded-lg">
        {/* Header Section */}
        <Header onDelete={handleDelete} selectedImg={selectedImg}></Header>

        {/* Image Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 p-4">
          {images.map((image, index) => (
            <Image
              key={image.id}
              image={image.image}
              id={image.id}
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            ></Image>
          ))}
          <div className="bg-gray-50 border-dashed border-gray-200 border-2 flex flex-col gap-4 items-center justify-center rounded-lg p-10 cursor-pointer">
            <FaImage className="h-7 w-7 text-gray-800" />
            <p className="text-black text-lg font-medium">Add Image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
