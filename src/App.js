import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [product, setproduct] = useState([])
useEffect(() => {
  axios.get('http://localhost:5082/api/Brand').then((display)=>{
 
  console.log(display) 
setproduct(display.data)
})
}, [])


return (
  <div>
    <h1>Hello</h1>
      {product.map((display1)=>{
          return(

            <h1>{display1.name}</h1>
  
          )})}
  </div>
)
}
























// function App() {
  
// const [users,setUsers]=useState([])
// useEffect(()=>{
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then((result)=>
// {
//   setUsers(result);
// });
// },[]);

//   return (
//     <div className="App">
//     <h1>Users List</h1>
//     <ul>
// {users.map(user=>(
//   <li>{user.title}</li>
// ))}
// </ul>
//     </div>
//   );
//  }

export default App;
