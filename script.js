const grid = document.createElement("div");
// REMOVE this ↓ line
// grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
grid.style.gap = "1rem";

const quizData = [
	{
		image: "images/000.png", 
		answers: ["YmVjaGVyZ2xhcw=="]
	},
	{
		image: "images/001.png", 
		answers: ["YnVuc2VuYnJlbm5lcg=="]
	},
	{
		image: "images/002.png", 
		answers: ["YsO8cmV0dGU="]
	},
	{
		image: "images/003.png", 
		answers: ["YsO8cmV0dGVua2xhbW1lcg==", "YsO8cmV0dGVuaGFsdGVy"]
	},
	{
		image: "images/004.png", 
		answers: ["Y29iYWx0Z2xhcw==", "a29iYWx0Z2xhcw=="]
	},
	{
		image: "images/005.png", 
		answers: ["ZHJhaHRuZXR6", "ZHJhaHRuZXR6IG1pdCBrZXJhbWlrZWlubGFnZQ==", "ZHJhaHRuZXR6IG1pdCBrZXJhbWlrZWlubGFnZWZlbGQ="]
	},
	{
		image: "images/006.png", 
		answers: ["ZHJlaWZ1w58="]
	},
	{
		image: "images/007.png", 
		answers: ["ZXJsZW5tZXllcmtvbGJlbg=="]
	},
	{
		image: "images/008.png", 
		answers: ["ZmlsdHJpZXJnZXN0ZWxs"]
	},
	{
		image: "images/009.png", 
		answers: ["Z2Fzc2NobGF1Y2g=", "c2NobGF1Y2ggZsO8ciBidW5zZW5icmVubmVy"]
	},
	{
		image: "images/010.png", 
		answers: ["Z2xhc2ZyaXR0ZQ==", "Z2xhc2ZpbHRlcnRpZWdlbA==", "ZnJpdHRl"]
	},
	{
		image: "images/011.png", 
		answers: ["Z2xhc2hhaG4=", "a8O8a2Vu", "Z2xhc2vDvGtlbg=="]
	},
	{
		image: "images/012.png", 
		answers: ["Z2xhc3N0YWI="]
	},
	{
		image: "images/013.png", 
		answers: ["Z3VtbWlodXQ=", "Z3VtbWlow7x0Y2hlbg==", "Z3VtbWlzYXVnZXI="]
	},
	{
		image: "images/014.png", 
		answers: ["Z3VtbWltYW5zY2hldHRl"]
	},
	{
		image: "images/015.png", 
		answers: ["aGFrZW5rbGVtbWU=", "aGFrZW5tdWZmZQ==", "aGFsdGVydW5nIGbDvHIgc3RhdGl2c3Rhbmdl"]
	},
	{
		image: "images/016.png", 
		answers: ["aW5kaWthdG9ycGFwaWVy", "dW5pdmVyc2FsaW5kaWthdG9y", "dW5pdmVyc2FsaW5kaWthdG9ycGFwaWVy"]
	},
	{
		image: "images/017.png", 
		answers: ["aW9uZW53aXNjaGVy"]
	},
	{
		image: "images/018.png", 
		answers: ["a3JldXptdWZmZQ==", "ZG9wcGVsbXVmZmU=", "a3JldXpkb3BwZWxtdWZmZQ=="]
	},
	{
		image: "images/019.png", 
		answers: ["bWFnbmVzaWFyaW5uZQ==", "bWFnbmVzaWFyaW5uZW4="]
	},
	{
		image: "images/020.png", 
		answers: ["bWFnbmVzaWFzdMOkYmNoZW4="]
	},
	{
		image: "images/021.png", 
		answers: ["bWFnbmV0csO8aHJlcg==", "bWFnbmV0csO8aHJlciBtaXQgaGVpenBsYXR0ZQ=="]
	},
	{
		image: "images/022.png", 
		answers: ["bWVzc2tvbGJlbg=="]
	},
	{
		image: "images/023.png", 
		answers: ["bWVzc3p5bGluZGVy", "c3RhbmR6eWxpbmRlcg=="]
	},
	{
		image: "images/024.png", 
		answers: ["bnV0c2NoZQ==", "YsO8Y2huZXJ0cmljaHRlcg==", "cG9yemVsbGFubnV0c2NoZQ=="]
	},
	{
		image: "images/025.png", 
		answers: ["b2JqZWt0dHLDpGdlcg=="]
	},
	{
		image: "images/026.png", 
		answers: ["cGVsZXVzYmFsbA==", "c2ljaGVyaGVpdHNwaXBldHRpZXJiYWxs", "cGlwZXR0aWVyYmFsbA=="]
	},
	{
		image: "images/027.png", 
		answers: ["cGluemV0dGU="]
	},
	{
		image: "images/028.png", 
		answers: ["cGlwZXR0ZQ==", "cGFzdGV1cnBpcGV0dGU="]
	},
	{
		image: "images/029.png", 
		answers: ["cGlzdGlsbA=="]
	},
	{
		image: "images/030.png", 
		answers: ["cG9yemVsbGFubcO2cnNlcg==", "bcO2cnNlcg==", "cmVpYnNjaGFsZQ=="]
	},
	{
		image: "images/031.png", 
		answers: ["cG9yemVsbGFuc2NoYWxl", "YWJkYW1wZnNjaGFsZQ=="]
	},
	{
		image: "images/032.png", 
		answers: ["cHLDpHBhcmF0ZWdsYXM=", "cm9sbHJhbmRnbGFz", "c2NobmFwcGRlY2tlbGdsYXM="]
	},
	{
		image: "images/033.png", 
		answers: ["cHZjIHRyaWNodGVy", "dHJpY2h0ZXI=", "dHJpY2h0ZXIgcHZj"]
	},
	{
		image: "images/034.png", 
		answers: ["cmVhZ2VuemdsYXNiw7xyc3Rl"]
	},
	{
		image: "images/035.png", 
		answers: ["cmVhZ2VuemdsYXNrbGFtbWVy", "cmVhZ2VuemdsYXNoYWx0ZXI="]
	},
	{
		image: "images/036.png", 
		answers: ["cmVhZ2VuemdsYXNzdMOkbmRlcg=="]
	},
	{
		image: "images/037.png", 
		answers: ["cnVuZGZpbHRlcg==", "ZmlsdGVycGFwaWVy"]
	},
	{
		image: "images/038.png", 
		answers: ["csO8aHJmaXNjaA=="]
	},
	{
		image: "images/039.png", 
		answers: ["csO8aHJmaXNjaGFuZ2Vs"]
	},
	{
		image: "images/040.png", 
		answers: ["c2F1Z2ZsYXNjaGU="]
	},
	{
		image: "images/041.png", 
		answers: ["c2NobmVsbGxhdWZ0cmljaHRlcg=="]
	},
	{
		image: "images/042.png", 
		answers: ["c3BhdGVs"]
	},
	{
		image: "images/043.png", 
		answers: ["c3ByaXR6Zmxhc2NoZQ=="]
	},
	{
		image: "images/044.png", 
		answers: ["c3RhdGl2a2xlbW1l", "c3RhdGl2a2xhbW1lcg=="]
	},
	{
		image: "images/045.png", 
		answers: ["c3RhdGl2cmluZw=="]
	},
	{
		image: "images/046.png", 
		answers: ["c3RhdGl2c3Rhbmdl"]
	},
	{
		image: "images/047.png", 
		answers: ["dGllZ2VsemFuZ2U="]
	},
	{
		image: "images/048.png", 
		answers: ["dGllZ2Vs", "dGllZ2VsIG1pdCBkZWNrZWw="]
	},
	{
		image: "images/049.png", 
		answers: ["dG9uZHJlaWVjaw=="]
	},
	{
		image: "images/050.png", 
		answers: ["dHJvcGZmbGFzY2hl"]
	},
	{
		image: "images/051.png", 
		answers: ["dMO8cGZlbHBsYXR0ZQ=="]
	},
	{
		image: "images/052.png", 
		answers: ["dWhyZ2xhcw=="]
	},
	{
		image: "images/053.png", 
		answers: ["dm9sbHBpcGV0dGU="]
	},
	{
		image: "images/054.png", 
		answers: ["d2Fzc2Vyc3RyYWhscHVtcGU="]
	},
	{
		image: "images/055.png", 
		answers: ["d8OkZ2VnbGFz", "cGV0cmlzY2hhbGU="]
	}
];

