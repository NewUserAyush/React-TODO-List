import React from 'react';
import CardCom from './card-com';
class ListCom extends React.Component{
    state={cardList:this.props.cards}
    render(){
        return(
        <div className="list" onDragOver={(e)=>this.props.onDragOverhandler(e)} onDrop={(e)=>{this.props.onDropHandler(e,this.props.id)}} data-id={this.props.id}>
            <div className="list-title" >List Comp</div>
            <div>{this.filterList(this.props.id).map((item)=><CardCom contentAddHandler={this.addContent.bind(this)} key={item.cardId} cardId={item.cardId} title={'Card Title'} content={item.content}/>)}</div>
            <div className="button list-button" onClick={()=>this.props.addCardHandler(this.props.id)}>Add Card</div>
        </div>)
    }
   
    filterList(listid){
        return this.props.cards.filter(item=>item.listId==listid);
    }

    addContent(ev,cardId){
        let localCards=JSON.parse(localStorage.getItem('cards'));
        let item=this.props.cards.find(item=>item.cardId==cardId);
        localCards.find(item=>item.cardId==cardId).content=ev.target.innerText;
        localStorage.setItem('cards',JSON.stringify(localCards));
        item.content=ev.target.innerText;
    }
   


}

export default ListCom;