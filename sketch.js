let ctx;
function setup() {  
  createCanvas(windowWidth, windowHeight);
  background("#e9edc9");
  ctx = canvas.getContext('2d');
	ctx.lineWidth = 8;
	ctx.lineCap = 'round'
  gradientLine(ctx, 10,10,30,30, "#0ead69", "#ff477e")
  gradientLine(ctx, 30,30,70,10, "#0ead69", "#ff477e")
  gradientLine(ctx, 70,10,110,30, "#0ead69", "#ff477e")

	gradientLine(ctx, 110,30,140,10, "#6d597a", "#b23a48")
  gradientLine(ctx, 140,10,140,70, "#6d597a", "#b23a48")
  gradientLine(ctx, 140,70,140,70, "#6d597a", "#b23a48")

	gradientLine(ctx, 140,70,110,100, "#ff99c8", "#1f1300")
  gradientLine(ctx, 110,100,30,100, "#ff99c8", "#1f1300")
  gradientLine(ctx, 30,100,10,70, "#ff99c8", "#1f1300")
  gradientLine(ctx, 10,70,10,10, "#ff99c8", "#1f1300")
  
}

function draw() {
  strokeWeight(10)
  // line(10,10,30,30) //(x1,y1,x2,y2) 1.
  // line(30,30,70,10)  //2.
  // line(70,10,110,30) //3.
  // line(110,30,140,10) //4.
  // line(140,10,140,70) //5.
  // line(140,70,140,70) //6.
  // line(140,70,110,100) //7.
  // line(110,100,30,100)  //8.
  // line(30,100,10,70) //9.
  // line(10,70,10,10) //10.

  textSize(15)  //文字大小
  fill("#087e8b");  //設定顏色
  text("淡江教科",41,65)  //顯示文字

  let x = mouseX;
  let y = mouseY;
  let w = 20;
  let h = 20;
  push();
    for (let i = 1; i < 5; i++) {
      // 設定線條粗細和顏色
      strokeWeight(i);
      stroke(255 - i * 50);
      noFill();
      // 繪製圖形
      beginShape();
        vertex(x, y);
        vertex(x + 20, y + 20);
        vertex(x + 40, y);
        vertex(x + 60, y + 20);
        vertex(x + 80, y);
        vertex(x + 80, y + 60);
        vertex(x + 60, y + 80);
        vertex(x + 20, y + 80);
        vertex(x, y + 60);
    endShape(CLOSE);
    // 調整位置和大小
    x += 10;
    y += 5;
    w += 5;
    h += 5;
    }

pop();
}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}