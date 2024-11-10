import React from 'react';

const FormError = ({ error }) => (error ? <div className="alert alert-danger">{error}</div> : null);

export default FormError;