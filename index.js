const greetText = document.querySelector(".section__text");

const today = new Date();
const hours = today.getHours();

if (hours > 5 && hours <= 11) {
  console.log("morning");
  greetText.textContent = "GOOD MORNING 😊";
} else if (hours > 11 && hours <= 16) {
  console.log("after");
  greetText.textContent = "GOOD AFTERNOON 😎";
} else {
  console.log("bam");
  greetText.textContent = "GOOD EVENING 😄";
}
