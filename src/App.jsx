import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import EditForm from "../components/EditForm";

function App() {
  useEffect(() => {
    getData();
  }, []);

  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});
  const [edit, setEdit] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5005/api/property");
      setProperties(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProperty = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5005/api/property/${id}`
      );
      if (res.status === 200) getData();
    } catch (err) {
      console.log(err);
    }
  };

  const openEdit = (property) => {
    if (edit === false) {
      setEdit(true);
      setProperty(property);
    }
  };

  return (
    <>
      <h1>My app</h1>
      {properties.map((property) => {
        return (
          <div>
            <h2>{property.name}</h2>
            <button onClick={() => deleteProperty(property._id)}>Delete</button>
            <button onClick={() => openEdit(property)}>Edit</button>
          </div>
        );
      })}

      {edit ? <EditForm property={property} /> : <Form />}
    </>
  );
}

export default App;
