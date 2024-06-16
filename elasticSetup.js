const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: "https://179b553aee7541cb8a5cb02f44975316.us-central1.gcp.cloud.es.io:443",
  auth: {
    apiKey: "U0N2TElaQUJpYzdwTUpOY3FHbGY6V0lIVElkb1pSZ3VGMFlKbHlmZGRHZw==",
  },
});

module.exports = client;
