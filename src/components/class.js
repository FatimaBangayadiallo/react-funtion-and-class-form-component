import React from 'react';
import ReactDOM from 'react-dom';


class ClassComponentForm extends React.Component {
   constructor(){
     super();
     this.state = {nom: "",prenom: "", adresse: "", email: "", password: ""};
   }
   handleNom(e){
     this.setState({nom: e.target.value})
   };
   handlePrenom(e){
     this.setState({prenom: e.target.value})
   };
   handleAdresse(e){
     this.setState({adresse: e.target.value})
   };
   handleEmail(e){
     this.setState({email: e.target.value})
   };
   handlePassword(e){
     this.setState({password: e.target.value})
   };
   handleSubmit(e){
     e.preventDefault()
     this.setState({nom:"",prenom:"",adresse: "", email: "",password: ""})
   };


  render(){
    return (

       <form onSubmit={(e) => this.handleSubmit(e)}>
       <input name="nom" type="txt" value={this.state.nom} onChange={(e) => this.handleNom(e)}/>
       <input name="prenom" type="txt" value={this.state.prenom} onChange={(e) => this.handlePrenom(e)}/>
       <input name= "adresse" type="txt" value={this.state.adresse} onChange={(e) => this.handleAdresse(e)}/>
       <input name="email" type="email" value={this.state.email} onChange={(e) => this.handleEmail(e)} />
       <input name="password" type="password" value={this.state.password} onChange={(e) =>this.handlePassword(e)} />
       <input type= "submit"/>

       </form>
    );
  }

};
export default ClassComponentForm;
