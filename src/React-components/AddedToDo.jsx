import React from 'react';

const AddedToDo=(props)=>{

    function removeToDo(){
        localStorage.removeItem(`To_Do ${props.value}`)
        return (props.to_remove());
    }
    return (
        <>
        <div className="added_to_do_container">
            <div  className="remove_to_do_logo" onClick={removeToDo}>
                <div className="remove_to_do_logo_first_comp"></div>
                <div className="remove_to_do_logo_second_comp"></div>
            </div>
            <div className="added_to_do_text">
                <p  className="inside_added_to_do_text" >{props.value}</p>
            </div>
        </div>
        </>
    )
}

export default AddedToDo;

