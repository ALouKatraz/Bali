let date = new Date();
let date2 = new Date("august 1, 2024 00:00:00 UTC+1");

// différence des jours
function jour_diff() {
  let time_dif = date2.getTime() - date.getTime();
  let days_diff = Math.ceil(time_dif / (1000 * 3600 * 24));
  return days_diff;
}

document.getElementById("bali").innerHTML =
  "Je pars à Bali dans " + jour_diff() + " jours";
