export class Player{
    constructor(fullName='new player',age=0,color){
        this.fullName=fullName
        this.age=age
        this.cardNum=0;
        this.color=color;
    }
    pickOne(seenCards){
        if(seenCards.size<=51){
            let index=Math.floor(Math.random()*54);
            while(index in seenCards){
                index=Math.floor(Math.random()*54);
            }
            seenCards.add(index);
            return index
        }
        return -1 
    }
    pickFull(seenCards){
        const indices=[];
        indices.push(this.pickOne(seenCards));
        indices.push(this.pickOne(seenCards));
        return indices;
    }
}