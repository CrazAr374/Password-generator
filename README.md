# Password Generator App

A simple and customizable password generator built using React. This app allows users to generate secure passwords based on selected criteria, such as uppercase letters, lowercase letters, numbers, and symbols.

## Features

- **Customizable Options**: Select which characters to include in the generated password: uppercase letters, lowercase letters, numbers, and symbols.
- **Password Length**: Adjust the password length between 10 to 20 characters.
- **Copy to Clipboard**: Easily copy the generated password with a single click.
- **Randomized Passwords**: Generates a random password each time based on the selected criteria.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/password-generator.git
   cd password-generator
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the app**:
   ```bash
   npm start
   ```

4. The app will be available at `http://localhost:3000`.

## Usage

1. Open the app in your browser.
2. Choose the password criteria by selecting from:
   - Uppercase letters
   - Lowercase letters
   - Numbers
   - Symbols
3. Set the password length (minimum 10 characters, maximum 20).
4. Click **Generate Password** to create a new password.
5. Copy the password by clicking the **Copy Code** button.

## Screenshots

### Password Generator Interface

![Password Generator Screenshot](https://via.placeholder.com/400)

## Components

### `App.js`
- Contains the main logic for password generation and user interface.

### `header.js`
- A simple navigation bar component for the app.

### `var.js`
- Contains the character sets used in the password generator, such as uppercase, lowercase letters, numbers, and symbols.

### `App.css`
- Styles for the app.

## Character Sets (`var.js`)

- **Uppercase Letters** (`UC`): A-Z
- **Lowercase Letters** (`LC`): a-z
- **Numbers** (`NC`): 0-9
- **Symbols** (`SC`): !@#$%^&*()_+ etc.

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
