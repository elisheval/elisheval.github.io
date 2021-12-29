class Question {
    constructor(code, question, numSiduri, score) {
        this.code = code;
        this.Question = question;
        this.numSiduri = numSiduri;
        this.score = score;
        this.answer = "";
    }

    IsAnswered() {
        console.log(this.answer);
        if (this.answer)
            return true;
        return false;
    }
    GetScore() {
        if (this.IsAnswered())
           return this.score;
      return this.score*-1;
    }

}


class Test {
    constructor(code, questionList, testZman) {
        this.code = code;
        this.questionList =questionList;
        this.studentName = "";
        this.testZman = testZman;
        this.startTime = null;
    }
    StartTest(name) {
        this.studentName = name;
        var currentdate =new Date();
        this.startTime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    }
    GetOrderredQuestion(){
       this.questionList.sort((a, b) => (a.numSiduri > b.numSiduri) ? 1 : -1);
        return this.listQuestion;
    }

}


let q1 = new Question("#11", "what is the 2 last lettes?", 1, 5);
let q2 = new Question("#22", "what is the 2 first letters?",2, 10);
let q3 = new Question("#33", "what is the middle letter?", 3, 15);
let q4 = new Question("#44", "what is the last letter?",4, 20);
let q5 = new Question("#55", "what is the 3 first letter?", 5, 25);
let q6 = new Question("#66", "what is the first letter?",6, 25);

let questionList=[q6,q3,q1,q5,q2,q4];
// for(let i=0;i<questionList.length;i++)
// {
//     questionList.score=GetScore();
//     console.log(questionList.score);
// }

let test1 =new Test("#1111",questionList,25);
test1.StartTest("elisheva grinboim:)");
test1.GetOrderredQuestion();
test1.questionList[0].answer="z y";

console.log(questionList);
console.log(test1);


