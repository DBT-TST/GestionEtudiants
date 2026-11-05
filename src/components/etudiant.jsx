function Etudiant({ id, nom, prenom, age, filliere }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{age}</td>
      <td>{filliere}</td>
    </tr>
  );
}

export default Etudiant;