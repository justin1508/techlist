import React, {Component} from 'react';
import TechItem from './TechItem';

class TechList extends Component{

    state = {
        newTech: '',
        techs: []
    };

    componentDidMount(){
        // const techs = localStorage.getItem('techs');

        // if(techs){
        //     this.setState({techs: JSON.parse(techs)});
        // }
    }

    componentDidUpdate(_, prevState){
        if(prevState.techs != this.state.techs){
            console.log(this.setState.techs)
            localStorage.setItem('techs', JSON.stringify(this.setState.techs));
        }
    }

    componentWillUnmount(){
        
    }

    handleInputChange = e =>{
        this.setState({ newTech : e.target.value});
    }

    handleSubmit = e =>{
        e.preventDefault();

        this.setState({techs:[...this.state.techs, this.state.newTech], newTech:''})
    }

    handleDelete = (tech) =>{
        this.setState({techs: this.state.techs.filter(t => t !== tech)});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <ul>
                   {this.state.techs.map(t => <TechItem key={t} tech={t} onDelete={()=> this.handleDelete(t)}/>)}

                </ul>
                <input type="text" 
                onChange={this.handleInputChange} 
                value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
            </form> 
            
        );
    }
}
export default TechList;