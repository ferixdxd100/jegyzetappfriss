export default function Button1({content, color, onClick}){
    return(
        <div>
            <div className={`btn btn-${color}`} onClick={onClick}>{content}</div>
        </div>
    )
}