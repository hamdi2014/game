export const suits=['clubs','diamonds','hearts','spades'];
export const values=['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
export class Card{
    constructor(suit,value,path){
        this.suit=suit;
        this.value=value;
        this.path=path;
    }
}
export class Joker extends Card{
    constructor(suit,value,path){
        super(suit,value,path)
    }
}