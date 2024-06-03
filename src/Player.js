import {ctx, canvas, grn} from './utils.js';
import {Fire} from './Fire.js';

export class Player {
   img = new Image();
   fire = null;
   audio2 = new Audio("../sounds/shot2.mp3");
   constructor(isPlayer = true){
    this.isPlayer = isPlayer;
    this.x  = this.isPlayer ? 810 : 550;
    this.y = this.isPlayer ? innerHeight - 150 : 50;
    this.w = this.isPlayer ? 100 : 110;
    this.h = this.isPlayer ? 100 : 110; 

    if(this.isPlayer){
      this.img.src = "../images/tank1.png"
    } else{
      this.img.src = "../images/tank3.png";
    }
    this.img.onload = ()=> ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    draw(){
        this.img.onload();
        if (this.fire) {
            this.fire.move();
        }
    }
    shoot() {
        this.fire = new Fire(this.x + 30, this.y - 30);
        this.audio2.play();
    }
    move(){
        this.draw();
        this.y += 1;
        if(this.y >= innerHeight){
            this.y = - 20;
            this.x = grn(innerWidth-120, 20);
            this.img.src = `../images/tank${grn(4,2)}.png`;
        }
    }
    moveRight(){
        if(this.x < innerWidth-120){
           this.x += 20;
        }
      }
      moveLeft(){
       if(this.x > 20){
           this.x -= 20;
       }
      }
      moveUp(){
       if(this.y > 20){
           this.y -= 20;
       }
      }
      moveDown(){
       if(this.y < innerHeight-120){
           this.y += 20;
       }
      }
}