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
    <div className="apartment-create">
      <h1>Create Apartment</h1>

      <div>
        <input
        name="id"
        placeholder="ID"
        value={newApartment.id}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        name="title"
        placeholder="Title"
        value={newApartment.title}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        type="number"
        name="price"
        placeholder="Price"
        value={newApartment.price}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        type="number"
        name="rooms"
        placeholder="Rooms"
        value={newApartment.rooms}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        value={newApartment.bathrooms}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        type="number"
        name="surface"
        placeholder="Surface (m²)"
        value={newApartment.surface}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        name="location"
        placeholder="Location"
        value={newApartment.location}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        name="description"
        placeholder="Description"
        value={newApartment.description}
        onChange={handleChange}
        />
      </div>

      <div>
        <input
        name="imageUrl"
        placeholder="Image URL"
        value={newApartment.imageUrl}
        onChange={handleChange}
        />
      </div>

      <div>
        <label>
        <input
          type="checkbox"
          name="interested"
          checked={newApartment.interested}
          onChange={handleChange}
        />
        Interested
        </label>
      </div>

      <div>
        <input
        type="datetime-local"
        name="createdAt"
        value={newApartment.createdAt}
        onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <button onClick={handleCreate}>Add Apartment</button>
      </div>
    </div>
  );
}
