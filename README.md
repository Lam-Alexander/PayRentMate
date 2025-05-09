# PayRentMate

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## 🧾 Commit Naming Convention

This project follows a standardized commit message format.  
**Please follow the types below when writing commits:**

### Allowed Commit Types

| Type       | Description                                       |
| ---------- | ------------------------------------------------- |
| `feat`     | A new feature                                     |
| `fix`      | A bug fix                                         |
| `style`    | Code formatting only (e.g., spacing, indentation) |
| `chore`    | Changes to tooling, configs, or dependencies      |
| `refactor` | Code changes that don't add features or fix bugs  |
| `docs`     | Documentation-only changes                        |
| `test`     | Adding or updating tests                          |
| `perf`     | Performance improvements                          |
| `ci`       | CI/CD pipeline or automation changes              |

### Example Commit Messages

feat: add responsive hamburger menu for mobile
fix: correct scroll behavior on navigation links
style: fix CSS spacing in header component

## 📝 Code Commenting Guidelines

To maintain code clarity and help future contributors understand the functionality, **all components** should be well-commented, explaining their purpose, features, and any important details. This helps anyone new to the project quickly grasp how the code works.

### Comment Format

Each component should have a **header comment** at the top, describing:

- What the component does
- Key elements or features inside the component
- Any styling or layout details that are important

**Example:**

```bash
/**
 * HeroSection component
 *
 * This component renders a hero section at the top of the page.
 * It includes:
 * - A headline describing the service.
 * - A short paragraph explaining the key benefits.
 * - A call-to-action button ("Get Started").
 * - A background image that complements the theme.
 *
 * The section is styled to overlay the text and button on top of the image
 */
```

### Why This Matters

- **Readability:** Clear, descriptive comments make it easier for anyone (including yourself) to jump into the project at any time and understand how a component works.
- **Maintainability:** As the project grows, well-commented code is easier to modify without breaking functionality.
- **Collaboration:** When multiple people are working on the project, consistent comments ensure that everyone is on the same page.

Please ensure that all new components follow this commenting style.
