# Library Management System API

## Project Name & Description
The Library Management System API is designed to help library staff and members manage books, memberships, and borrowing activities. It provides CRUD operations for books, members, and borrow records, with additional endpoints for borrowing and returning books. UUIDs are used for unique identification in all tables.

## Live URL
[Link to the live deployment of your backend]

## Technology Stack & Packages
- **Prisma ORM**: For database schema and interactions
- **Node.js**: JavaScript runtime
- **PostgreSQL**: Database
- **Express.js**: Web framework for Node.js
- **TypeScript**: Typed JavaScript

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd [repository-folder]
   ```
2. **Install dependencies**:
   ```bash
    npm install
   ```
3. **Set up the environment variables**:
  - Create a .env file in the project root.
  - Add the following variables
    ```bash
      DATABASE_URL=your_postgresql_connection_string
      PORT=your_preferred_port
    ```
4. **Initialize the database**:
   ```bash
    npx prisma migrate dev --name init
   ```
5. **Start the server**:
   ```bash
    npm run dev
   ```


## Key Features & Functionality

### 1. Book Management
- **Create**: Add new books to the library.
- **Read**: Retrieve all books or specific books by ID.
- **Update**: Modify book details.
- **Delete**: Remove books from the library.

### 2. Member Management
- **Create**: Register new library members.
- **Read**: List all members or fetch details of a specific member by ID.
- **Update**: Edit member details.
- **Delete**: Remove members from the library.

### 3. Borrow & Return System
- **Borrow Books**: Allow members to borrow available books.
- **Return Books**: Track and update returned books.
- **Overdue Tracking**: Monitor overdue books and provide borrower details.

### 4. Error Handling