function decodeBase64Utf8(str) {
  return decodeURIComponent(
    Array.prototype.map.call(atob(str), c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')
  );
}

let currentQuestion = 0;
let score = 0;
let wrongAnswers = [];

const quizImage = document.getElementById("quiz-image");
const answerBox = document.getElementById("answer-box");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => []);
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }
  return dp[a.length][b.length];
}

function similarity(a, b) {
  let distance = levenshtein(a, b);
  let maxLen = Math.max(a.length, b.length);
  return 1 - distance / maxLen;
}

function loadQuestion() {
  let q = quizData[currentQuestion];
  quizImage.src = q.image;
  answerBox.value = "";
  feedback.textContent = "";
  answerBox.style.backgroundColor = "white";
  answerBox.style.border = "1px solid #ccc";
  nextBtn.disabled = true;
  submitBtn.disabled = false;
}

function checkAnswer() {
  let q = quizData[currentQuestion];
  let userAnswer = answerBox.value.trim().toLowerCase();
  let decodedAnswers = q.answers.map(a => decodeBase64Utf8(a).toLowerCase());

  let isCorrect = decodedAnswers.some(ans => ans === userAnswer);
  let isClose = decodedAnswers.some(ans => similarity(userAnswer, ans) > 0.7);

  if (isCorrect) {
    feedback.textContent = "✅ Korrekt!";
    feedback.style.color = "green";
    score++;
  } else if (isClose) {
    feedback.textContent = `⚠️ Knapp vorbei. Punkt anerkannt. Korrekte Namen: ${decodedAnswers.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(", ")}`;
    feedback.style.color = "orange";
    answerBox.style.backgroundColor = "#fff8e1";
    answerBox.style.border = "2px solid orange";
    score++;
  } else {
    feedback.textContent = `❌ Falsch! Korrekte Namen: ${decodedAnswers.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(", ")}`;
    feedback.style.color = "red";

    wrongAnswers.push({
      image: q.image,
      correct: decodedAnswers
    });
  }

  submitBtn.disabled = true;
  nextBtn.disabled = false;
}

