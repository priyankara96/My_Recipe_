import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  //retriew data of specific form
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {RecipeName, ingredients, description} = this.state.post;
      return(
        <div><br/>
          <h1>{RecipeName}</h1>
          <hr/>
          <dl className="row">
            <dt className="col-sm-3">Ingredients</dt>
            <dd className="col-sm-9">{ingredients}</dd>
            <dt className="col-sm-3">Description</dt>
            <dd className="col-sm-9">{description}</dd>
          </dl>
          <br/>
            <img src="https://www.pngmart.com/files/16/Chef-Vector-PNG-Clipart.png" width="20%" height="20%" />
          
        </div>
        
      )
    }
  }
  export default PostDetails;