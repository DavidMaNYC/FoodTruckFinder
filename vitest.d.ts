import "@testing-library/jest-dom";

declare module "vitest" {
  export interface Assertion {
    toBeInTheDocument(): void;
  }
}
