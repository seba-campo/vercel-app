# E-commerce API

This is a Next.js project that provides a backend API for an e-commerce platform.

## Features

*   User authentication with email and tokens.
*   Product search and retrieval.
*   Order creation and management.
*   Integration with MercadoPago for payments.
*   Integration with Algolia for product search.
*   Integration with SendGrid for sending emails.

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for server-rendered applications.
*   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
*   [Firebase](https://firebase.google.com/) - Used as the database (Firestore).
*   [Algolia](https://www.algolia.com/) - Search as a service.
*   [MercadoPago](https://www.mercadopago.com/) - Payment gateway.
*   [SendGrid](https://sendgrid.com/) - Email delivery service.
*   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For creating and verifying JSON Web Tokens.

## API Endpoints

### Authentication

*   `POST /api/auth` - Creates an authentication record for a user and sends a token to their email.
    *   **Body**: `{ "email": "user@example.com" }`
*   `POST /api/auth/token` - Authenticates a user with their email and token, returning a JWT.
    *   **Body**: `{ "email": "user@example.com", "token": 12345678 }`

### User

*   `GET /api/me` - Retrieves the authenticated user's data.
    *   **Headers**: `Authorization: Bearer <JWT>`
*   `GET /api/me/orders` - Retrieves the authenticated user's orders.
    *   **Query Params**: `userId=<USER_ID>`

### Products

*   `GET /api/products` - Searches for products.
    *   **Query Params**: `q=<query>`, `limit=<number>`, `offset=<number>`
*   `GET /api/products/[id]` - Retrieves a specific product by its ID.

### Order

*   `POST /api/order` - Creates a new order for a product.
    *   **Query Params**: `productId=<PRODUCT_ID>`
*   `GET /api/order/[id]` - Retrieves a specific order by its ID.

### Webhooks

*   `POST /api/ipn/mercadopago` - Webhook for receiving payment notifications from MercadoPago.

### Sync

*   `POST /api/sync` - Synchronizes product data from Firestore to Algolia.

## Getting Started

### Prerequisites

*   Node.js
*   Yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies:
    ```bash
    yarn install
    ```
3.  Set up environment variables by creating a `.env.local` file in the root of the project. See the "Environment Variables" section for more details.

4.  Run the development server:
    ```bash
    yarn dev
    ```

The API will be available at `http://localhost:3000`.

## Environment Variables

The following environment variables are required to run the application. Create a `.env.local` file in the root of the project and add the following variables:

```
# Firebase
TYPE=
PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY=
CLIENT_EMAIL=
CLIENT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_PROVIDER_X509_CERT_URL=
CLIENT_X509_CERT_URL=
UNIVERSE_DOMAIN=

# Algolia
ALGOLIA_APP_ID=
ALGOLIA_API_KEY=

# MercadoPago
MP_TOKEN=

# SendGrid
SENDGRID_API_KEY=
SENDGRID_EMAIL_SENDER=

# JWT
JWT_SECRET_KEY=

# Vercel
VERCEL_URL=
```
