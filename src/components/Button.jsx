const COLOR_MAP = {
    dark:    { backgroundColor: '#3D3730', borderColor: '#3D3730', color: '#F7F4EE' },
    danger:  { backgroundColor: '#C0392B', borderColor: '#C0392B', color: '#F7F4EE' },
    warning: { backgroundColor: '#E8C84A', borderColor: '#E8C84A', color: '#3D3730' },
    light:   { backgroundColor: '#F7F4EE', borderColor: '#d0ccc4', color: '#3D3730' },
    success: { backgroundColor: '#4a7c59', borderColor: '#4a7c59', color: '#F7F4EE' },
    secondary:{ backgroundColor: '#7a7068', borderColor: '#7a7068', color: '#F7F4EE' },
}

export default function Button({content, color, onClick, disabled = false}) {
    const custom = COLOR_MAP[color] || {}
    return (
        <div>
            <div
                className={`btn btn-${color} w-100`}
                onClick={!disabled ? onClick : undefined}
                style={{
                    ...custom,
                    opacity: disabled ? 0.6 : 1,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            >
                {content}
            </div>
        </div>
    )
}
