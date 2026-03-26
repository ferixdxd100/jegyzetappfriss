import Button from './Button';

function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div 
      className="card h-100" 
      style={{ 
        backgroundColor: '#ffd700', 
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '15px' }}>
          {note.title}
        </h5>
        <p className="card-text" style={{ marginBottom: '20px', whiteSpace: 'pre-wrap' }}>
          {note.content}
        </p>
        <div className="d-flex gap-2">
          <Button 
            variant="light"
            onClick={() => onEdit(note)}
          >
            Szerkesztés
          </Button>
          <Button 
            variant="danger"
            onClick={() => onDelete(note.id)}
          >
            Törlés
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
