 let gif = [];
 let e1, e2, e3, e4;
 let b1, b2, b3, b4;
let selection1;
let selection2;
let checkbox;
let checkbox2;

function preload() {
 e1 = loadImage('gif/m1.GIF');
 e2 = loadImage('gif/m2.gif');
 e3 = loadImage('gif/m3.gif');
 e4 = loadImage('gif/m4.gif');

 b1 = loadImage('gif/0-1.gif');
 b2 = loadImage('gif/1-1.gif');
 b3 = loadImage('gif/3-1.gif');
 b4 = loadImage('gif/toast-usagi.gif');
}

function setup() {
 gif.push(e1);
 gif.push(e2);
 gif.push(e3);
 gif.push(e4);

 gif.push(b1);
 gif.push(b2);
 gif.push(b3);
 gif.push(b4);

 createCanvas(windowWidth, windowHeight);
 background(255);

 function windowResized () { 
resizeCanvas(windowWidth, windowHeight);
 }

greeting = createElement ('h2', 'How do you feel today?');
greeting.style ('color', 'blue');
greeting.position (200, 200);

checkbox = createCheckbox ('Chinchilla .... or ....');
checkbox.position (width/4, 10);

checkbox2 = createCheckbox ('Bunny');
checkbox2.position (width/2, 10);

 
 

 
 }

function draw() {

    if (checkbox.checked()) { selection1 = createSelect();
        selection1.position (250, 250);
        selection1.option ('options');
        selection1.option ('scared');
        selection1.option ('hungry');
        selection1.option ('laughing');
        selection1.option ('pondering'); 

        let x = selection1.selected();
        if (x === 'scared') { image(e1, width/2, height/2); }
        else if (x === 'hungry') { image(e2, width/2, height/2); }
        else if (x === 'laughing') { image(e3, width/2, height/2); }
        else if (x === 'pondering') { image(e4, width/2, height/2); }  
    } 
   
   // if (checkbox2.checked()) { selection2 = createSelect();
       //selection2.position (250, 250);
      // selection2.option ('options');
       //selection2.option ('cry');
       //selection2.option ('yippee');
     //  selection2.option ('dancing');
      // selection2.option ('nibble'); 

     // let x = selection2.selected();
       // if (x === 'cry') { image(b1, width/2, height/2); }
       // else if (x === 'yippee') { image(b2, width/2, height/2); }
       // else if (x === 'dancing') { image(b3, width/2, height/2); }
       // else if (x === 'nibble') { image(b4, width/2, height/2); }  
 //   }




 }