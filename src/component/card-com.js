import React from 'react';

function CardCom(props){
    return(
    <div className="card" 
        onDragStart={(e)=>onDragStart(e, props.cardId)} 
        draggable 
        className="draggable">
        <div className="card-title" >{props.title}</div>
        <div>
           <div contentEditable="true" className="editable-body" onKeyDown={(e)=>props.contentAddHandler(e,props.cardId)}>{props.content}</div>
        </div>
    </div>);
}

function onDragStart(ev, id){
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
}

export default CardCom;