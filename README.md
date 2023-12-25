# Card Status API

This Node.js API provides card status information based on user phone number or card ID. MongoDB is used as the database to store and retrieve card status data.

## Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (make sure your MongoDB server is running)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git

2.1 **Install dependencies:**

    
    cd Card-Status-API
    npm install

2.2 **Create a .env file:**

Create a .env file in the project root and define the following environment variables:

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/cardStatusDB

2.3 **Run the server:**

    npm start
The server will be running at http://localhost:3000


## Loading Data
    
Place your CSV files containing card status information in the data folder. The server will automatically load the data into the MongoDB database on startup.

## API Endpoints

### Get Card Status

- Endpoint: /get_card_status
- Method: GET
- Query Parameters:
    - phoneNumber: User's phone number
    - cardId: Card ID
- Response:
    - Success: Status of the card
    - Error 404: If the card is not found
    - Error 500: Internal server error

    Example:
        
        curl "http://localhost:3000/get_card_status?phoneNumber=123456789"
