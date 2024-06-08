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
    git clone https://github.com/sriramalavalapati3/Portone-Assaignment.git
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
  },

  ** Response
  {
  "id": "pi_1Hh1XYZ",
  "object": "payment_intent",
  "amount": 1000,
  "currency": "usd",
  "status": "requires_payment_method"
  }


### Capture Payment Intent
- **Endpoint:** `POST /api/v1/capture_intent/:id`
- **Description**: Captures an existing payment intent.
- **Path Parameters:**
    id: The ID of the payment intent to capture.

**Response**
{
  "id": "pi_1Hh1XYZ",
  "object": "payment_intent",
  "amount": 1000,
  "currency": "usd",
  "status": "succeeded"
}

### Create Refund
- **Endpoint:** `POST /api/v1/create_refund/:id`
- **Description:** Creates a refund for a payment intent.
- **Path Parameters:**
    id: The ID of the payment intent to refund.

**Response**
{
  "id": "re_1Hh1ABC",
  "object": "refund",
  "amount": 1000,
  "currency": "usd",
  "status": "succeeded"
}

### Get Payment Intents
- **Endpoint:** `GET /api/v1/get_intents`
- **Description:** Retrieves all payment intents.
- **Response**
[
  {
    "id": "pi_1Hh1XYZ",
    "object": "payment_intent",
    "amount": 1000,
    "currency": "usd",
    "status": "succeeded"
  },
  {
    "id": "pi_1Hh2XYZ",
    "object": "payment_intent",
    "amount": 2000,
    "currency": "usd",
    "status": "requires_capture"
  }
]

### Postman Documentation

You can find the Postman documentation for testing the API [here](https://documenter.getpostman.com/view/24325307/2sA3XJm4vP).

### License
## This project is licensed under the MIT License.

