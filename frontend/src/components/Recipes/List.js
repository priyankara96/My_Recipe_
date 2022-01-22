import React, { Component } from 'react';
import axios from 'axios';

// Shows details of all recipe...
 class List extends Component{
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}
componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}

onDelete=(id)=>{
  if (window.confirm('Are you sure?')) {
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Delete Successfully !");
    this.retrievePosts();
  })
}}



filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.RecipeName.includes(searchKey) || post.RecipeName.toLowerCase().includes(searchKey))
  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("posts").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}
render(){
    return (
      <div>
      <br/>
      <h1 className="text-center" > <font face = "Comic sans MS" size ="7" > Recipes </font> </h1>
      <div className = "row" >
        <div className = "col-lg-9 mt-2 mb-2" >
        &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success" variant = "primary"> <a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Recipe</a></button>
        
        </div > 
            
          <div className = "col-lg-3 mt-2 mb-2">
          <input className="form-control"
          type="search"
          placeholder="Search Recipe Name"
          namr="searchQuery"
          onChange={this.handleSearchArea}>
          </input> &nbsp;&nbsp;&nbsp;</div > </div>


      <div className="container">
      <div style = {{backgroundColor:'#FFFF',  margin:"0"}}>
      <table class="table table-bordered table-white" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Recipe Name</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.RecipeName}
                  </a>
                  </td>
                <td>{posts.ingredients}</td>
                <td>{posts.description}</td>
                <td>
                  {/* Edit button */}
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit&nbsp;&nbsp;&nbsp;
                  </a>
                  &nbsp;
                  {/* Delet button */}
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="fa fa-trash"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            )) }
        </tbody>
      </table>
      </div>
      <br/>
      
      </div></div>
    )
  }
}
export default List;
