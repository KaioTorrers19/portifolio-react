import React, { useState } from 'react';
import './css/Content.css';
import axios from 'axios';
import qs from 'qs';

const Content = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    celular: ''
  });
  const [formErrors, setFormErrors] = useState({
    cpf: '',
    celular: ''
  });

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      cpf: '',
      celular: ''
    };

    // Validar CPF (11 caracteres)
    if (formData.cpf.length !== 11) {
      isValid = false;
      errors.cpf = 'CPF inválido. Insira 11 dígitos.';
    }

    // Validar celular (11 caracteres)
    if (formData.celular.length !== 11) {
      isValid = false;
      errors.celular = 'Celular inválido. Insira 11 dígitos.';
    }

    setFormErrors(errors);

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios.post('http://localhost/api/insert.php', qs.stringify(formData))
        .then((response) => {
          console.log(response.data);
          // Realizar qualquer ação adicional após o envio do formulário
        })
        .catch((error) => {
          console.error(error);
        });

      // Limpar os campos do formulário após o envio
      setFormData({
        nome: '',
        cpf: '',
        celular: ''
      });
    }
  };

  return (
    <section className="content-section">
      <p>
        Olá! Prazer em te conhecer, fico feliz que esteja visualizando meu portfólio.
        <br />
        Quer entrar em contato? <b>Clique no botão abaixo.</b>
      </p>
      <button className="custom-button" onClick={openForm}>
        Saiba mais
      </button>

      {showForm && (
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Preencha o formulário</h2>
            <button className="close-button" onClick={closeForm}>X</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                placeholder="Seu nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="number"
                placeholder="xxxxxxxxxxx"
                id="cpf"
                value={formData.cpf}
                onChange={handleChange}
              />
              {formErrors.cpf && <span className="error-message">{formErrors.cpf}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="celular">Celular:</label>
              <input  type="number"
                 placeholder="11111111111"
                 id="celular"
                 value={formData.celular}
                 onChange={handleChange}
               />
               {formErrors.celular && <span className="error-message">{formErrors.celular}</span>}
             </div>
             <div className="form-buttons">
               <button className="delete-button">Apagar</button>
               <button className="submit-button" type="submit">Enviar</button>
             </div>
           </form>
         </div>
       )}
     </section>
   );
 };
 
 export default Content;
               
