const scores = [85, 72, 91, 64, 78];
 
console.log("Student Scores:");
scores.forEach((score) => {
  console.log(score);
});
 
function getRemark(score) {
  if (score >= 90 && score <= 100) {
    return "Excellent";
  } else if (score >= 80 && score <= 89) {
    return "Very Good";
  } else if (score >= 75 && score <= 79) {
    return "Good";
  } else {
    return "Failed";
  }
}
 
function getStatus(score) {
  return score >= 75 ? "Passed" : "Failed";
}
 
let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passedCount = 0;
let failedCount = 0;
 
console.log("");
 
scores.forEach((score, index) => {
  const remark = getRemark(score);
  const status = getStatus(score);
 
  if (status === "Passed") {
    console.log(`Student ${index + 1}: ${score} - ${remark} - ${status}`);
  } else {
    console.log(`Student ${index + 1}: ${score} - ${status}`);
  }
 
  total += score;
 
  if (score > highest) highest = score;
  if (score < lowest) lowest = score;
 
  if (status === "Passed") {
    passedCount++;
  } else {
    failedCount++;
  }
});
 
const average = total / scores.length;
 
console.log("");
console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);