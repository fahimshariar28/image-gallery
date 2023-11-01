import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  const [selectedImg, setSelectedImg] = useState([]);
  const [images, setImages] = useState([]);

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
        (item) => !selectedImg.includes(item.id)
      );
    }
    setImages(updatedImages);
  };

  return (
    <div className="bg-gray-400 h-full m-0 p-10">
      <div className="bg-white rounded-lg">
        {/* Header Section */}
        <Header onDelete={handleDelete} selectedImg={selectedImg}></Header>

        {/* Image Section */}
        <div className="grid grid-cols-5 gap-4 p-4">
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
        </div>
      </div>
    </div>
  );
}

export default App;
