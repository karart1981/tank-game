export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

canvas.width = innerWidth-5;
canvas.height = innerHeight-5;



export const grn = (limit, start = 0) => {
    return start + Math.floor(Math.random() * (limit - start));
}