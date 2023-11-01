import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import image1 from "./assets/images/image-1.webp";
import image2 from "./assets/images/image-2.webp";
import image3 from "./assets/images/image-3.webp";
import image4 from "./assets/images/image-4.webp";
import image5 from "./assets/images/image-5.webp";
import image6 from "./assets/images/image-6.webp";
import image7 from "./assets/images/image-7.webp";
import image8 from "./assets/images/image-8.webp";
import image9 from "./assets/images/image-9.webp";
import image10 from "./assets/images/image-10.jpeg";
import image11 from "./assets/images/image-11.jpeg";

function App() {
  const [selectedImg, setSelectedImg] = useState([]);
  const images = [
    { id: 1, image1 },
    { id: 2, image2 },
    { id: 3, image3 },
    { id: 4, image4 },
    { id: 5, image5 },
    { id: 6, image6 },
    { id: 7, image7 },
    { id: 8, image8 },
    { id: 9, image9 },
    { id: 10, image10 },
    { id: 11, image11 },
  ];
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
