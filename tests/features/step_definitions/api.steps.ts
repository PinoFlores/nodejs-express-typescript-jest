import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./tests/features/healthcheck.feature");

defineFeature(feature, (test) => {
  test("Health Check", ({ given, then }) => {
    given(/^A simple GET request to (.*)$/, (endpoint) => {});
    then(/^the response status code should be (.*)$/, (code) => {
      expect(code).toBe("200");
    });
  });
});
