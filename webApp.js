class Card{
    constructor(suit,value,path){
        this.suit=suit;
        this.value=value;
        this.path=path;
    }
}
class Joker extends Card{
    constructor(suit,value,path){
        super(suit,value,path)
    }
}

const imgElements=[];
const suits=['clubs','diamonds','hearts','spades'];
const values=['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
const joker=['./cards/joker_black.svg','./cards/joker_red.svg']
const gameTable=document.getElementById("game-table");

for(let i=0; i<=suits.length-1; i++){
    for(let j=0;j<=values.length-1;j++){
        imgElements.push(new Card(suits[i],values[j],'./cards/'+suits[i]+'_'+values[j]+'.svg'))
    }
}
for(let i=0;i<=1;i++){
    imgElements.push(new Joker('joker','joker', joker[i]))
}
imgElements.sort(() => Math.random() - 0.5)
for(let i=0;i<=53;i++){
    const img=document.createElement('img');
    img.src='./cards/cardBack.svg';
    img.id='image'+i;
    gameTable.appendChild(img)
}
let openCard=-1;
async function f(img,openCard1) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            img.src='./cards/cardBack.svg';
            document.getElementById('image'+openCard1).src='./cards/cardBack.svg';
            resolve('done')}, 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    // alert(result); // "done!"
 }
for(let i=0;i<=53;i++){
    const img=document.getElementById('image'+i);
    img.addEventListener('click',function(){
        img.src=imgElements[i].path
        if(openCard===-1){
            openCard=i;
        }else{
            if(imgElements[i].value!==imgElements[openCard].value){
                f(img,openCard);
                // clearTimeout(delay);
                openCard=-1;
            }else{
                openCard=-1
            }
        }
    })
}