import ApartmentsHeader from "./ApartmentsHeader";
import ApartmentsPage from "./ApartmentsPage";
import ApartmentDelete from "./ApartmentDelete";
import { useState } from "react";

export default function Home() {
    const [view, setView] = useState("Home");


  const renderView = () => {
    switch (view) {
      case "Home":
        return <ApartmentsPage />;
      case "Create":
        return <p>{view}</p>;
      case "Update":
        return <p>{view}</p>;
      case "Delete":
        return <ApartmentDelete />;
      default:
        return null;
    }
  };

      return (
        <>
            <ApartmentsHeader setView={setView} />

            <div className="homeDiv">
                {renderView()}
            </div>
        </>
  );
}