import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployees: function(data) {
    if (!data) {
      return axios.get("/api/employee")
    } else {
      return axios.get("/api/employee?statusFilter=" + data.statusFilter + "&departmentFilter=" + data.departmentFilter);
    }
  },
  createEmployee: function(data) {
    return axios.post("/api/employee", data);
  },
  getEmployee: function(empID) {
    return axios.get("/api/employee/" + empID);
  },
  updateEmployee: function(empID, update) {
    return axios.put("/api/employee/" + empID, update)
  },
  deleteEmployee: function(empID) {
    return axios.delete("/api/employee/" + empID);
  },
  searchEmployees: function(query) {
    let params = {query}
    return axios.get("/api/employee/search", {params});
  },

};
