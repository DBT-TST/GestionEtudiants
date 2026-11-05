import Etudiant from './components/etudiant'
import Compteur from './components/compteur';
import FormulaireEtudiant from './components/FormulaireEtudiant';
import GestionEtudiant from './components/GestionEtudiant';
import Recherche from './components/Recherche';
import  './App.css';
function App() {
  const etud = [{ id: "etudiant_1", nom: "alami", prenom: "ahmed", age: 20, filliere: "DAI" },{ id: "etudiant_2", nom: "benali", prenom: "sara", age: 21, filliere: "DS" },{ id: "etudiant_3", nom: "fandi", prenom: "Youssef", age: 19, filliere: "DAI" },{ id: "etudiant_4", nom: "Sadki", prenom: "Laila", age: 20, filliere: "DS" },{ id: "etudiant_5", nom: "Khertouchi", prenom: "Ali", age: 19, filliere: "DAI" },];
  return (
    <>
      <div className="info">
        <h1>Application de gestion des etudiantes</h1>
        <h3>Exercice 2 : List d'etudiant</h3>
        <table className="info_table">
          <thead><tr><th>id</th><th>nom</th><th>prenom</th><th>age</th><th>filliere</th></tr></thead>
          <tbody>{etud.map((i) => (<Etudiant key={i.id} id={i.id} nom={i.nom} prenom={i.prenom} age={i.age} filliere={i.filliere}/>))}</tbody>
        </table>
        <h3>Exercice 5 : Compteur</h3>
        <Compteur/>
      </div>
      <h3>Exercice 6</h3>
      <FormulaireEtudiant/>
      <h3>Exercice 7</h3>
      <GestionEtudiant/>
      <Recherche/>
    </>
  )
}
export default App