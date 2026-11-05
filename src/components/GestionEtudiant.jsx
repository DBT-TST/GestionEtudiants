import { useState } from "react";
function GestionEtudiant(){
    const [nom,setNom] = useState(); const [prenom,setPrenom] = useState(); const [age,setAge] = useState();     
    const [etudiant,setEtudiant] = useState([]); 
    const ajouter = (e) => {
        e.preventDefault();
        const info={nom:nom,prenom:prenom,age:age};
        setEtudiant([...etudiant,info]);
        setInfo({nom:"",prenom:"",age:""})
     };
    return(
        <>
        <form>
            <label>Nom</label><br/>
            <input type="text" onChange={(e) =>setNom(e.target.value)} value={nom}></input><br/>
            <label>Prenom</label><br/>
            <input type="text" onChange={(e) =>setPrenom(e.target.value)} value={prenom}></input><br/>
            <label>age</label><br/>
            <input type="text" onChange={(e) =>setAge(e.target.value)} value={age}></input><br/>
            <button onClick={ajouter}>ajouter</button><br/>
        </form>
        <div>
            {etudiant.map((i) => (
              <div> 
                <p>nom: {i.nom} prenom: {i.prenom} age: {i.age}</p>
              </div>
            ))}
        </div>
        </>)}
export default GestionEtudiant;