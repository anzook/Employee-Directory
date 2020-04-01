import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Alert from "../components/Alert";
import './style.css'

class Edit extends Component {
  state = {
    search: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "permanent",
    office: "",
    title: "",
    department: "management",
    verify: false,
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {}

  handleChange = event => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleCheckbox = event => {
    if (!this.state.verify) {
      this.setState({ verify: true})
    } else {
      this.setState({ verify: false})
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.phone && this.state.status && this.state.title && this.state.department) {
      if (this.state.verify){
        API.createEmployee({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phone: this.state.phone,
          status: this.state.status,
          office: this.state.office,
          title: this.state.title,
          department: this.state.department
        })
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      } else {
        this.setState({ error: "Please check box to verify information before submitting." })
      }

    } else {
      this.setState({ error: "Please enter all fields before submitting." })
    }

    
  };


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Edit Employee Roster</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <form id="new-emp-form">
  <div className="form-row ">
    <div className="form-group col-md-6">
      <label >First name</label>
      <input onChange={this.handleChange} value={this.state.firstName} type="text" className="form-control" name="firstName" placeholder="First name" />
    </div>
    <div className="form-group col-md-6">
      <label >Last name</label>
      <input onChange={this.handleChange} value={this.state.lastName} type="text" className="form-control" name="lastName" placeholder="Last name" />
    </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
      <label >Email</label>
      <input onChange={this.handleChange} value={this.state.email} type="email" className="form-control" name="email" placeholder="ex: FLast@biz.com" />
    </div>
    <div className="form-group col-md-6">
      <label >Phone</label>
      <input onChange={this.handleChange} value={this.state.phone} type="texy" className="form-control" name="phone" placeholder="ex: 123-456-7890" />
    </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
      <label >Title</label>
      <input onChange={this.handleChange} value={this.state.title} type="text" className="form-control" name="title" placeholder="ex: Sales associate" />
    </div>
    <div className="form-group col-md-6">
    <label >Status select</label>
    <select onChange={this.handleChange} value={this.state.status} className="form-control" name="status">
    <option value="permanent">Permanent</option>
                    <option value="intern">Intern</option>
                    <option value="contract">Contract</option>
                    <option value="temporary">Temporary</option>
    </select>
    </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
  <label >Department select</label>
    <select onChange={this.handleChange} value={this.state.department} className="form-control" name="department">
    <option value="management">Management</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="engineering">Engineering</option>
                    <option value="customer service">Customer Service</option>
                    <option value="internal services">Internal Services</option>
    </select>
    </div>
    <div className="form-group col-md-6">
      <label >Office</label>
      <input onChange={this.handleChange} value={this.state.office} type="text" className="form-control" name="office" placeholder="ex: 234A" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input onClick={this.handleCheckbox} className="form-check-input" type="checkbox" name="gridCheck" />
      <label className="form-check-label" >
        This info is correct
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Enter employee</button>
</form>
< hr />
        </Container>
      </div>
    );
  }
}

export default Edit;
