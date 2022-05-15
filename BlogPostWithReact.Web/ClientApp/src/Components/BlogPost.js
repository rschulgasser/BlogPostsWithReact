import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const PersonRow = ({post}) => {
    const { id, title, content, comments, dateCreated } = post;
  
    return (
        <div>
        <div className="row">
            <div className='col-md-8'>
                <div className="card mb-12">
                    <div className="card-body">
                        <h2 className="card-title">
                        <Link to={`/viewblog/${id}`} >
                           {title}
                        </Link>
                        </h2>
                        <p className="card-text">{content}</p>
                        <div className="mb-12">
                            <small>{comments.legnth} comment(s)</small>
                            </div>
                            <Link to={`/viewblog/${id}`} >
                        <button className="btn btn-primary">Read More →</button>
                        </Link>
                        </div>
                    <div className="card-footer text-muted">{format(new Date(dateCreated), 'EEEE LLLL do, R')}</div>
                </div>
                </div>
               
            </div>
             <br/>
             </div>

    )
}

export default PersonRow;