import { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const newProperty = {
      name,
      city,
      type,
    };
    const res = await axios.post(
      "http://localhost:5005/api/property",
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
      <button type="submit">Create Property</button>
    </form>
  );
}

export default Form;
