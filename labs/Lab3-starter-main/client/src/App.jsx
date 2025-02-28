import { useState } from "react";
import "./app.css"; 

function App() {
  const [images, setImages] = useState([]);
  const [dogImage, setDogImage] = useState("");
  const [file, setFile] = useState(null);

  const getMultipleDogImages = async () => {
    try {
      const response = await fetch("http://localhost:8000/fetch/multiple");
      const data = await response.json();

      console.log("Fetched images:", data.files); 

      if (response.ok) {
        setImages(data.files);
      } else {
        console.error("Error fetching images:", data.error);
      }
    } catch (error) {
      console.error("Error fetching dog images:", error);
    }
  };

  const getDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadDogImage = async () => {
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:8000/save/dog", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload successful:", data);
      alert(`Image uploaded successfully: ${data.filePath}`);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(`Error uploading image: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="card">
        <h1>Random Dog Images</h1>
        <button onClick={getMultipleDogImages}>Get Multiple Dog Images</button>
        <div className="image-container">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Dog ${index}`} className="dog-image" />
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Random Dog Image</h2>
        <button onClick={getDogImage}>Get Random Dog</button>
        {dogImage && <img src={dogImage} alt="Random Dog" className="dog-image" />}
      </div>

      <div className="card">
        <h2>Upload Random Dog Image</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadDogImage}>Upload Image</button>
      </div>
    </div>
  );
}

export default App;
