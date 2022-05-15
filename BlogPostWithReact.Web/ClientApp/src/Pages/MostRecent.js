import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {  useHistory } from 'react-router-dom';


const MostRecent = () => {
   
   
    const [id, setId] = useState('');
    const history = useHistory();

    useEffect(() => {
        const getMostRecent=async()=>{
            const {data}=await axios.get('/api/blogposts/getMostRecent');
            setId(data);
            console.log(data);
            console.log(id);
            history.push(`/viewblog/${data}`);
            }
         getMostRecent();
       
    }, []);
    return (
        <div>
           <h1>Loading. . .</h1>
        </div>
      
    );
}
export default MostRecent;
