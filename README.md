# Node.js API for Material Query Engine

This Node.js API is designed to interact with Elasticsearch and provide endpoints for uploading, fetching, and searching material data.

## Installation

### `npm install`

It installs all the necessary dependencies needed in the react app

### `nodemon server.js`
Starts the nodejs server


## Endpoints

### /uploadAllData

- **Method:** `POST`
- **Description:** Uploads the entire data from the `output.js` file to Elasticsearch.

### /getAllData

- **Method:** `GET`
- **Description:** Fetches the entire data from Elasticsearch, returning a list of fields for display in the explorer page of the React app.

### /getDetail/:id

- **Method:** `GET`
- **Description:** Fetches the detailed information for a specific material identified by the `id` parameter.

### /searchData/:query

- **Method:** `GET`
- **Description:** Searches the entire Elasticsearch index for the specified query in the fields "reference.bibtex," "magnetic_ordering," "pretty_formula," and "ID."

## Getting Started

### Prerequisites

- Node.js installed
"# material-explorer-backend" 
