# JavaScript Calculator

A fully functional calculator built with HTML, CSS, and vanilla JavaScript. This project implements a simple yet powerful calculator with a clean user interface and advanced features.

## Author
Tran Quang Kien
- GitHub: [@QKData](https://github.com/QKData)

## Project Attribution
This project was created as part of [The Odin Project](https://www.theodinproject.com) curriculum, specifically the [Calculator project](https://www.theodinproject.com/lessons/foundations-calculator) in the Foundations course. The Odin Project provides a high quality web development education maintained by an open source community.

## Features

### Basic Operations
- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)
- Positive/Negative toggle (±)

### Special Features
- 9-digit input limit
- Decimal point support
- Backspace functionality
- Clear (C) button
- Error handling for division by zero
- Keyboard support

## Technical Details

### Input Restrictions
- Maximum 9-digit input
- Prevents input after reaching digit limit

### Error Handling
- Division by zero shows error message
- Invalid operations are prevented
- Clear button resets all states

### Keyboard Shortcuts
- Numbers: 0-9 keys
- Operators: +, -, *, /
- Equals: Enter or =
- Clear: Escape
- Backspace: Backspace key
- Decimal: . key

## Usage

### Setup
1. Clone the repository or download the files
2. Open `index.html` in a web browser
3. No additional setup or dependencies required

### Basic Usage
1. Enter numbers using the number pad
2. Select an operation (+, -, ×, ÷)
3. Enter the second number
4. Press equals (=) to see the result
5. Use C to clear and start over

### Advanced Features
- Use ± to toggle between positive and negative numbers
- Press backspace to delete the last digit
- Use the decimal point for non-whole numbers
- Chain multiple operations together

## Code Structure

### HTML
- Responsive layout using CSS Grid
- Clear visual hierarchy
- Semantic button structure

### CSS
- Modern, clean design
- Responsive layout
- Visual feedback on button interactions
- Disabled state styling

### JavaScript
- Modular function structure
- Clear state management
- Event handling for both clicks and keyboard input
- Input validation and error handling

## Browser Support
- Chrome
- Firefox
- Safari
- Edge

## Future Improvements
- Add memory functions (M+, M-, MR, MC)
- Implement percentage calculations
- Add history of calculations
- Add keyboard shortcuts for additional functions

## Contributing
Feel free to fork this project and submit pull requests for any improvements.

## License
This project is open source and available under the MIT License.