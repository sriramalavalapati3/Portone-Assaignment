# Stripe Integrated Backend

This project provides a backend for integrating with Stripe to handle payment intents, capturing payments, and creating refunds. It is built using Node.js, Express.js, and follows the MVC architecture. The project also includes Docker support for containerization.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 18.12.1 or later)
- npm (version 6.14.15 or later)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/stripe-integrated-backend.git
    cd stripe-integrated-backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:

    ```env
    STRIPE_SECRET_KEY=your_stripe_secret_key
    PORT=8080
    ```

4. Start the application:

    ```sh
    npm start
    ```

The server will start on port 8080 (or the port specified in your `.env` file).

## API Endpoints

### Create Payment Intent

- **Endpoint:** `POST /api/v1/create_intent`
- **Description:** Creates a new payment intent.
- **Request Body:**
  ```json
  {
    "amount": 1000,
    "currency": "usd"
  }
