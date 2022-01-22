import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Creating a new recipe...

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      RecipeName:"",
      ingredients:"",
      description:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {RecipeName,ingredients,description} = this.state;

    const data ={
      RecipeName:RecipeName,
      ingredients:ingredients,
      description:description
    }

    console.log(data)

    // Validation 
    if(RecipeName.length === 0 || ingredients.length === 0 || description.length === 0 ){
      swal(" Fields Cannot empty !","Please Enter all the data !", "error");
    }else if(RecipeName.length < 4 ){
      swal("Invalid Recipe Name !", "Length shuld be greater than 4 !", "error");
    }else if(ingredients.length < 4 ){
      swal("Invalid Ingredients !", "Length shuld be greater than 4 !", "error");
    }else if(description.length < 4 ){
      swal("Invalid Description !", "Length shuld be greater than 4 !", "error");
    }
    else{

    axios.post("/post/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            RecipeName:"",
            ingredients:"",
            description:""
          }
        )
      }
    });
    swal({
      text: "Recipe Successfully Added",
      icon: "success",
      button: "Okay!"
  })
  .then((value) => {
      window.location = '/List';
  });}
  }

  render() {
    return (
      
      <div> <br/><br/>
            <div class="row">
            <div class="col-6">
            <br/><br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="https://cdn.dribbble.com/users/2073082/screenshots/4352562/chef.gif" width="70%" height="70%" />
            </div>

            <div class="col-6" >
            <div class="myformstyle">
            <div className="card-body" style = {{backgroundColor:'#deedd5',  margin:"0"}}> 
            <div className="col-md-8 mt-4 mx-auto"> 
            </div>
            <h3 className="text-center" > <font face = "Comic sans MS" size ="6" class="text-danger" > Create New Recipe </font> </h3> 
            <form onSubmit = { this.onSubmit } ></form>

        <div className="col-md-11 mt-4 mx-auto">
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Recipe Name</label>
              <input type="text"
              className="form-control"
              name="RecipeName"
              placeholder="Enter Recipe Name"
              value={this.state.RecipeName}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Ingredients</label>
              <textarea name="paragraph_text" cols="70" rows="3"
              className="form-control"
              name="ingredients"
              placeholder="Enter Ingredients"
              value={this.state.ingredients}
              onChange={this.handleInputChange}></textarea>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Description</label>
              <textarea name="paragraph_text" cols="70" rows="5"
              className="form-control"
              name="description"
              placeholder="Enter Post Description"
              value={this.state.description}
              onChange={this.handleInputChange}></textarea>
            </div>

            

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>&nbsp;
            <a href="/List"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
          
          
          </form>
        </div>
        </div></div></div></div></div>
    )
  }
}