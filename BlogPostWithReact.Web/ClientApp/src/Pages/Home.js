import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';
import BlogPost from '../Components/BlogPost'


const Home = () => {
    const [blogPosts,setPosts] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const {pageNumber} = useParams();
 
    
    const {history}=useHistory();


    useEffect(() => {
        const getPeople = async () => {

            const { data } = await axios.get('/api/blogposts/getposts');
            setPosts(data);
            
            setCurrentPage(pageNumber);
            if(isNaN(pageNumber)){
                setCurrentPage(0);
           
            }
          
           
            setFrom(3*currentPage-3);
            setTo(3*currentPage)
          
           
        }

        getPeople();
     
    }, [pageNumber]);
    
    return (
        <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
            <div className="col-md-8">
                <h1 className="my-4">LIT Blog<small className="ml-2">Nothing to see here...</small></h1>
                {blogPosts.slice(from, to).map(p=> <BlogPost
                    post={p}
                    key={p.id}
                />)}

            <div className="row col-md-12">
                <ul className="pagination justify-content-center mb-4">
                    <li className="page-item">
                    <Link to={`/page/${(+currentPage+1)}`} >
                        <button className="page-link">← Older</button>
                        </Link>
                    </li>
                    <li className="page-item">
                   {pageNumber>-1 && <Link to={`/page/${currentPage-1}`} >
                    <button className="page-link">Newer →</button>
                    </Link>}
                    </li>

                </ul>
            </div>
        </div>
        </div>


    );
}

export default Home;