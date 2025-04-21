// 나라 정보 (이름 + 이미지)
const countryInfo = {
  iceland: { name: "Reykjavik, Iceland", img: "reykjavik.png" },
  newzealand: { name: "Wellington, New Zealand", img: "wellington.png" },
  switzerland: { name: "Lucerne, Switzerland", img: "lucerne.png" },
  canada: { name: "Vancouver, Canada", img: "vancouver.png" },
  germany: { name: "Munich, Germany", img: "munich.png" },
  france: { name: "Paris, France", img: "paris.png" },
  spain: { name: "Barcelona, Spain", img: "barcelona.png" },
  japan: { name: "Tokyo, Japan", img: "tokyo.png" },
  usa: { name: "New York City, USA", img: "newyork.png" },
  korea: { name: "Seoul, South Korea", img: "seoul.png" },
};

const resultDescriptions = {
  iceland: "You value calm, independence, and serenity. A quiet and introspective place like Reykjavik, Iceland, suits your peaceful nature.",
  newzealand: "You enjoy freedom, open-mindedness, and natural beauty. Wellington, New Zealand, aligns with your easygoing and flexible lifestyle.",
  switzerland: "You prefer order, quiet, and balance. Lucerne, Switzerland, is a peaceful place with high stability and natural charm.",
  canada: "You appreciate cultural diversity, kindness, and a balanced lifestyle. Vancouver, Canada, reflects your friendly and thoughtful spirit.",
  germany: "You are logical, direct, and value structure. Munich, Germany, fits your preference for clarity and efficient living.",
  france: "You’re drawn to creativity, challenge, and depth. Paris, France, matches your artistic and ambitious mindset.",
  spain: "You value joy, passion, and warmth. Barcelona, Spain, reflects your energetic and expressive personality.",
  japan: "You respect tradition, detail, and stability. Tokyo, Japan, aligns with your disciplined and harmonious character.",
  usa: "You love fast-paced energy, diversity, and opportunity. New York City, USA, is a perfect match for your dynamic lifestyle.",
  korea: "You thrive in dynamic, community-centered, and driven environments. Seoul, South Korea, suits your ambitious and social energy.",
};



// 빈 점수판 초기화 함수
function initializeScoreObj() {
  return {
    iceland: 0, newzealand: 0, switzerland: 0, canada: 0, germany: 0,
    france: 0, spain: 0, japan: 0, usa: 0, korea: 0,
  };
}

// 퀴즈 페이지 (quiz1, quiz2) 공통 점수 누적 로직
function updateCountryScoresFromSliders(pagePart) {
  const sliders = document.querySelectorAll("input[type='range']");
  const scores = initializeScoreObj();

  sliders.forEach((slider, index) => {
    const val = parseInt(slider.value);
    const realIndex = pagePart === 1 ? index : index + 5; // quiz2는 6~10번 질문

    if (val >= 60) {
      switch (realIndex) {
        case 0: scores.iceland += 1; break;
        case 1: scores.newzealand += 1; break;
        case 2: scores.usa += 1; break;
        case 3: scores.canada += 1; break;
        case 4: scores.korea += 1; break;
        case 5: scores.korea += 1; break;
        case 6: scores.france += 1; break;
        case 7: scores.germany += 1; break;
        case 8: scores.spain += 1; break;
        case 9: scores.japan += 1; break;
      }
    } else if (val <= 40) {
      switch (realIndex) {
        case 0: scores.korea += 1; break;
        case 1: scores.germany += 1; break;
        case 2: scores.switzerland += 1; break;
        case 3: scores.japan += 1; break;
        case 4: scores.iceland += 1; break;
        case 5: scores.switzerland += 1; break;
        case 6: scores.switzerland += 1; break;
        case 7: scores.japan += 1; break;
        case 8: scores.canada += 1; break;
        case 9: scores.spain += 1; break;
      }
    }
  });

  return scores;
}

// 점수 누적 합산
function combineScores(score1, score2) {
  const combined = initializeScoreObj();
  for (const key in combined) {
    combined[key] = (score1[key] || 0) + (score2[key] || 0);
  }
  return combined;
}

// 결과 보여주기 (result.html)
function showFinalResult() {
  const resultText = document.getElementById("resultText");
  const resultImage = document.getElementById("resultImage");
  if (!resultText || !resultImage) return;

  const scores = JSON.parse(localStorage.getItem("quizFinalScores"));
  if (!scores) {
    resultText.textContent = "Oops! Something went wrong. Please try again.";
    return;
  }

  let bestCountry = null;
  let bestScore = -Infinity;
  for (const [country, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      bestCountry = country;
    }
  }

  const result = countryInfo[bestCountry];
  const description = resultDescriptions[bestCountry];

  resultText.textContent = `Your perfect place is ${result.name}!\n\n${description}`;
  resultImage.src = result.img;
}

// 페이지 로딩 시 버튼 이벤트 등록
document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");

  // quiz1.html
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const scores = updateCountryScoresFromSliders(1);
      localStorage.setItem("quizPart1", JSON.stringify(scores));
      window.location.href = "quiz2.html";
    });
  }

  // quiz2.html
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const part1 = JSON.parse(localStorage.getItem("quizPart1")) || initializeScoreObj();
      const part2 = updateCountryScoresFromSliders(2);
      const final = combineScores(part1, part2);
      localStorage.setItem("quizFinalScores", JSON.stringify(final));
      window.location.href = "result.html";
    });
  }

  // result.html
  showFinalResult();
});
