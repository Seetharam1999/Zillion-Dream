import React,{useState}from 'react';
import './Contacts.css';
import Chat from './Chat_Components';
  import Call from './call_Components';
  import ZD_troops from './zdTroops_Components';

const Option=(props)=>{
    return (
        <div className="option">
            <ul >
                <li ><span onClick={()=>props.onClick(1,false)}>Search</span></li>
                <li ><span  onClick={()=>props.onClick(3)}>Call Logs</span></li>
                <li ><span  onClick={()=>props.onClick(4)}>Broadcast Option</span></li>
                <li ><span  onClick={()=>props.onClick(2)}>Cluster Troops</span></li>
            </ul>
            
        </div>
    )


}
const Conatacts=(props)=>{
    const [toggleState,setToggleState]=useState(1);
    const [isloading,setIsloading]=useState(false);
    const [isOpen,SetisOpen]=useState(false);
    const toggleTab=(index,load)=>{
          setToggleState(index);
            setIsloading(load);
          SetisOpen(false)
    }
    const OptionOpen=()=>{
        SetisOpen(!isOpen)
    }
return(

    <div className="container" >
                
             <div className="Contacts d-flex ">                 
             <div  className="left">
                     <h2>Conacts</h2>
                        
                 </div>
                     <div className="right p-2">
                             <span className="fa fa-ellipsis-h " onClick={OptionOpen}></span>
                 </div>
                     {isOpen&&<Option onClick={(index,load)=>toggleTab(index,load)}/>}
                </div>

                <div className="Conatacts-Body">
               
                   <div className={toggleState===1?"tabs active-tabs":"tabs"}
                   onClick={()=>toggleTab(1,true)}
                   >Chats</div>
                   <div className={toggleState===2?"tabs active-tabs":"tabs"}
                    onClick={()=>toggleTab(2)}>ZD Troops</div>
                  <div className={toggleState===3?"tabs active-tabs":"tabs"}
                   onClick={()=>toggleTab(3 )}>Call Logs</div>
                  
                  </div>
                  <div className="bodys">
                    {
                       toggleState===1?<Chat loading={isloading}/>:toggleState===2?<ZD_troops/>:<Call/>
                    }
                  </div>
                

</div>
)
}
export default Conatacts;


//   export default class Contacts extends Component{
//       constructor(props){
//           super(props);
//           this.state={
//               isActive:<Chat/>,
//               isActiveTab:'Chat',
              
//           };
   
//       } 
    
//     render(){
//         onchange=(isBar)=>{
//             return this.setState({
//                    isActive: isBar==='chats' ?<Chat/>:isBar==='ZD'?<ZD_troops/>:<Call/>,
//                    isActiveTab:isBar=='chats' ?'Chat':isBar==='ZD'?'ZD':'Call',
                  
//                 })
//            }
//         return(
//             <div className="container" >
                
//             <div className="Contacts">
//                 <div  className="left">
//                     <h2>Conacts</h2>
                    
//                 </div>
//                  <div className="right p-2">
//                          <span className="fa fa-ellipsis-h " data-bs-toggle="tooltip" data-bs-placement="top" title='<ul>
//                          <li>Setting</li>
//                          <li>Setting</li>
//                          <li>Setting</li></ul>'></span>
//                   </div>
//             </div>
//             <div className="Conatacts-Body">
//                 <div className="tabs active-tabs">Chats</div>
//                 <div className="tabs ">ZD Troops</div>
//                 <div className="tabs ">Call Logs</div>
//             {/* <div className="Bleft"> <p onClick={()=>onchange('chats')}>Chats</p> {this.state.isActiveTab=='Chat' && <span className="fa fa-circle"></span>}</div>
//                 <div className="Bcenter">
//                 <p onClick={()=>onchange('ZD')}>ZD Troops</p>{this.state.isActiveTab=='ZD' && <span className="fa fa-circle"></span>}
//                  </div>           
//                     <div className="Bright">  <p onClick={()=>onchange('call')}>Call logs</p> {this.state.isActiveTab=='Call' && <span className="fa fa-circle"></span>}</div> */}
//             </div>
//             <div className="bodys">
//             {
//             this.state.isActive
//           }
//             </div>
         
          
//         </div>
//         )
//     }
//   }
