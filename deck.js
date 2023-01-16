export class Deck{
    constructor(){
        this.cards=[];
    }
    deckCreate(card){
        this.cards.push(card);
    }
}