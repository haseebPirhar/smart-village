# Smart Village Project

This project is a Node.js application built with TypeScript, featuring a MongoDB connection and a complete authentication system. It includes configurations for SendGrid and AWS S3 for email and file storage, respectively.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
git clone <repository-url> cd smart-village

2. Install dependencies:
npm install

3. Create a `.env` file in the root directory and add your configuration variables (see [Configuration](#configuration) for details).

## Configuration

The following environment variables are required in the `.env` file:

DB_URI=<your_mongodb_connection_string> SENDGRID_API_KEY=<your_sendgrid_api_key> AWS_ACCESS_KEY_ID=<your_aws_access_key_id> AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key> AWS_REGION=<your_aws_region> S3_BUCKET_NAME=<your_s3_bucket_name> PORT=3000


## Running the Application

To start the server, run:
npm run start


The server will run on `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user
  - `POST /api/auth/logout` - Log out the current user

- **Complaints**
  - `POST /api/complaints` - Create a new complaint
  - `GET /api/complaints` - Get all complaints
  - `PUT /api/complaints/:id` - Update complaint status
  - `DELETE /api/complaints/:id` - Delete a complaint

- **Agriculture**
  - `GET /api/agriculture` - Get agriculture data
  - `GET /api/agriculture/farming` - Get farming techniques

- **Health**
  - `GET /api/health` - Get health tips

- **Jobs**
  - `GET /api/job` - Get job listings

- **News**
  - `GET /api/news` - Get news articles

- **Weather**
  - `GET /api/weather` - Get weather updates

## License

This project is licensed under the Smart Village License.