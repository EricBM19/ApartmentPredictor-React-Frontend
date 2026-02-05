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
    const { name, value } = e.target;
    setEditingApartment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveApartment = () => {
    setApartments((prev) =>
      prev.map((ap) =>
        ap.id === editingId ? editingApartment : ap
      )
    );
    setEditingId(null);
    setEditingApartment(null);
  };

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Location</th>
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
                  <button onClick={saveApartment}>Save</button>
                ) : (
                  <button onClick={() => startEdit(apartment)}>
                    Update
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
