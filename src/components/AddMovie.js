import { useState } from "react";

function AddMovie(props) {

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    IMDBRating:"",
    hasOscars: false

  })

  function handleDataChange(e){
    const value = e.target.value
    let value = ""
    if(inputName === "hasOscars") value = e.target.checked
    else value =e.target.value

    const inputName = e.target.name
    
    setFormData({...formData, [inputName]: value})
  }

  function handleSummit(e){
    e.preventDefault()
    console.log("formData", formData);

    props.addMovie(formData)

    setFormData({
      title: "",
      director: "",
      IMDBRating: "",
      hasOscars: false
  })
  
  }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form >
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleDataChange} />

        <label>Director:</label>
        <input type="text" name="director" value={formData.director} onChange={handleDataChange}  />

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={formData.IMDBRating} onChange={handleDataChange} />

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={formData.hasOscars} onChange={handleDataChange} />
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
