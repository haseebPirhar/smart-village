# My Node.js TypeScript Project

This project is a Node.js application built with TypeScript, featuring a MongoDB connection and a complete authentication system. It includes configurations for SendGrid and AWS S3 for email and file storage, respectively.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
  ```
  git clone <repository-url>
  cd store-be
  ```

2. Install dependencies:
  ```
  npm install
  ```

3. Create a `.env` file in the root directory and add your configuration variables (see [Configuration](#configuration) for details).

## Configuration

The following environment variables are required in the `.env` file:

```
DB_URI=<your_mongodb_connection_string>
SENDGRID_API_KEY=<your_sendgrid_api_key>
AWS_ACCESS_KEY_ID=<your_aws_access_key_id>
AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>
AWS_REGION=<your_aws_region>
S3_BUCKET_NAME=<your_s3_bucket_name>
PORT=3004
```

## Running the Application

To start the server, run:

```
npm run start
```

The server will run on `http://localhost:3006`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user
  - `POST /api/auth/forgot-password-otp` - Send password reset OTP
  - `POST /api/auth/validate-otp` - Validate OTP
  - `POST /api/auth/reset-password` - Reset password

- **User**
  - `GET /api/users/profile` - Get user profile
  - `PUT /api/users/profile` - Update user information
  - `PUT /api/users/change-password` - Change user password
  - `DELETE /api/users/profile` - Delete user profile
  - `GET /api/users/:id` - Get user information by ID

- **Prays**
  - `GET /api/prays` - Get all prays
  - `POST /api/prays` - Create a new pray
  - `PUT /api/prays/:id` - Update pray information
  - `DELETE /api/prays/:id` - Delete a pray

## License

This project is licensed under the Teilim License.