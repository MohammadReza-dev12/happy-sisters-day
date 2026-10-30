const btn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  // مخفی کردن دکمه و نمایش پیام
  btn.style.display = "none";
  message.classList.remove("hidden");
  message.classList.add("show");

  // ایجاد افکت گل‌های شناور در پس‌زمینه
  for (let i = 0; i < 25; i++) {
    createFlower();
  }
});

function createFlower() {
  const flower = document.createElement("div");

  // انتخاب تصادفی بین چند ایموجی گل
  const flowers = ["🌸", "🌺", "🦋", "💐", "🌷"];
  flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.position = "fixed";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.top = "100vh";
  flower.style.fontSize = Math.random() * 20 + 15 + "px";
  flower.style.pointerEvents = "none";
  flower.style.transition = "all 4s ease-out";
  flower.style.zIndex = "9999";
  flower.style.opacity = "1";

  document.body.appendChild(flower);

  // انیمیشن پرواز به سمت بالا
  setTimeout(() => {
    flower.style.top = "-10vh";
    flower.style.transform = `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 100 - 50}px)`;
    flower.style.opacity = "0.2";
  }, 50);

  // حذف المان بعد از پایان انیمیشن
  setTimeout(() => flower.remove(), 4500);
}
