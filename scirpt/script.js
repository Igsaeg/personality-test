let i = -1;
let personality = 0;
function update() {
    i++;
    if (i == 20) {
        let highest = Math.max(a, b, c, d);
        if (highest == a) {personality = 0;}
        else if (highest == b) {personality = 1;}
        else if (highest == c) {personality = 2;}
        else {personality = 3;}
        localStorage.setItem('personality', personality);
        window.location.href = `result.html`
    }
    document.getElementById('question').innerHTML = questions[i].question;
    document.getElementById('a').innerHTML = questions[i].a;
    document.getElementById('b').innerHTML = questions[i].b;
    document.getElementById('c').innerHTML = questions[i].c;
    document.getElementById('d').innerHTML = questions[i].d;
}
window.onload = update;

let a = 0;
let b = 0;
let c = 0;
let d = 0;