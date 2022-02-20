import React from 'react';
import Form from 'react-bootstrap/Form';

interface TextInputProps {
  label: string;
  controlId: string;
  placeholder?: string;
  type?: string;
  nameClass?: string;
  value?: string;
}

const TextInput = ({label, controlId, nameClass = 'mt-3', type = 'text'}: TextInputProps) => {
  return (
    <>
      <Form.Floating className={nameClass}>
        <Form.Control
          style={{maxWidth: '28.5rem'}}
          id={controlId}
          type={type}
          placeholder={label}
        />
        <label htmlFor={controlId}>{label}</label>
      </Form.Floating>
    </>
  );
};

export default TextInput;
