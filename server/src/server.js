const http = require("http");
const app = require("./app");
const { loadParentTransactions } = require("./models/parent.model");
const { loadChildTransactions } = require("./models/child.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await loadParentTransactions();
    await loadChildTransactions();

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();