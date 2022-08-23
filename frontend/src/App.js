import Table from "./Table";
// import {Users} from './data'
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {

  const [Users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get(`http://localhost:8000/?q=${query}`);
      setUsers(response.data.data);
    }
    fetchData();
  }, [query])
 
  return (
    <div className="">
      <h1 className="w-full h-auto flex items-center justify-center 
        mt-10 text-orange-400 text-5xl">
          Search Your Favorite Friend !! 
      </h1>
      <br />
      <div className="w-full h-auto flex items-center justify-center">
        <input type="text"
               className="w-[50%] h-auto p-6 placeholder:text-gray-400 text-xl mt-4 "
               placeholder="Enter name to search ..."
               value={query}
               onChange={(e)=>setQuery(e.target.value)}
         />
      </div>
      <br />
      <Table Users={Users} />
    </div>
  );
}

export default App;
