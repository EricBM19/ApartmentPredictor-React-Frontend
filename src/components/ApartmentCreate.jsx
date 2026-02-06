import { useState } from "react";

export default function ApartmentCreate({ setApartments, setView }) {
  const [newApartment, setNewApartment] = useState({
    id: "",
    title: "",
    price: "",
    rooms: "",
    bathrooms: "",
    surface: "",
    location: "",
    description: "",
    imageUrl: "",
    interested: false,
    createdAt: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewApartment((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCreate = () => {
    if (!newApartment.id || !newApartment.title) {
      alert("ID y title son obligatorios");
      return;
    }

    if (!newApartment.createdAt) {
      newApartment.createdAt = new Date().toISOString();
    }

    setApartments((prev) => [...prev, newApartment]);

    setNewApartment({
      id: "",
      title: "",
      price: "",
      rooms: "",
      bathrooms: "",
      surface: "",
      location: "",
      description: "",
      imageUrl: "",
      interested: false,
      createdAt: "",
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
        type="number"
        name="rooms"
        placeholder="Rooms"
        value={newApartment.rooms}
        onChange={handleChange}
      />

      <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        value={newApartment.bathrooms}
        onChange={handleChange}
      />

      <input
        type="number"
        name="surface"
        placeholder="Surface (m²)"
        value={newApartment.surface}
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

      <input
        name="imageUrl"
        placeholder="Image URL"
        value={newApartment.imageUrl}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="interested"
          checked={newApartment.interested}
          onChange={handleChange}
        />
        Interested
      </label>

      <input
        type="datetime-local"
        name="createdAt"
        value={newApartment.createdAt}
        onChange={handleChange}
      />

      <button onClick={handleCreate}>Add Apartment</button>
    </div>
  );
}
