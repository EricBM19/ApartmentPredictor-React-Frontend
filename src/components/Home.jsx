import { useState } from "react";
import { Toolbar } from "@mui/material";
import ApartmentsHeader from "./ApartmentsHeader";
import ApartmentsPage from "./ApartmentsPage";
import ApartmentDelete from "./ApartmentDelete";
import ApartmentCreate from "./ApartmentCreate";
import { apartmentsList } from "../data/apartments";

export default function Home() {
  const [view, setView] = useState("Home");
  const [apartments, setApartments] = useState(apartmentsList);

  const renderView = () => {
    switch (view) {
      case "Home":
        return (
          <ApartmentsPage
            apartments={apartments}
            setApartments={setApartments}
          />
        );

      case "Create":
        return (
          <ApartmentCreate
            setApartments={setApartments}
            setView={setView}
          />
        );

      case "Delete":
        return (
          <ApartmentDelete
            apartments={apartments}
            setApartments={setApartments}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <ApartmentsHeader setView={setView} />
      <Toolbar />
      <div className="homeDiv">
        {renderView()}
      </div>
    </>
  );
}