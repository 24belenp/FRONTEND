import {useState} from 'react';
import Package from './Package.js';
import EditPackage from './EditPackage.js';


function EditablePackage(props) {
    const[isEditing, setIsEditing] = useState(false);

    function savePackage(paackage) {
        const result = props.onEdit(paackage);
        if(result){
            setIsEditing(false);
        }
    }

    var paackageRender;
    if(isEditing){
        paackageRender = <EditPackage paackage={props.paackage} onDelete={props.onDelete} onSave={savePackage}/>;
    }else{
        paackageRender = <Package paackage={props.paackage} onDelete={props.onDelete} onEdit={() => setIsEditing(true)}/>
    }

    return paackageRender;
}

export default EditablePackage;
