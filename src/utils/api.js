import axios from "axios";


// Export an object with a "search" method that searches the Randomuser API for the passed query
export default {

  getEmployee: function() {
    
    return axios.get("https://randomuser.me/api/?results=200");
  },

};
