# Where in the World Do You Belong?

"This project began from a deep personal question
I've carried with me as an international student. While studying in the United States, I often found myself wondering, "Am I someone who truly belongs here?" Caught between my home country, South Korea, and the place I now live, I constantly
questioned where I really fit in. Based on this experience, I wanted to create an interactive quiz for people like me--those who are unsure where they might feel most at home. By analyzing the user's personality, values, and lifestyle, this quiz suggests which country in the world may best suit them. Beyond just a fun activity, I hope it can serve as a tool for self-reflection and a
way to explore new directions in life."

## project structure

├── index.html // Start page ├── quiz1.html // Questions 1–5 ├── quiz2.html // Questions 6–10 ├── result.html // Final result page ├── script.js // Shared JS logic for all pages ├── style.css // Overall styling ├── /images // Folder for city images │ ├── seoul.png │ ├── tokyo.png │ ├── ...

## main function

- Slider-based input for intuitive UX
- Question-by-question score branching for more meaningful results
- localStorage used to maintain score data across pages
- Displays the most suitable city with a result image and text

## how to use

1. Answer questions 1–5 on `quiz1.html`, then click "Next"
2. Answer questions 6–10 on `quiz2.html`, then click "See My Result"
3. The result will be shown on `result.html` with your recommended city

## Technology stack

- HTML / CSS / JavaScript

## JavaScript Logic

- `updateCountryScoresFromSliders(part)`: Calculates scores for each country based on slider input
- `combineScores(score1, score2)`: Merges scores from quiz1 and quiz2
- `showFinalResult()`: Displays the result with the highest score
- localStorage keys:
  - `quizPart1`: Stores score from quiz1
  - `quizFinalScores`: Stores combined final score

## image files

| City         | Image Filename      |
|--------------|---------------------|
| Seoul        | seoul.png           |
| Tokyo        | tokyo.png           |
| New York     | newyork.png         |
| Barcelona    | barcelona.png       |
| Paris        | paris.png           |
| Munich       | munich.png          |
| Reykjavik    | reykjavik.png       |
| Wellington   | wellington.png      |
| Lucerne      | lucerne.png         |
| Vancouver    | vancouver.png       |
