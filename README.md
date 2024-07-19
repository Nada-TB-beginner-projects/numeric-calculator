# Numeric Calculator

A simple numeric calculator that allows the user to perform basic arithmetic operations through an interface that simulates a calculator device. This virtual calculator is built using HTML, CSS, and JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction

This project is a basic calculator that allows users to perform simple arithmetic operations such as addition, subtraction, multiplication, and division. The calculator is designed to look and function like a physical calculator.

## Demo

### Live Demo

Check out the live demo [here](https://nada-tb-beginner-projects.github.io/numeric-calculator/).

## Requirements

- A modern web browser (Chrome, Firefox, Edge, Safari)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nada-TB-beginner-projects/numeric-calculator.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd local-repo
   ```

3. **Open the `index.html` file in your web browser:**

   - You can do this by double-clicking the `index.html` file in your file explorer.
   - Alternatively, you can right-click the file and select "Open with" and choose your preferred web browser.

## Usage

Once the `index.html` file is opened in your browser:

1. **Perform Arithmetic Operations:**
   - Click the number buttons (0-9) to input numbers.
   - Use the operator buttons (+, -, *, /) to perform operations.
   - Click the "=" button to display the result.
   - Click the "C" button to clear the current input.

## Features

- Addition, subtraction, multiplication, and division operations.
- Clear input functionality.
- Responsive design that works on various screen sizes.

## Technologies Used

- HTML, CSS, JavaScript

## Project Structure

Outline of the project directory:

```plaintext
calculator/
├── index.html         # Main HTML file
├── style.css          # CSS styles
├── main.js            # JavaScript functionality
└── README.md          # Project documentation
```

## Challenges and Learnings

1. **Handling User Input**:
   - **Challenge**: Capturing and processing user input through the calculator interface.
   - **Solution**: Used event listeners to capture button clicks and perform calculations accordingly.

2. **Preventing Invalid Input**:
   - **Challenge**: Preventing users from entering invalid input directly into the display.
   - **Solution**: Disabled keyboard input for the display field to ensure only button clicks are processed.

3. **Implementing Arithmetic Logic**:
   - **Challenge**: Correctly implementing the logic for arithmetic operations.
   - **Solution**: Used the `eval()` function to evaluate the arithmetic expressions entered by the user.

## Future Improvements

- Add more advanced mathematical operations (e.g., square root, exponentiation).
- Implement a history feature to track previous calculations.
- Improve the UI/UX with animations and a more modern design.

## Contact

For any questions or feedback, you can reach me at:

- GitHub: [Nada-TB](https://github.com/Nada-TB)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
