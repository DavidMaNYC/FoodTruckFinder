import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { calculateDistance } from "./utils";

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IFoodTruck {
  latitude: number;
  longitude: number;
  distance: number;
}

const app = express();
const PORT = 3001;
const myLocation: ILocation = { latitude: 37.7749, longitude: -122.4194 };

app.get(
  "/api/foodtrucks",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const filePath = path.join(__dirname, "foodTrucks.json");
      if (!fs.existsSync(filePath)) {
        throw new Error("Food trucks data file not found");
      }

      const rawData = fs.readFileSync(filePath).toString();
      const foodTrucks: IFoodTruck[] = JSON.parse(rawData);

      const filteredTrucks = foodTrucks
        .map((truck) => {
          truck.distance =
            calculateDistance(
              myLocation.latitude,
              myLocation.longitude,
              truck.latitude,
              truck.longitude
            ) / 1000;
          return truck;
        })
        .filter((truck) => truck.distance <= 8.04672)
        .slice(0, 3);

      res.json(filteredTrucks);
    } catch (error) {
      next(error);
    }
  }
);

app.use((error: Error, req: Request, res: Response) => {
  console.error(error);
  res.status(500).json({ error: error.message });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export { app };