submitBtn.onclick = checkAnswer;

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
};

// 🔑 Handle Enter key for submit/next
answerBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    if (!submitBtn.disabled) {
      checkAnswer();
    } else if (!nextBtn.disabled) {
      nextBtn.click();
    }
  }
});

function showResults() {
  quizImage.style.display = "none";
  answerBox.style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";
  feedback.textContent = "";

  const resultContainer = document.createElement("div");
  resultContainer.id = "results";

  if (wrongAnswers.length > 0) {
    const mistakesTitle = document.createElement("h2");
    mistakesTitle.textContent = "DEINE FEHLER:";
    resultContainer.appendChild(mistakesTitle);

    const grid = document.createElement("div");
    grid.classList.add("mistakes-grid");

    wrongAnswers.forEach(({ image, correct }) => {
      const item = document.createElement("div");
      item.classList.add("mistake-item");

      const img = document.createElement("img");
      img.src = image;

      const caption = document.createElement("span");
      caption.textContent = correct
        .map(a => a.charAt(0).toUpperCase() + a.slice(1))
        .join(", ");

      item.appendChild(img);
      item.appendChild(caption);
      grid.appendChild(item);
    });

    resultContainer.appendChild(grid);
  } else {
    const noMistakes = document.createElement("p");
    noMistakes.textContent = "🎉 Perfect! You made no mistakes.";
    resultContainer.appendChild(noMistakes);
  }

  // Final score box
  const ratio = score / quizData.length;
  function ratioToColor(r) {
    if (r < 0.5) {
      let t = r / 0.5;
      return `rgba(255, ${Math.round(165*t)}, 0, 0.8)`;
    } else {
      let t = (r - 0.5) / 0.5;
      let rVal = Math.round(255*(1-t));
      let gVal = Math.round(165 + (128-165)*t);
      return `rgba(${rVal}, ${gVal}, 0, 0.8)`;
    }
  }

  const finalScore = document.createElement("div");
  finalScore.textContent = `Your final score is ${score}/${quizData.length}`;
  finalScore.style.padding = "1rem";
  finalScore.style.marginTop = "1rem";
  finalScore.style.fontSize = "1.2rem";
  finalScore.style.textAlign = "center";
  finalScore.style.backgroundColor = ratioToColor(ratio);
  finalScore.style.borderRadius = "8px";
  finalScore.style.color = "white";
  resultContainer.appendChild(finalScore);

  document.body.appendChild(resultContainer);
}

loadQuestion();
