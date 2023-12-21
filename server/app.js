const express = require("express");
const app = express();
const PORT = 7001;

const restaurantData = {
  name: "Restaurant Name",
  address: "123 Main Street, City",
  phone: "(555) 123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ultricies tellus, eget efficitur nunc euismod vitae.",
};

app.get("/api/restaurant", (req, res) => {
  res.json(restaurantData);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
