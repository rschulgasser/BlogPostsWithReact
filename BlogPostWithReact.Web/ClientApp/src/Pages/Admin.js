import React, { useState} from 'react';
import axios from 'axios';
import {useHistory } from 'react-router-dom';

const Admin = () => {
    const [content, setContent] = useState('');
    const [title,setTitle] = useState('');
    const history = useHistory();

    const onSubmitClick = async () => {
        await axios.post('/api/blogposts/addpost', { content, title });
        history.push('/');
    }
    return (
        <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
           <div className="col-md-8 offset-md-2 card card-body bg-light">
               <h3>Add new post</h3>
               <input value={title} className="form-control" placeholder="Title" name="title" onChange={e=>setTitle(e.target.value)}/>
               <br/>
               <textarea value={content} name="content" placeholder="What's on your mind?" className="form-control" rows="20" onChange={e=>setContent(e.target.value)}></textarea>
               <br/>
               <button className="btn btn-primary" disabled={content===''||title===''}onClick={onSubmitClick}>Submit</button>
               </div>
        </div>
      
    );
}
export default Admin;