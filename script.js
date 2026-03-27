setTimeout(() => {
  next(2);
  document.getElementById("music").play();
  startHearts();
}, 2000);

function next(n) {
  let current = document.querySelector(".active");
  current.classList.remove("active");

  let nextScreen = document.getElementById("screen" + n);
  nextScreen.classList.add("active");

  if(n === 6) typingEffect();
}

function startHearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💖";
    h.style.left = Math.random()*100 + "vw";
    h.style.top = "100vh";
    document.body.appendChild(h);

    setTimeout(()=>h.remove(),4000);
  }, 300);
}

document.addEventListener("click", () => {
  document.getElementById("cake").innerHTML = "🍰";
  confetti();
});

function confetti() {
  for (let i = 0; i < 80; i++) {
    let c = document.createElement("div");
    c.style.position = "fixed";
    c.style.width = "8px";
    c.style.height = "8px";
    c.style.background = "hsl(" + Math.random()*360 + ",100%,50%)";
    c.style.top = "0";
    c.style.left = Math.random()*100 + "vw";

    document.body.appendChild(c);

    c.animate([
      {transform:"translateY(0)"},
      {transform:"translateY(100vh)"}
    ], {duration:3000});

    setTimeout(()=>c.remove(),3000);
  }
}

function typingEffect() {
  let text = "Happy Birthday ❤️ You are very special... Stay happy always again Happy Birthday Animesh da 🎉
Aajke phone korte iccha chilo, kintu bhablam hoyto disturb hoye jabe…because goto 2 bar jokhon phone korlam tokhon tomar kotha sune mone hochilo je tomar kotha bolar iche nei tai message e wish korlam.😊

Sob somoy nijer moto thako, aar onek khusi theko ❤️ 💖";
  let i = 0;

  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}
