import { useState } from "react";

export default function ApartmentsPage({ apartments, setApartments }) {
  return (
    <>
      <h1>Apartments Table</h1>
      <ApartmentsTableVisuals
        apartments={apartments}
        setApartments={setApartments}
      />
    </>
  );
}

function ApartmentsTableVisuals({ apartments, setApartments }) {
  const [editingId, setEditingId] = useState(null);
  const [editingApartment, setEditingApartment] = useState(null);

  const startEdit = (apartment) => {
    setEditingId(apartment.id);
    setEditingApartment({ ...apartment });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingApartment((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const saveApartment = () => {
    setApartments((prev) =>
      prev.map((ap) => (ap.id === editingId ? editingApartment : ap))
    );
    setEditingId(null);
    setEditingApartment(null);
  };

  return (
    <div className="apartments-table">
      <table className="apartments-table-content">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Rooms</th>
          <th>Bathrooms</th>
          <th>Surface</th>
          <th>Location</th>
          <th>Description</th>
          <th>Image</th>
          <th>Interested</th>
          <th>Created At</th>
          <th>Update</th>
        </tr>
      </thead>

      <tbody>
        {apartments.map((apartment) => {
          const isEditing = apartment.id === editingId;

          return (
            <tr key={apartment.id}>
              <td>
                {isEditing ? (
                  <input
                    name="title"
                    value={editingApartment.title}
                    onChange={handleChange}
                  />
                ) : (
                  apartment.title
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    type="number"
                    name="price"
                    value={editingApartment.price}
                    onChange={handleChange}
                  />
                ) : (
                  apartment.price
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    type="number"
                    name="rooms"
                    value={editingApartment.rooms}
                    onChange={handleChange}
                  />
                ) : (
                  apartment.rooms
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    type="number"
                    name="bathrooms"
                    value={editingApartment.bathrooms}
                    onChange={handleChange}
                  />
                ) : (
                  apartment.bathrooms
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    type="number"
                    name="surface"
                    value={editingApartment.surface}
                    onChange={handleChange}
                  />
                ) : (
                  apartment.surface
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    name="location"
                    value={editingApartment.location}
                    onChange={handleChange}
                  />
                ) : (
                  apartment.location
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    name="description"
                    value={editingApartment.description}
                    onChange={handleChange}
                  />
                ) : (
                  apartment.description
                )}
              </td>

              <td className="image-cell">
                {isEditing ? (
                  <input
                    name="imageUrl"
                    value={editingApartment.imageUrl}
                    onChange={handleChange}
                  />
                ) : apartment.imageUrl ? (
                  <img
                    src={apartment.imageUrl}
                    alt={apartment.title}
                    width="80"
                  />
                ) : (
                  ""
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    type="checkbox"
                    name="interested"
                    checked={editingApartment.interested}
                    onChange={handleChange}
                  />
                ) : apartment.interested ? (
                  "✅"
                ) : (
                  "❌"
                )}
              </td>

              <td>
                {isEditing ? (
                  <input
                    type="datetime-local"
                    name="createdAt"
                    value={editingApartment.createdAt}
                    onChange={handleChange}
                  />
                ) : (
                  new Date(apartment.createdAt).toLocaleString()
                )}
              </td>

              <td>
                {isEditing ? (
                  <button className="btn btn-save"  onClick={saveApartment}>Save</button>
                ) : (
                  <button className="btn btn-update" onClick={() => startEdit(apartment)}>Update</button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
