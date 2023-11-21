const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: "https://ce8ede5abde54675bb13249907ae9fd1.us-central1.gcp.cloud.es.io:443",
  auth: {
    apiKey: "UkxzTTRZc0JOQVNUSmhaMmhBVUk6ZXRydWNNRjlRYzJ1bF9xdmZ4aUwtdw==",
  },
});

module.exports = client;
