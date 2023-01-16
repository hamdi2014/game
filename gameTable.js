import { Box, table } from "./form.js";
import chalk from "chalk";
import { Player } from "./player.js";
const output=process.stdout;

export class GameTable{
    constructor(){
        this.seenCards=new Set();
        this.players=new Array();
    }
    shuffle(deck){
        deck.sort(() => Math.random() - 0.5);
    }
    removeCard(deck,index){
        deck[index].value=null;
    }
    compareCard(index1,index2,deck){
        if(deck[index1].value && deck[index2].value)
        return (deck[index1].value===deck[index2].value) || 
                (deck[index1].value==='joker') || (deck[index2].value==='joker')
    }
    howManyCard(deck){
        return deck.filter(item=>item.value).length
    }
    showCard(index,coordinates,color,deck){
        new Box(coordinates[index].xs,coordinates[index].ys,coordinates[index].xe,coordinates[index].ye).drawBox(color);
        output.cursorTo(coordinates[index].xs+4,coordinates[index].ys+2,()=>{});
        if(color===6){
            output.write(chalk.bgAnsi256(color).black(deck[index].value));
        }else{
            output.write(chalk.bgAnsi256(color).yellowBright(deck[index].value));
        }
    }
    createPlayers(){
        const player=['Hamdollah','Leyla','Aynur','Elman'];
        const age=[38,38,10,3];
        const color=[1,2,6,12];
        for(let i=0;i<=3;i++){
            this.players.push(new Player(player[i],age[i],color[i]));
        }
    }
    startGame(deck){
        const coordinates=[]
        table(coordinates,5);
        this.shuffle(deck);
        this.createPlayers();
        let whileLoopCtrl=false;
        while(this.howManyCard(deck)>3){
            for(let i=0;i<=this.players.length-1;i++){
                let indices=this.players[i].pickFull(this.seenCards);
                if(indices.includes(-1)){
                    whileLoopCtrl=true;
                    break
                }
                if(this.compareCard(indices[0],indices[1],deck)){
                    this.showCard(indices[0],coordinates,this.players[i].color,deck);
                    this.showCard(indices[1],coordinates,this.players[i].color,deck);
                    this.players[i].cardNum++;
                    this.removeCard(deck,indices[0]);
                    this.removeCard(deck,indices[1]);
                }
            }
            if(whileLoopCtrl) break;
        }
        this.players.sort((a,b)=>{
            return a.cardNum-b.cardNum
        })
        output.cursorTo(0,30,()=>{});
        output.write(`Player with name ${this.players[this.players.length-1].fullName} is win by ${this.players[this.players.length-1].cardNum}!!!\n`);
    }
}