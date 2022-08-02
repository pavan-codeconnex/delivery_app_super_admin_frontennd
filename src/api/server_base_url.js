import axios from "axios";

export default axios.create({
  
  // baseURL:"http://localhost:5005/app"

  // from inside
  baseURL:"http://172.16.1.69:5000/app"

});