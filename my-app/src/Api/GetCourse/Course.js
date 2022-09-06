import React, { Component } from 'react';

class Course extends Component {
  constructor(props){
    super(props);
    this.state={
      Get:[]
    }
  }

  componentDidMount(){
    fetch('http://192.168.1.2:7007/api/Account/GetCourse')
    .then(response=>response.json())
    .then(data=>this.setState({Get:data}))
  }
  render() {
    return (
      <div>
      {this.state.Get.map((item)=>(<p>{item.id}</p>))}
      </div>
    );
  }
}

export default Course;