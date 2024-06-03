import { ctx, canvas } from './utils.js';
import {Player} from './Player.js';
export class Fire {

    img = new Image();
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.img.src = "./images/fire.PNG";
        this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, 40, 40);
    }

    draw() {
        this.img.onload();
    }

    move() {
        this.draw();
        if(this.y >=-30){
            this.y -= 15;            
        }
    }
}
