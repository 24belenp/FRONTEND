function Package(props) {

    return(
        <tr>
            <td>{props.paackage.code}</td>
            <td>{props.paackage.quantity}</td>
            <td>{props.paackage.delivery_date}</td>
            <td>{props.paackage.statuss}</td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onEdit(props.paackage)}>Edit</button>
                <button className="btn btn-primary" onClick={() => props.onDelete(props.paackage)}>Delete</button>
            </td>

        </tr>
    )
    
}

export default Package;
