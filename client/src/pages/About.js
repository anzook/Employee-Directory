import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class About extends Component {
  state = {
    sort: "name",
    statusFilter: "",
    departmentFilter: "",
    results: []
  };

  componentDidMount() {
    let params = {
      statusFilter: this.state.statusFilter,
      departmentFilter: this.state.departmentFilter
    }
    API.getEmployees(params)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log("Searched: ", this.state, "res: ", res.data);
        this.setState({ results: res.data, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  handleSortChange = event => {
    this.setState({ sort: event.target.value });
  };

  handleStatusFilterChange = event => {
    this.setState({ statusFilter: event.target.value });
  };

  handleDepartmentFilterChange = event => {
    this.setState({ departmentFilter: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let params = {
      statusFilter: this.state.statusFilter,
      departmentFilter: this.state.departmentFilter
    }
    API.getEmployees(params)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log("Searched: ", this.state, "res: ", res.data);
        this.setState({ results: res.data, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://storage.needpix.com/rsynced_images/employees-1704059_1280.jpg">
          <h2>Employee Roster</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h3>An easy to use GUI for viewing employee information</h3>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                This simple application enables you to easily view the employee
                roster. Click the search tab to begin.
              </p>
              <p>
                Created using React with a Sequelize backend, this is a demo of
                a basic interactive application.
              </p>

              <div className="search">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text">
                      Department:
                    </label>
                  </div>
                  <select className="custom-select" id="deptDropdown" onChange={this.handleDepartmentFilterChange} value={this.state.departmentFilter}>
                  <option value="">Any</option>
                    <option value="management">Management</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="engineering">Engineering</option>
                    <option value="customer service">Customer Service</option>
                    <option value="internal services">Internal Services</option>
                  </select>
                  <div className="input-group-prepend">
                    <label className="input-group-text">
                      Status:
                    </label>
                  </div>
                  <select className="custom-select" id="statusDropdown" onChange={this.handleStatusFilterChange} value={this.state.statusFilter}>
                  <option value="">Any</option>
                    <option value="permanent">Permanent</option>
                    <option value="intern">Intern</option>
                    <option value="contract">Contract</option>
                    <option value="temporary">Temporary</option>
                  </select>
                  <div className="input-group-append">
    <label className="input-group-text" >Sort by:</label>
  </div>
                  <div className="input-group-append">
                  <div
                  id="sortRadioBtns"
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                  onClick={this.handleSortChange}
                >
                  <button className="btn btn-outline-secondary"
                    data-toggle="button"
                      type="radio"
                      name="sort"
                      id="name"
                      value="name"
                      checked
                    >
                    Name
                  </button>
                  <button className="btn btn-outline-secondary"
                    data-toggle="button"
                      type="radio"
                      name="sort"
                      id="department"
                      value="department"
                    >
                    Department
                  </button>
                  <button className="btn btn-outline-secondary"
                    data-toggle="button"
                      type="radio"
                      name="sort"
                      id="status"
                      value="status">
                    Status
                  </button>
                </div>
              </div>
                </div>
                <div className="row justify-content-end">
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="btn btn-success"
                >
                  Show Employees
                </button>
                </div>
                <hr/>
              </div>

              <SearchResults results={this.state.results} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
