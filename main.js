function calcGrade(grade) {
    let letter;
    if (grade >= 90) {
        letter = 'A';
    } else if (grade >= 80) {
        letter = 'B';
    } else if (grade >= 70) {
        letter = 'C';
    } else if (grade >= 60) {
        letter = 'D';
    } else {
        letter = 'F';
    }

    alert(`Your grade is ${grade}. Your grade letter is ${letter}.`);
}



let assignments = prompt("How many assignment do you have to grade (max 10): ");

if (assignments > 10) {
    alert("You have listed too many assignments. Please exit out of the program and retry.");
} else if (assignments <= 0){
    alert("You have not listed enough assignments. Please exit out of the program and retry.");
} else {
    alert("You can move on to the next step!");
}


function calcContinuousAvg() {
    let totalScore = 0;
    let numOfAssignments = 0;
    let continueInput = true;

    while (continueInput) {
        let input = prompt("Please enter the score for an assignment (percentage), or type 'done' to finish: ");

        if (input.toLowerCase() === "done") {
            continueInput = false;
        } else {
            let assignmentScore = parseInt(input);
            if (!isNaN(assignmentScore) && assignmentScore >= 0 && assignmentScore <= 100) {
                totalScore += assignmentScore;
                numOfAssignments++;
            } else {
                alert("You have not entered an input between 0 and 100. Please exit out of the program and retry.")
            }
        }

    }

    if (numOfAssignments > 0) {
        let avg = totalScore / numOfAssignments;
        calcGrade(avg);
    } else {
        alert("No valid scores were entered. Please exit out of the program and retry.")
    }
}

calcContinuousAvg();


let redo = prompt("Would you like to repeat the program?");
if (redo.toLowerCase() === "yes") {
    alert("Please refresh the page to continue.")
} else {
    alert("Thank you for using this applicaiton!")
}