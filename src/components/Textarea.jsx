export default function Textarea({title, placeholder, value, setValue, rows = 5}) {
    return (
        <div className="mb-3">
            <label className="form-label">{title}</label>
            <textarea className="form-control" rows={rows} placeholder={placeholder}
                      value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
