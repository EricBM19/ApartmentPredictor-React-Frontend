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
            <strong>{apartment.title}</strong>: {apartment.location}
            <button className='deleteButton' onClick={() => handleDelete(apartment.id)}>
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
