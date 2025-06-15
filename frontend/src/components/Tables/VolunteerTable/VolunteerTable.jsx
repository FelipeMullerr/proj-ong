import React from 'react';
import './VolunteerTable.css';

const VolunteerTable = ({ data, onView }) => {
  return (
    <table className="volunteer-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Setor</th>
          <th>Visualizar</th>
        </tr>
      </thead>
      <tbody>
        {data.map((volunteer) => (
          <tr key={volunteer.id}>
            <td>{volunteer.id}</td>
            <td>{volunteer.nome}</td>
            <td>{volunteer.cpf}</td>
            <td>{volunteer.endereco}</td>
            <td>{volunteer.setor}</td>
            <td>
              <button className="view-button" onClick={() => onView(volunteer.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/></svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VolunteerTable;