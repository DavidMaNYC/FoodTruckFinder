import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

vi.stubGlobal(
  "fetch",
  vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            objectid: "1",
            applicant: "Leo's Hot Dogs",
            distance: 1.65,
            facilitytype: "Push Cart",
            locationdescription: "MISSION ST: 19TH ST to 20TH ST (2300 - 2399)",
            schedule: "someLink",
          },
          {
            objectid: "2",
            applicant: "Ziaurehman Amini",
            distance: 2.99,
            locationdescription: "MARKET ST: DRUMM ST intersection",
            facilitytype: "Push Cart",
            schedule: "someLink",
          },
          {
            objectid: "3",
            applicant: "Sunset Mercantile",
            distance: 7.42,
            locationdescription:
              "37TH AVE: QUINTARA ST to RIVERA ST (2100 - 2199)",
            facilitytype: "Push Cart",
            schedule: "someLink",
          },
        ]),
    })
  )
);

describe("App", () => {
  it("renders find food trucks button", async () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", {
      name: /Find Food Trucks Open Now/i,
    });
    expect(buttonElement).toBeVisible();
  });

  it("renders food trucks after clicking find trucks button", async () => {
    render(<App />);
    const findTrucksButton = screen.getByRole("button", {
      name: /Find Food Trucks Open Now/i,
    });
    await userEvent.click(findTrucksButton);

    await waitFor(
      () => {
        const truckCards = screen.getAllByTestId("truck-card");
        expect(truckCards).toHaveLength(3);
      },
      { timeout: 5000 }
    );
  }, 5000);
});
