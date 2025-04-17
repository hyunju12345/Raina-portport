// 슬라이더 평균 계산 함수 (공통)
function calculateSliderAverage() {
  const sliders = document.querySelectorAll("input[type='range']");
  let total = 0;

  sliders.forEach((slider) => {
    total += parseInt(slider.value);
  });

  return total / sliders.length;
}

// quiz1.html → quiz2.html 이동 + 평균 저장
const nextBtn = document.getElementById("nextBtn");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    const avg1 = calculateSliderAverage();
    localStorage.setItem("quizPart1", avg1);
    window.location.href = "quiz2.html";
  });
}

// quiz2.html → result.html 이동 + 최종 평균 저장
const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const avg2 = calculateSliderAverage();
    const avg1 = parseFloat(localStorage.getItem("quizPart1"));
    const finalAvg = !isNaN(avg1) ? (avg1 + avg2) / 2 : avg2;

    localStorage.setItem("quizResultScore", finalAvg);
    window.location.href = "result.html";
  });
}

// result.html → 결과 보여주기
const resultText = document.getElementById("resultText");
const resultImage = document.getElementById("resultImage");

if (resultText && resultImage) {
  const avg = parseFloat(localStorage.getItem("quizResultScore"));

  if (isNaN(avg)) {
    resultText.textContent = "Oops! Something went wrong. Please try again.";
  } else if (avg < 10) {
    resultText.textContent = "Your perfect place is Reykjavik, Iceland!";
    resultImage.src = "reykjavik.png";
  } else if (avg < 20) {
    resultText.textContent = "Your perfect place is Wellington, New Zealand!";
    resultImage.src = "wellington.png";
  } else if (avg < 30) {
    resultText.textContent = "Your perfect place is Lucerne, Switzerland!";
    resultImage.src = "lucerne.png";
  } else if (avg < 40) {
    resultText.textContent = "Your perfect place is Vancouver, Canada!";
    resultImage.src = "vancouver.png";
  } else if (avg < 50) {
    resultText.textContent = "Your perfect place is Munich, Germany!";
    resultImage.src = "munich.png";
  } else if (avg < 60) {
    resultText.textContent = "Your perfect place is Paris, France!";
    resultImage.src = "paris.png";
  } else if (avg < 70) {
    resultText.textContent = "Your perfect place is Barcelona, Spain!";
    resultImage.src = "barcelona.png";
  } else if (avg < 80) {
    resultText.textContent = "Your perfect place is Tokyo, Japan!";
    resultImage.src = "tokyo.png";
  } else if (avg < 90) {
    resultText.textContent = "Your perfect place is New York City, USA!";
    resultImage.src = "newyork.png";
  } else {
    resultText.textContent = "Your perfect place is Seoul, South Korea!";
    resultImage.src = "seoul.png";
  }
  
}
