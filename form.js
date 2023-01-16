const output=process.stdout;
import chalk from "chalk";
export class Box{
    constructor(xs,ys,xe,ye){
        this.xs=xs;
        this.ys=ys;
        this.xe=xe;
        this.ye=ye;
    }
    drawBox(color){
        for(let i=this.ys;i<=this.ye;i++){
            for(let j=this.xs;j<=this.xe;j++){
                output.cursorTo(j,i,()=>{});
                output.write(chalk.bgAnsi256(color)(" "));
            }
        }
    }
}
export function table(coordinates,color){
    console.clear();
    let num=0;
    let xs,ys,xe,ye;
    xs=1;ys=1;xe=11;ye=5;
    for(let i=1;i<=5;i++){
        xs=1;xe=10;
        for(let j=1;j<=11;j++){
            num++
            if(num>54)break;
            const card=new Box(xs,ys,xe,ye);
            coordinates.push(card);
            card.drawBox(color);
            output.cursorTo(xs+4,ys+2,()=>{});
            output.write(chalk.bgAnsi256(color)(num))
            xs=xs+12
            xe=xs+9
        }
        ys=ys+6
        ye=ys+4
    }
}