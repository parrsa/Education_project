import React, { Component } from 'react';
import Cards from './card';
import logo from '../../image/icons8-course-32.png'

class cards extends Component {
    constructor(props){
        super(props);
        this.state={
        SendGet:[]
        }
      }
      componentDidMount(){
        fetch('http://192.168.1.2:7007/api/Account/GetCourse')
        .then(response=>response.json())
        .then(data=>this.setState({SendGet:data}))
      }
    render() {
        return (
          <div dir='rtl' className='w-full h-fit'> 
          <div className='w-full flex justify-between items-center  h-24'>
          <h1 className='font-bold text-xl relative mr-28'>
          <img alt='logo'className='absolute -right-8'src={logo} />
          دوره های Rebin
          </h1>
          </div>
          <div className='flex justify-between mr-20   '>
          <div className='grid grid-cols-4 sm:grid-cols-1  sm:gap-8 gap-6'>
          {this.state.SendGet.map((item)=>(<Cards name={item.name} image={item.img} price={item.price} courseLevel={item.courseLevel} courseStatus={item.courseStatus}  />))}
          </div>
          </div>
          </div>
        );
    }
}
export default cards;


      