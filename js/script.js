// Only run on the pledge page
if (document.getElementById("pledgeForm")) {
const ideaInput = document.getElementById("idea");
const charCount = document.getElementById("charCount");
const pledgeForm = document.getElementById("pledgeForm");
const pledgeWall = document.getElementById("pledgeWall");
let pledges = [];

// Char count<200
ideaInput.addEventListener("input", () => {
  charCount.textContent = `${ideaInput.value.length} / 200 characters`;
});

// Form validation
pledgeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  clearValidation();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const habit = document.getElementById("habitSelect").value;
  const idea = document.getElementById("idea").value.trim() || "No idea shared";
  const radioChecked = document.querySelector("input[name='practiceHabits']:checked");

  let valid = true;

  if (name === "") {
    showError("name", "Please enter your name.");
    valid = false;
  }

  if (!validateEmail(email)) {
    showError("email", "Please enter a valid email address.");
    valid = false;
  }

  if (habit === "") {
    showError("habitSelect", "Please select a habit.");
    valid = false;
  }

  if (!radioChecked) {
    document.getElementById("practiceError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("practiceError").style.display = "none";
  }

  if (!valid) return;

  const pledge = { name, habit, idea };
  pledges.push(pledge);
  displayPledges();
  alert("Thank you for your pledge!");
  pledgeForm.reset();
  charCount.textContent = "0 / 200 characters";
});

// pledge display
function displayPledges() {
  pledgeWall.innerHTML = "";
  for (let i = 0; i < pledges.length; i++) {
    const pledgeCard = document.createElement("div");
    pledgeCard.className = "col-md-4";
    pledgeCard.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${pledges[i].name}</h5>
          <p class="card-text"><strong>Pledged Habit:</strong> ${pledges[i].habit}</p>
          <p class="card-text"><strong>Idea:</strong> ${pledges[i].idea}</p>
        </div>
      </div>`;
    pledgeWall.appendChild(pledgeCard);
  }
}

// Error alert
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + "Error");
  field.classList.add("is-invalid");
  error.textContent = message;
  error.style.display = "block";
}

// Cls all errors
function clearValidation() {
  const fields = ["name", "email", "habitSelect"];
  fields.forEach(id => {
    const field = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    field.classList.remove("is-invalid");
    error.style.display = "none";
  });
  document.getElementById("practiceError").style.display = "none";
}

// email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

}
