import React,{Component,lazy}from 'react';

import Chat from './Chat_Components';
  import Call from './call_Components';
  import ZD_troops from './zdTroops_Components';

  export default class Contacts extends Component{
      constructor(props){
          super(props);
          this.state={
              isActive:<Chat/>,
              isActiveTab:'Chat',
              
          };
   
      } 
    
    render(){
        onchange=(isBar)=>{
            return this.setState({
                   isActive: isBar==='chats' ?<Chat/>:isBar==='ZD'?<ZD_troops/>:<Call/>,
                   isActiveTab:isBar=='chats' ?'Chat':isBar==='ZD'?'ZD':'Call',
                  
                })
           }
        return(
            <div className="container" >
            <div className="Contacts">
                <div  className="left">
                    <h2>Conacts</h2>
                </div>
                 <div className="right p-2">
                         <span className="fa fa-ellipsis-h " data-bs-toggle="tooltip" data-bs-placement="top" title='<ul>
                         <li>Setting</li>
                         <li>Setting</li>
                         <li>Setting</li></ul>'></span>
                  </div>
            </div>
            <div className="Conatacts-Body">
            <div className="Bleft"> <p onClick={()=>onchange('chats')}>Chats</p> {this.state.isActiveTab=='Chat' && <span className="fa fa-circle"></span>}</div>
                <div className="Bcenter">
                <p onClick={()=>onchange('ZD')}>ZD Troops</p>{this.state.isActiveTab=='ZD' && <span className="fa fa-circle"></span>}
                 </div>           
                    <div className="Bright">  <p onClick={()=>onchange('call')}>Call logs</p> {this.state.isActiveTab=='Call' && <span className="fa fa-circle"></span>}</div>
            </div>
            <div className="bodys">
            {
            this.state.isActive
          }
            </div>
         
          
        </div>
        )
    }
  }
