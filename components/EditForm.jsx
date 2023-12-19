import { useState } from "react";
import axios from "axios";

function EditForm({ property }) {
  const [name, setName] = useState(property.name);
  const [city, setCity] = useState(property.city);
  const [type, setType] = useState(property.type);

  const submitForm = async (e) => {
    e.preventDefault();
    const newProperty = {
      name,
      city,
      type,
    };
    const res = await axios.put(
      `http://localhost:5005/api/property/${property._id}`,
      newProperty
    );
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="city">
        city
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label htmlFor="type">
        type
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </label>
      <button type="submit">Edit Property</button>
    </form>
  );
}

export default EditForm;
