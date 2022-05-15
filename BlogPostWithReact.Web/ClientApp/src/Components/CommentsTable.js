import React from 'react';
import format from 'date-fns/format';

const comment = ({comment}) => {
    const { content, dateCreated, commenterName} = comment;
    
    return (
        <div className="row col-md-8">
            <br/>
          
           <div className="col-md-8">
               <h5 className="mt-8">{commenterName}<small className="ml-1">{format(new Date(dateCreated), 'EEEE LLLL do, R')}</small></h5>
               {content}
            </div>
         </div>
         

    )
}

export default comment;