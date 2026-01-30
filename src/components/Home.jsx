import ApartmentsHeader from "./ApartmentsHeader";
import { useState } from "react";

export default function Home() {
    const [view, setView] = useState("Home");
    return(
        <>
        <ApartmentsHeader view={view} setView={setView}/>
        <div className="homeDiv">
            <h1>Apartments Predictor Home</h1>
            <p>{view}</p>
        </div>
        </>
    );
}