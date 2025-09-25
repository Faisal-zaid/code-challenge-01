function gradeCalculator(marks) {
  //const marks=69;
  // the marks have been declared so that i could gauge the code is working
  let grade;

  if (marks < 0) {
    grade = "wrong input";
  }
  // this argument has been put so the code doesnt allow anything below 0
  else if (marks > 100) {
    grade = "cant be above 100";
  }
  //this argument is here so that the code wont accept anything above 100
  else if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 49) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  //line 13 to line 27 are the arguments that are meant to check where
  //the marks declared above fit for which grade
  //console.log(grade)

  //prints the grade

  return grade;
}

console.log(gradeCalculator(47));
