import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonComponent=(props)=>{
    return (
         Array(9)
    .fill()
    .map(() => 
        <div className="container">
            <div 
            className="row ">
                <div className="col-1">
             <div className="grp">   <Skeleton circle={true} height={50} width={50}  /></div>
             {props.groups&&<div className="grups"> <Skeleton circle={true} height={50} width={50} /> </div>
}
              
                </div>
            <div className="col-9 p-2 "style={{marginLeft:20}} >

<Skeleton width={400}/><br/>
<Skeleton width={90}/>
            </div>
            <div className="col-1 p-2 d-float-right">
            <Skeleton/>
            </div>
            </div>
        </div>
    ))
}
export default SkeletonComponent;
