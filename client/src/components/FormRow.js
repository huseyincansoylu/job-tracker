import React from 'react'

const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
        <div class="form-row">
            <label htmlFor={name} className="form-label">{labelText || name}</label>
            <input className="form-input" onChange={handleChange}
                type={type} value={value} name={name} />
        </div>
    )
}

export default FormRow