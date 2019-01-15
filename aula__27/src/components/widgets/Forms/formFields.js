import React from 'react';

const Formfields = (props) => {
    
    const renderFields = () => {
        const formArray = [];

        for (let element in props.formData) {
            formArray.push({
                id: element,
                settings: props.formData[element]
            })
        }

        return formArray.map( (item , i )=> {
            return (
                    <div key={i} className="form_element">
                        {renderTemplates(item)}
                    </div>
                )
         })
    }

    const showLabel = (show , label) => {
        return show ? 
            <label>{label}</label>
        : null
    }

    const changeValue = (e , id) => {
            const newState = props.formData;
            newState[id].value = e.target.value;
            
            props.change(newState);
        }

    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;

        switch (values.element){
            case('input'):  
               formTemplate = (
                <div>
                    { showLabel (values.label , values.labelText) }
                    <input
                        {...values.config}
                        value={values.value}
                        onChange={
                            (e) => changeValue(e , data.id)
                        }
                    >
                    </input>
                </div>
               )               
            break;
            default: 
            formTemplate = null;
        }
        return formTemplate;
    }
    
    return (
        <div>
            {renderFields()}
        </div>
    )
}

export default Formfields;