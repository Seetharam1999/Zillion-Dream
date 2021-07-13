import React,{ Component} from 'react';
import "./chatList.css";
import SkeletonComponent from "./skeleton._Component";


 export default class ZD_troops extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true
        };
        setTimeout(()=>{
            this.setState({
                isLoading:false
            });
        },1500)

    }
    render()
    {
        return(  <div className="chatlist__items">
            {this.state.isLoading?
            <SkeletonComponent groups={true}/>:
            <p>ZD TroopsS</p>}
        </div>);
    }
 }