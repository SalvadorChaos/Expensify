const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

// // // // // // // // // // // // // // // // // 

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should generate greeting from name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello Mike!');
});

test('should generate greeting for no name', () => {
 const result = generateGreeting();
 expect(result).toBe('Hello Anonymous!');
});
