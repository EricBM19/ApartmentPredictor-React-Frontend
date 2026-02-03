import { apartmentsList } from "../data/apartments";

export default function ApartmentsPage() {
  return (
    <>
        <AparmentsTableVisuals apartments={apartmentsList} />
    </>
  );
}


function AparmentsTableVisuals({ apartments }) {
  const apartmentsRow = apartments.map((apartment) => (
    <tr key={apartment.id}>
      <td>{apartment.title}</td>
      <td>{apartment.price}</td>
      <td>{apartment.location}</td>
    </tr>
  ));

  return (
    <>
      <h1>Apartments Table</h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>{apartmentsRow}</tbody>
      </table>
    </>
  );
}
