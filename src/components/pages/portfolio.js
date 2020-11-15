import React, {Component} from 'react';
import Project from "./parts/project";
import List from '../../list.json'


class Portfolio extends Component{

    state = {
       List: List
      };

    render(){
        return (
            <div style ={{display:"flex", justifyContent:"space-around", margin:"5%", flexWrap:"wrap"}}>
            {this.state.List.map(item => (<Project
            id = {item.id}
            name = {item.name}
            img= {item.img}
            description = {item.description}
            link ={item.link}
            />))}
        </div>)
    }
}

export default Portfolio;