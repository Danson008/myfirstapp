import React from 'react'

function List() {
    const numbers = [1,2,3,4,5];
    const updatedList = numbers.map((number, index) => {
    return  <li key={index}>{number}</li>  
})
    return(
       <ul>
        {updatedList}
        </ul>
    )
}


export default List;

