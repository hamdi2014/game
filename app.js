import { GameTable } from "./gameTable.js";
import { Deck } from "./deck.js";
import {suits,values,Card,Joker} from "./card.js";
const newGameTable=new GameTable();
const newDeck=new Deck();
const joker=['joker_black.svg','joker_red.svg']
for(let i=0; i<=suits.length-1; i++){
    for(let j=0;j<=values.length-1;j++){
        newDeck.deckCreate(new Card(suits[i],values[j],'./cards'+suits[i]+'_'+values[j]+'.svg'))
    }
}
for(let i=0;i<=1;i++){
    newDeck.deckCreate(new Joker('joker','joker',joker[i]))
}
console.clear();
newGameTable.startGame(newDeck.cards);