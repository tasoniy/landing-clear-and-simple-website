const WIDTH = 720;
const HEiGHT = 147;
const DPI_WIDTH = WIDTH * 2;
const DPI_HEIGHT = HEiGHT * 2;


function chart(canvas, data) {
    const ctx = canvas.getContext('2d');
    canvas.style.width = WIDTH + 'px';
    canvas.style.height = HEiGHT + 'px';
    canvas.width = DPI_WIDTH;
    canvas.height = DPI_HEIGHT;

    ctx.beginPath()
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#6B89F8';
    

    for(const [x, y] of data) {
        ctx.lineTo(x, DPI_HEIGHT - y)
    }
    ctx.stroke()
    ctx.closePath()
}

chart(document.getElementById('chart'), [
    [0, 0],
    [100, 2],
    [300, 17],
    [393, 17],
    [420, 20],
    [440, 27],
    [787, 143],
    [957, 153],
    [1057, 163],
    [1180, 242],
    [1440, 293],
])