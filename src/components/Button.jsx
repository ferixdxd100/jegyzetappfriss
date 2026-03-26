export default function Button({content, color, onClick, disabled = false}) {
    return (
        <div>
            <div className={`btn btn-${color} w-100`} onClick={!disabled ? onClick : undefined}
                 style={{opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer'}}>
                {content}
            </div>
        </div>
    )
}
