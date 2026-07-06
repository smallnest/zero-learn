// quiz.js — shared retrieval-practice widget for the Zero Architecture course.
// Markup contract:
//   <div class="quiz" data-answer="1">
//     <p class="q">Question?</p>
//     <button class="opt">Option A</button>
//     <button class="opt">Option B</button>   <!-- index 1 = correct -->
//     <div class="fb" data-correct="why right" data-wrong="why wrong"></div>
//   </div>
// data-answer is the 0-based index of the correct option.
document.addEventListener("click", (e) => {
  const opt = e.target.closest(".quiz .opt");
  if (!opt) return;
  const quiz = opt.closest(".quiz");
  if (quiz.dataset.done) return;

  const opts = [...quiz.querySelectorAll(".opt")];
  const chosen = opts.indexOf(opt);
  const answer = parseInt(quiz.dataset.answer, 10);
  const fb = quiz.querySelector(".fb");

  opts[answer].classList.add("correct");
  if (chosen !== answer) opt.classList.add("wrong");

  fb.textContent = chosen === answer
    ? (fb.dataset.correct || "Correct.")
    : (fb.dataset.wrong || "Not quite — see the highlighted answer.");
  quiz.dataset.done = "1";
});
