// Import the crypto module for hashing
const crypto = require("crypto");

// ============== Base64 Functions ==================

// Function to encode text using Base64
const encodeBase64 = async (text) => {
  try {
    const buffer = Buffer.from(text, "utf-8");
    const base64Encoded = buffer.toString("base64");
    return base64Encoded;
  } catch (err) {
    console.log("Error encoding to Base64:", err.message);
  }
};

// Function to decode Base64 string back to normal text
const decodeBase64 = async (base64Text) => {
  try {
    const buffer = Buffer.from(base64Text, "base64");
    const decodedText = buffer.toString("utf-8");
    return decodedText;
  } catch (err) {
    console.log("Error decoding Base64:", err.message);
  }
};

// Function to compare a password with stored Base64 value
const compareBase64 = async (inputPassword, storedBase64) => {
  try {
    const decoded = await decodeBase64(storedBase64);
    return inputPassword === decoded;
  } catch (err) {
    console.log("Base64 comparison error:", err.message);
    return false;
  }
};

// ============== MD5 Functions ==================

// Function to hash password using MD5
const hashMD5 = async (text) => {
  try {
    const hash = crypto.createHash("md5");
    hash.update(text);
    const hashedText = hash.digest("hex");
    return hashedText;
  } catch (err) {
    console.log("Error hashing with MD5:", err.message);
  }
};

// Function to compare a password with stored MD5 hash
const compareMD5 = async (inputPassword, storedMD5) => {
  try {
    const hashedInput = await hashMD5(inputPassword);
    return hashedInput === storedMD5;
  } catch (err) {
    console.log("MD5 comparison error:", err.message);
    return false;
  }
};

// ============== Testing Both Methods ==================

const runTests = async () => {
  const password = "helloWorld123";

  // Test Base64
  const encodedBase64 = await encodeBase64(password);
  console.log("Base64 Encoded Password:", encodedBase64);

  const base64Check = await compareBase64("helloWorld123", encodedBase64);
  console.log(base64Check ? "Base64 Match " : "Base64 Match ");

  // Test MD5
  const md5Hashed = await hashMD5(password);
  console.log("MD5 Hashed Password:", md5Hashed);

  const md5Check = await compareMD5("helloWorld123", md5Hashed);
  console.log(md5Check ? "MD5 Match " : "MD5 Match ");
};

// Run the tests
runTests();
