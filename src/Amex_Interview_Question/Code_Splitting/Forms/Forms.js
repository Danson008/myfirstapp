import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state= {
            inputChange: ""
        };
    }

    onInputChange(e){
        this.setState({inputChange: e.target.value})
    }

    render(){
        return(
            <div>
                Hello World
                <form>
                <label>Entered Text</label>
                <input type="text" onChange={this.onInputChange.bind(this)} />
                <br />
                <em>{this.state.inputChange}</em>
                </form>
            </div>
        )
    }
}

export default Form