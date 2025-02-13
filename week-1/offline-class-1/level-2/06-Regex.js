function applyAllRegexOperations(input) {
    console.log("Original String:", input);
    console.log("\n");
  
    // Remove Extra Spaces (Keep Single Spaces)
    input = input.replace(/\s+/g, " ");
    console.log("1. After Removing Extra Spaces:", input);
    console.log("\n");
  
    // Remove Leading and Trailing Spaces
    input = input.replace(/^\s+|\s+$/g, "");
    console.log("2. After Removing Leading & Trailing Spaces:\n", input);
    console.log("\n");
  
    // Remove All Spaces
    let noSpaces = input.replace(/\s/g, "");
    console.log("3. After Removing All Spaces:", noSpaces);
    console.log("\n");
  
    // Match and Remove Digits
    let withoutNumbers = input.replace(/\d+/g, "");
    console.log("4. After Removing Numbers:", withoutNumbers);
    console.log("\n");
  
    // Extract Only Numbers
    let onlyNumbers = input.replace(/\D/g, "");
    console.log("5. Extracted Numbers:", onlyNumbers);
    console.log("\n");
  
    // Remove Special Characters (Keep letters, numbers, and spaces)
    let noSpecialChars = input.replace(/[^a-zA-Z0-9 ]/g, "");
    console.log("6. After Removing Special Characters:", noSpecialChars);
    console.log("\n");
  
    // Find All Words
    let words = input.match(/\b\w+\b/g);
    console.log("7. Extracted Words:", words);
    console.log("\n");
  
    // Validate an Email
    let isValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input);
    console.log("8. Is Valid Email:", isValidEmail);
    console.log("\n");
  
    // Extract Hashtags
    let hashtags = input.match(/#\w+/g);
    console.log("9. Extracted Hashtags:", hashtags);
    console.log("\n");
  
    // Find and Replace URLs
    let replacedURLs = input.replace(/https?:\/\/[^\s]+/g, "[LINK]");
    console.log("10. After Replacing URLs:", replacedURLs);
    console.log("\n");
  
    return {
      noSpaces,
      withoutNumbers,
      onlyNumbers,
      noSpecialChars,
      words,
      isValidEmail,
      hashtags,
      replacedURLs
    };
  }
  
  // Example usage:
  const testString = "  Hello   World! Visit https://example.com now. #coding #JavaScript 123 ";
  const result = applyAllRegexOperations(testString);
  console.log("Final Processed Data:", result);