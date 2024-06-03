import {canvas, ctx} from './utils.js';
import {Player} from './Player.js';
import { Fire } from './Fire.js';

export class Game {
    bg = new Image();

    player = new Player();

    another = new Player(false);

    //audio = new Audio("../sounds/tank-moving.mp3");

    audio2 = new Audio("../sounds/shot.mp3");

    fire = new Fire();

    constructor (){
        window.onkeydown = (e)=>{
            if(e.key == 'ArrowRight'){
                this.player.moveRight();
            } 
            else if(e.key == 'ArrowLeft'){
                this.player.moveLeft();
            }
            else if(e.key == 'ArrowUp'){
                this.player.moveUp();
            }
            else if(e.key == 'ArrowDown'){
                this.player.moveDown();
            }
            if (e.key == " ") {
                this.player.shoot();
            }
        }
        this.bg.src= "../images/fileld.png";
        //this.audio.src = "../sounds/tank-moving.mp3";
        //this.audio.volume = 0.1;
        this.bg.onload = () => ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.id = requestAnimationFrame(()=> this.run());
        //this.audio.play();
    }
    run(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.bg.onload();
        this.id = requestAnimationFrame(() => this.run());
        this.player.draw();
        this.another.move();
        //this.audio.play();
        
        if(Math.abs(this.player.x - this.another.x) < 94 && Math.abs(this.player.y - this.another.y) < 95){
            cancelAnimationFrame(this.id);
        }
        
    }
    

}