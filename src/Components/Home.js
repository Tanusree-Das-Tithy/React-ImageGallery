import React, { useState } from "react";
//import "./App.css";


const Home = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imageArray));

   
    event.target.value = "";
  };

  function handleDelete(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section>
      <label>
        + Add Images to Gallery
        <br />
        
        <input
          type="file"
          name="images"   
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/jpg"
        />
      </label>
      <br />

      <input type="file" />
      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img className="sourceimg" src={image} height="200" alt="upload" />
                <div className="editOption">
                <button onClick={() => handleDelete(image)}><i className="fa fa-trash fa-2x"></i> 
                </button>
                <p>{index + 1}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Home;