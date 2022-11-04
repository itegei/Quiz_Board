const quizAnswers = document.querySelectorAll(".ouranswers");
const submitAnswer = document.querySelector("#finished");
const finalAnswer = document.querySelector("#finalscore");
let marks = 0;
let total = 0;
quizAnswers.forEach(function (jibu) {
    if(parseInt(jibu.value) > 0) {
        total += parseInt(jibu.value);
    }
    else{
        total = total;
    }
    jibu.addEventListener("change", function (event) {
        marks += parseInt(event.target.value);
    });
});
submitAnswer.addEventListener("click", function (e) {
    let score = ((marks/total)*100).toFixed(0);
    let level = "";

    if (score >= 80){
        level += " Excellent performance, keep it up!";
    }
    else if(score >= 50 && score < 80 ){
        level += " Average performance, you can do better";
    }
    else{
        level += " Poor performance, Please retake the test.";
    }
    // alert("Your score is " + score + "%." + level);
    finalAnswer.innerHTML += level;
});
// $("#finished").click(function() {
//     $("#results").removeClass("d-none");
//      $("#results").text("You have scored: " + score + "%." + level)
    
// });