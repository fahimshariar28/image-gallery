import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

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

  return (
    <div className="bg-gray-400 h-screen m-0 p-10">
      <div className="bg-white rounded-lg h-60">
        {/* Header Section */}
        <Header selectedImg={selectedImg}></Header>
      </div>
    </div>
  );
}

export default App;
