import React from 'react';

class Hacktivist extends React.Component{
    componentDidMount(){
        const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
        fetch(apiUrl).then((response) => response.json()).then((data) => console.log(data));
        
      }
    render(){
        return <h1>The component has mounted successfully!</h1>;
    }

}

export default Hacktivist;