document.getElementById("submitBtn").addEventListener("click", () => {
    const sliders = document.querySelectorAll("input[type='range']");
    let total = 0;
  
    sliders.forEach((slider) => {
      total += parseInt(slider.value);
    });
  
    const avg = total / sliders.length;
  
    const resultBox = document.getElementById("result");
    const resultText = document.getElementById("resultText");
    const resultImage = document.getElementById("resultImage");
  
    resultBox.style.display = "block";
  
    if (avg < 34) {
      resultText.textContent = "You are peaceful, nature-loving, and introspective. Try New Zealand or Norway!";
      resultImage.src = "nature_result.png";
    } else if (avg < 67) {
      resultText.textContent = "You value balance, culture, and structure. Consider Canada or Germany!";
      resultImage.src = "balance_result.png";
    } else {
      resultText.textContent = "You thrive in dynamic cities. Tokyo, New York, or Seoul could be perfect!";
      resultImage.src = "city_result.png";
    }
  
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });