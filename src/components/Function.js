
import React,{useState} from 'react';

function Function(){
   const [nom, setNom] = useState("")
   const [prenom, setPrenom] = useState("")
   const [adresse, setAdresse] = useState("")
   const [email ,setEmail] = useState("")
   const [password,setPassword] = useState("")


  function handleNom(e){
     setNom(e.target.value)
   };
  function handlePrenom(e){
     setPrenom(e.target.value)
   };
  function handleAdresse(e){
     setAdresse(e.target.value)
   };
 function   handleEmail(e){
     setEmail(e.target.value)
   };
  function handlePassword(e){
     setPassword(e.target.value)
   };
  function handleSubmit(e){
     e.preventDefault();
     setNom("")
     setPrenom("")
     setAdresse("")
     setEmail("")
     setPassword("")
   };

  return (
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>
    <input name="nom" type="txt" value={nom} onChange={(e) =>handleNom(e)}/>
    <input name="prenom" type="txt" value={prenom} onChange={(e) => handlePrenom(e)}/>
    <input name= "adresse" type="txt" value={adresse} onChange={(e) =>handleAdresse(e)}/>
    <input name="email" type="email" value={email} onChange={(e) => handleEmail(e)} />
    <input name="password" type="password" value={password} onChange={(e) =>handlePassword(e)} />
    <input type= "submit"/>

    </form>
    </div>

  );

};

export default Function
