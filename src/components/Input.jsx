function Input({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder = '',
  required = false,
  className = ''
}) {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label" style={{ fontWeight: '500' }}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`form-control ${className}`}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}

export default Input;
