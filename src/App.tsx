import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

interface IFoodTruck {
  objectid: string;
  applicant: string;
  facilitytype: string;
  locationdescription: string;
  address: string;
  fooditems: string;
  latitude: number;
  longitude: number;
  distance: number;
  schedule: string;
}

function App() {
  const [foodTrucks, setFoodTrucks] = useState<IFoodTruck[]>([]);
  const [loading, setLoading] = useState(false);
  const [showTrucks, setShowTrucks] = useState(false);

  const findFoodTrucks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/foodtrucks");
      if (!response.ok) {
        throw new Error("Error fetching food trucks");
      }
      const data = await response.json();
      toast.success(`${data.length} Food trucks found!`);

      setFoodTrucks(data);
      setShowTrucks(true);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`App ${showTrucks ? "App-content" : ""}`}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <button
        className="find-truck-btn"
        onClick={findFoodTrucks}
        disabled={loading}
      >
        {loading ? "Loading..." : "Find Food Trucks Open Now"}
      </button>

      {showTrucks && (
        <div className="food-trucks">
          {foodTrucks.map((truck) => (
            <div
              key={truck.objectid}
              className="truck-card"
              data-testid="truck-card"
            >
              <h2 className="truck-name">{truck.applicant}</h2>
              <p className="truck-info">
                <strong>Type:</strong> {truck.facilitytype}
              </p>
              <p className="truck-info">
                <strong>Location:</strong> {truck.locationdescription}
              </p>
              <p className="truck-distance">
                Distance: {truck.distance.toFixed(2)} miles
              </p>
              <a
                href={truck.schedule}
                target="_blank"
                rel="noopener noreferrer"
                className="schedule-link"
              >
                View Schedule
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
