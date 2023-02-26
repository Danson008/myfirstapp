import React, {Component} from 'react'

class Ajax extends Component{
    constructor(){
        super();
        this.state ={
            error: "",
            dataFetching: false,
            data: []
        }
    }
   
    componentDidMount() {
        fetch("https://api.github.com/users/mralexgray/repos")
        .then(res => res.json()
        )
        .then(
            (response) => {
                this.setState({
                    dataFetching: true,
                    data: response.data
                })
            }
        )
    }
    
    render(){
        console.log(this.state.data)
        const {error, dataFetching, data} = this.state
        if(dataFetching){
            return <div>Loading....</div>
        }
        else{
            return(
                <ol>
                    {
                        data.map((newData, index) => (
                            <li key={index}>
                                {newData}  
                            </li>
                        ))
                    }
                </ol>
            )
        }
        
    }
}

export default Ajax;