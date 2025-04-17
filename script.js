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
  } else if (avg < 34) {
    resultText.textContent = "You are peaceful, nature-loving, and introspective. Try New Zealand or Norway!";
    resultImage.src = "nature_result.png";
  } else if (avg < 67) {
    resultText.textContent = "You value balance, culture, and structure. Consider Canada or Germany!";
    resultImage.src = "balance_result.png";
  } else {
    resultText.textContent = "You thrive in dynamic cities. Tokyo, New York, or Seoul could be perfect!";
    resultImage.src = "city_result.png";
  }
}
