import { useState } from "react";
import { apartmentsList } from "../data/apartments";


export default function ApartmentDelete () {

    const [apartments, setApartments] = useState(apartmentsList);

    return (
        <>
            <h1>Delete Apartment</h1>
            <ul>
                {apartments.map((apartment) => (
                    <li>
                        {apartment.title} {apartment.location}
                        <button onClick={() => {
                            setApartments(apartments.filter((a) => a.title !== apartment.title)
                        );
                        }}>
                           Delete 
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}