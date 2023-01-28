// import React , {useState , useEffect} from 'react'
// import { useLocation } from 'react-router-dom';
// const Dargah = () => {
//     const { state } = useLocation();
//     const [Page , SetPage]=useState([state.Token.token]);
//     const [Pages , SetPages]=useState();
//     useEffect(() => {
//       const getDAta = async () => {
//         const response = await fetch(`https://fcp.shaparak.ir/_ipgw_/payment/?token=${Page}&lang=fa`)
//         const data = await response.json();
//         console.log(data);
//         SetPages(data)
//       };
//       getDAta();
//     }, []);
//     console.log(Pages);
//   return (
//     <div className=''>
//     {document.body.innerHTML=Pages}
//     </div>
//   )
// }
// export default Dargah