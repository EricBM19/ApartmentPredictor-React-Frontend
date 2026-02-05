import { useState } from "react";

export default function ApartmentCreate({ setApartments, setView }) {
  const [newApartment, setNewApartment] = useState({
    id: "",
    title: "",
    price: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewApartment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    if (!newApartment.id || !newApartment.title) {
      alert("ID y title son obligatorios");
      return;
    }

    setApartments((prev) => [...prev, newApartment]);

    setNewApartment({
      id: "",
      title: "",
      price: "",
      location: "",
      description: "",
    });

    setView("Home");
  };

  return (
    <div>
      <h1>Create Apartment</h1>

      <input
        name="id"
        placeholder="ID"
        value={newApartment.id}
        onChange={handleChange}
      />

      <input
        name="title"
        placeholder="Title"
        value={newApartment.title}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={newApartment.price}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={newApartment.location}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={newApartment.description}
        onChange={handleChange}
      />

      <button onClick={handleCreate}>Add Apartment</button>
    </div>
  );
}
