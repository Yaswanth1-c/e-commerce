import { validateEmail } from "./validation";
import { validatePassword } from "./validation";
import { validatePhoneNumber } from "./validation";

describe("validateEmail function", () => {
  test("should throw an error for an invalid email address", () => {
    // Test with an invalid email address
    const invalidEmail = "invalid.email.com";
    expect(() => {
      validateEmail(invalidEmail);
    }).toThrow("Invalid email address");
  });

  test("should not throw an error for a valid email address", () => {
    // Test with a valid email address
    const validEmail = "test@example.com";
    expect(() => {
      validateEmail(validEmail);
    }).not.toThrow();
  });
});

describe("validatePassword function", () => {
  test("should throw an error for a password that doesn't meet the requirements", () => {
    // Test with a password that doesn't meet the requirements
    const invalidPassword = "password123";
    expect(() => {
      validatePassword(invalidPassword);
    }).toThrow(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
    );
  });

  test("should not throw an error for a valid password", () => {
    // Test with a valid password
    const validPassword = "Password123";
    expect(() => {
      validatePassword(validPassword);
    }).not.toThrow();
  });
});

describe("validatePhoneNumber function", () => {
  test("should throw an error for a phone number that doesn't meet the requirements", () => {
    // Test with a phone number that doesn't meet the requirements
    const invalidPhoneNumber = "12345";
    expect(() => {
      validatePhoneNumber(invalidPhoneNumber);
    }).toThrow("Phone number must be 10 digits long");
  });

  test("should not throw an error for a valid phone number", () => {
    // Test with a valid phone number
    const validPhoneNumber = "1234567890";
    expect(() => {
      validatePhoneNumber(validPhoneNumber);
    }).not.toThrow();
  });
});
