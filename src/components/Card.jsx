function Card({ children, className = '', style = {} }) {
  const defaultStyle = {
    backgroundColor: '#ffd700',
    border: 'none',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    ...style
  };

  return (
    <div className={`card ${className}`} style={defaultStyle}>
      {children}
    </div>
  );
}

export default Card;
