import React , {useState} from 'react'
import { useLocation } from 'react-router-dom';
const Dargah = () => {
    const { state } = useLocation();
    const [Page , SetPage]=useState([state.data]);
  return (
    <div className='bg-red-500 w-full font-KALAMEHBOLD h-screen'>
    {document.body.innerHTML = Page }
    </div>
  )
}

export default Dargah