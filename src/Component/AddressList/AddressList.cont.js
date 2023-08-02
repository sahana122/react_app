import React,{Component} from "react";
import AddressListComp from "./AddressList.Comp";
import addresses from "../../Data/addresses.json";


class AddressListCont extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         displayAddress:4,
      }
    }
    handleShowMore=()=>{
        this.setState((prevState)=>({
            displayAddress: prevState.displayAddress + 4,
        }))
    }
    handleLess=()=>{
            this.setState({
                displayAddress:4
            })
        }
        handleFunction={
            handleShowMore:this.handleShowMore.bind(this),
            handleLess:this.handleLess.bind(this),
        }
    render(){
        const {displayAddress }=this.state;
        return(
            <AddressListComp
            addresses={addresses}
            displayAddress={displayAddress}
            {...this.handleFunction}
            />

        )
    }
}
export default AddressListCont;