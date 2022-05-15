import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import CommentsTable from '../Components/CommentsTable'




const ViewBlog = () => {
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [blogPost, setBlogPost]=useState('');
    

    const history = useHistory();
    const {id } = useParams();

    useEffect(() => {
        const getBlogPost = async () => {
            const { data } = await axios.get(`/api/blogposts/getpostbyId`, { params: { id: id } });
            setBlogPost(data);
           
        }
         getBlogPost();
       
       
    }, [id]);

    const onSubmitClick = async () => {
       
        const blogPostId=id;
        const commenterName=name;
       
        await axios.post('/api/blogposts/addcomment', { blogPostId,content,commenterName });
        history.push('/');
    }
  
    const {  title, comments, dateCreated } = blogPost;
    return (
        <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
           <div className="row">
               <div className="col-lg-8">
                   <h1 className="mt-4">{title}</h1>
                   <p className="lead">by Avrumi Friedman</p>
                   <p>Posted on {dateCreated}</p>
                   <p>{blogPost.content}</p>
                   </div> < div className="card my-4 row col-md-8 form-group" >
                    <h5 className="card-header">Leave a Comment:</h5>
                       <div className="card-body">
                           <input type="hidden" name="postId" value={id}/>
                           <div className="form-group">
                        <input type="text" onChange={e=>setName(e.target.value)} placeholder="Please enter your name" className="form-control" name="name" value={name}/>
                               </div>
                            <div>
                        <textarea value={content} onChange={e=>setContent(e.target.value)}placeholder="Type your comment here but remember to be be nice..." name="content" className="form-control" rows="3">
                        </textarea>
                                </div>
                                <button disabled={content===''||name===''} onClick={onSubmitClick} className="btn btn-primary">Submit</button>
                                </div>
                                </div>
                                {!!comments &&blogPost.comments.map(c=>
                                <CommentsTable
                                 comment={c} key={c.id}/>)};
                                </div>
                              
                                </div>

                                
    );
}
export default ViewBlog;