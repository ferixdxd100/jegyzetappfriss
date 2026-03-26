export default function TextBox({title, placeholder, type, value, setValue}) {
    return (
        <div className="mb-3">
            <label htmlFor={title} className="form-label">{title}</label>
            <input type={type} className="form-control" id={title} placeholder={placeholder}
                   value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
