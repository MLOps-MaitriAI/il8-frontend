import axios from "axios";

export default axios.create({
   baseURL: "https://il8rigour.com/",
  // baseURL: "http://il8rigour.com:8000/",
  // baseURL: "https://ilate.onrender.com/",
 // baseURL: "https://67c0-2405-201-37-21d9-e8eb-f867-53c1-67fd.ngrok-free.app/",
  // baseURL: "https://lms-5wr7.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
