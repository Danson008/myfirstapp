import React,{Component} from 'react'
class Refs extends Component{
    constructor(){
        super();
        this.state= {
            saying: ""
        };   
    }

    updateState(e){
        this.setState({saying: this.a.value})
    }
    
    render() {
        return(
        <div>
            Mayank Says<input type="text"  ref={(callBack) => {this.a = callBack}} onChange={this.updateState.bind(this)}  />
            < br/>
            <em>{this.state.saying}</em>
        </div>
        )
    }
}
export default Refs;