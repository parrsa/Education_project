import React,{useState , useEffect} from 'react'
import { Link, useLocation, useNavigate, Routes, Route} from 'react';
const Api = (url) => {
  const [item, SetItems] = useState([]);
  const [search, setSearch] = useState("");
//   const location = useLocation();
    
  useEffect(() => {
    const getDAta = async () => {
      const response = await fetch(url
        // "http://192.168.1.2:7007/api/Account/GetCourses"
        // "http://176.65.252.189:7007/api/Account/GetCourses"
);
      const data = await response.json();
      SetItems(data)
      // console.log(SetItems)
      // console.log(location);
    //   setSearch(location.state.SearchValue)
      // console.log(data[0]);
      if (response.status === 200) {
        // console.log("object");
      } else if (response.status === 403) {
        console.log("first")
      } else {
        console.log("1");
      }
    };
    getDAta()
  }, []);
  return {item , search}
}

export default Api