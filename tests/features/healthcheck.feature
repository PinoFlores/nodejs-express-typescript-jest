Feature: Server Health Check

    Check the health of the server

    Scenario: Health Check
        Given A simple GET request to "/status"
        Then the response status code should be 200