import { useState } from "react";
function FormulaireEtudiant(){
    const [nom,setNom] = useState(); const [prenom,setPrenom] = useState(); const [age,setAge] = useState(); 
    const [ok,setOk] = useState(false); 
    const handleNom = (e) =>{setNom(e.target.value);};
    const handlePrenom = (e) =>{setPrenom(e.target.value);};
    const handleAge = (e) =>{setAge(e.target.value);};
    const afficherInfo = (e) => {e.preventDefault(); setOk(true);};
    return(
        <>
        <form>
            <label>Nom</label><br/>
            <input type="text" onChange={handleNom} value={nom}></input><br/>
            <label>Prenom</label><br/>
            <input type="text" onChange={handlePrenom} value={prenom}></input><br/>
            <label>age</label><br/>
            <input type="text" onChange={handleAge} value={age}></input><br/>
            <button onClick={afficherInfo}>ok</button><br/>
        </form>
        {ok?(
            <div>
                <p>nom: {nom}</p>
                <p>prenom: {prenom}</p>
                <p>age: {age}</p>
            </div>
        ): 
        <p>Fill the form</p>}
        </>
    )
}
export default FormulaireEtudiant;