import React, { Component } from 'react';
import Formfields from '../components/widgets/Forms/formFields';

class User extends Component {

    state = {
        formData: {
            name:{
                element: 'input',
                value: '',
                label: true,
                labelText: "Seu nome",
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Digite seu nome'
                }
            },
            lastname:{
                element: 'input',
                value: '',
                label: true,
                labelText: "Seu sobrenome",
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Digite seu sobrenome'
                }
            }
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        let dataToSubmit = {};
        
        for (let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }

        console.log(dataToSubmit);
    }

    render(){
        return(
          <div className="container">
            <form onSubmit={this.submitForm}>
                 
                 <Formfields
                    formData={this.state.formData}
                    change={(newState) => this.updateForm(newState)}
                 />

                <button type="submit">Enviar</button>
            </form>
          </div>

        )
    }
}

export default User;