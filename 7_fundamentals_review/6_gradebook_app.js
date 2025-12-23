const getAverage = arr => arr.reduce((acc, curr) => acc += curr ,0) / arr.length;

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scoresArr, studentScore) {
  const resStr = 'Class average: ' + getAverage(scoresArr) + "." + " Your grade: " + getGrade(studentScore) + "." + " You " + (hasPassingGrade(studentScore) ? "passed" : "failed") + " the course."
  return resStr;
}

