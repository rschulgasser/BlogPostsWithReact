import React from 'react';
import format from 'date-fns/format';

const comment = ({comment}) => {
    const { content, dateCreated, commenterName} = comment;
    
    return (
        <div className="row">
           <div class="media-body">
               <h5 class="mt-0">{commenterName}<small class="ml-1">{format(new Date(dateCreated), 'EEEE LLLL do, R')}</small></h5>
               {content}
            </div>
         </div>

    )
}

export default comment;