const fs = require('fs');

test('components.json load', () => {
  const components = JSON.parse(fs.readFileSync('./components.json', 'utf8'));
  expect(components).toHaveProperty('components');
  expect(components.components.length).toBeGreaterThan(0);
});

test('Navbar component exists', () => {
  const components = JSON.parse(fs.readFileSync('./components.json', 'utf8'));
  const navbar = components.components.find(c => c.name === 'Navbar');
  expect(navbar).toBeDefined();
  expect(navbar.code).toHaveProperty('html');
});

test('Carousel component exists', () => {
  const components = JSON.parse(fs.readFileSync('./components.json', 'utf8'));
  const carousel = components.components.find(c => c.name === 'Carousel');
  expect(carousel).toBeDefined();
  expect(carousel.code).toHaveProperty('html');
});

// const { fireEvent, getByText } = require('@testing-library/dom');
// const path = require('path');

// test('Generated Code box updates when a component button is pressed', async () => {
//   // Load the HTML file into jsdom
//   const html = fs.readFileSync(path.resolve(__dirname, './generator.html'), 'utf8');
//   document.body.innerHTML = html;

//   // Mock the fetch API
//   global.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () =>
//         Promise.resolve({
//           components: [
//             { name: 'Navbar', code: { html: '<nav>Mock Navbar</nav>' } },
//           ],
//         }),
//     })
//   );

//   // Trigger DOMContentLoaded to attach event listeners
//   document.dispatchEvent(new Event('DOMContentLoaded'));

//   // Simulate button click
//   const navbarButton = getByText(document.body, 'Navbar');
//   fireEvent.click(navbarButton);

//   // Wait for the fetch and DOM update to complete
//   await new Promise(resolve => setTimeout(resolve, 100));

//   // Check if the Generated Code box content has changed
//   const generatedCode = document.getElementById('generatedCode');
//   expect(generatedCode.textContent).toBe('<nav>Mock Navbar</nav>');

//   // Clear the fetch mock
//   global.fetch.mockClear();
// });