# Perago Information System

## Overview
The Perago Information System is a Single Page Application (SPA) designed to register and manage an organization's employee hierarchy. The application allows users to create, view, update, and delete employee positions in a tree structure, reflecting the hierarchical relationships within the organization.

## Features
- **Hierarchical Position Management**: Create and manage employee positions with parent-child relationships.
- **Tree View Display**: List positions in a tree format, allowing for unlimited nesting.
- **CRUD Operations**: Click on a position to update or delete it.
- **Interactive UI**: Built with a focus on user experience and interface design.
- **Form Validation**: Utilizes React Hook Form for form handling and validation.

## Tech Stack
- **Frontend Framework**: React
- **UI Component Library**: Mantine
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Requests**: Axios
- **Form Handling**: React Hook Form
- **Mock API**: Firebase Database REST API or Mockoon
- **Utility Library**: Lodash (optional)
- **Next.js**: Not installed but can be integrated if needed.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/perago-information-system.git
   cd perago-information-system
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage
- **Creating Positions**: Use the form to add new employee positions. Ensure to define the parent position if applicable.
- **Viewing Positions**: The positions will be displayed in a tree structure. Click on any position to view details.
- **Updating/Deleting Positions**: Click on a position to access options for updating or deleting it.

## Employee Position Hierarchy

The following is an example of the employee position hierarchy represented in a tree structure:

```
CEO
├── CTO
│   └── Project Manager
│       └── Product Owner
│           ├── Tech Lead
│           │   ├── Frontend Developer
│           │   ├── Backend Developer
│           │   ├── DevOps Engineer
│           │   └── ...
│           ├── QA Engineer
│           ├── Scrum Master
│           └── ...
├── CFO
│   ├── Chief Accountant
│   │   ├── Financial Analyst
│   │   └── Accounts Payable
│   └── Internal Audit
├── COO
│   ├── Product Manager
│   ├── Operation Manager
│   ├── Customer Relations
│   └── ...
└── HR
```

## API Integration
The application uses Firebase Database REST API or Mockoon for managing data. Ensure the API endpoints are correctly configured in the application.

## Form Handling
The application utilizes React Hook Form for managing form state and validation.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Mantine](https://mantine.dev/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Axios](https://axios-http.com/) - Promise-based HTTP client
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Lodash](https://lodash.com/) - Utility library
