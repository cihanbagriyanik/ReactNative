import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer eVyA-Er9oAhZchL6W_kZqgMhMblIsBICVBBBph93toh6dhd7qObGHYNvjUfop3aDOTbFEzDor0NE9-zj_CBzs-4OUWrtcSSdur3ZyAqyChAGBcBdu0PVjcgVdL8ZZnYx",
  },
});
