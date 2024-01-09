import request from "supertest";
import { app } from "./server";
import { calculateDistance } from "./utils";
import { IFoodTruck } from "./types";
describe("Server API Endpoints", () => {
  describe("GET /api/foodtrucks", () => {
    it("should respond with status 200 and an array of food trucks", async () => {
      const response = await request(app).get("/api/foodtrucks");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    it("should calculate distances and return trucks within 8.04672 km", async () => {
      const response = await request(app).get("/api/foodtrucks");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      const foodTrucks = response.body;
      const myLocation = { latitude: 37.7749, longitude: -122.4194 };
      foodTrucks.forEach((truck: IFoodTruck) => {
        const distance = calculateDistance(
          myLocation.latitude,
          myLocation.longitude,
          truck.latitude,
          truck.longitude
        );
        expect(distance).toBeLessThanOrEqual(8.04672 * 1000);
      });
    });
  });
});
