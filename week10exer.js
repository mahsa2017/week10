//this function prints hello for 5 times
function printHelloFiveTimes() {
    for (var i = 0; i < 5; i++)
        console.log("Hello");
}
printHelloFiveTimes();
////////////////////////////////////////////////////
//says hello to mentors
var mentors = ["Mozafar", "Rares", "Tim", "Ashleigh", "Gordon"];
function welcomeMentors(arr) {
    for (var i = 0; i < arr.length; i++)
        console.log("Hello " + arr[i]);
}
welcomeMentors(mentors);
///////////////////////////////////////////////////
// this function calculates netIncome based on nationalinsurance and incometax
var incomeTax = [1000, 580]; // incometaxes
function netIncomeCalc(salary, incomeTax) {
    var totalIncomeTax = 0;
    var studentLoan = (salary - 17775) * 0.09;
    var netSalary = salary;
    var nationalInsurance = 0;
    for (var i = 0; i < incomeTax.length; i++) {
        totalIncomeTax += incomeTax[i];
    };
    nationalInsurance = nationalInsuranceCalc("1150L", salary);
    var deductions = [nationalInsurance, totalIncomeTax, studentLoan];
    for (var i = 0; i < deductions.length; i++) {
        netSalary -= deductions[i];
    };
    return (
        "Your gross income is £" +
        salary.toString() +
        " and your net income is £" +
        netSalary.toString() +
        "."
    );
};
//function calculates nationalinsurance based on taxcode
function nationalInsuranceCalc(taxCode, salary) {
    var nationalInsurance = 0;
    if (taxCode === "1150L") {
        nationalInsurance = salary * 0.1;
    } else if (taxCode === "ST") {
        nationalInsurance = salary * 0.05;
    } else {
        nationalInsurance = salary * 0.08;
    }
    return nationalInsurance;
};
console.log(netIncomeCalc(28000, incomeTax));
///////////////////////////////////////////////////
var mentors = ["Mozafar", "Rares", "Tim", "Ashleigh", "Gordon"];
var m = "";
// this function calculate vowels in mentors names
function getVowels(str) {
    m = str.match(/[aeiou]/gi);
};
for (var i = 0; i < mentors.length; i++) {
    getVowels(mentors[i]);
    console.log("Mentor " + mentors[i] + " has " + m.length + " vowels");
};
//////////////////////////////////////////////////




