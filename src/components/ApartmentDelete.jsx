export default function ApartmentDelete({ apartments, setApartments }) {
  const handleDelete = (id) => {
    setApartments((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <>
      <h1>Delete Apartment</h1>

      <ul>
        {apartments.map((apartment) => (
          <li key={apartment.id}>
            {apartment.title} {apartment.location}
            <button onClick={() => handleDelete(apartment.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
