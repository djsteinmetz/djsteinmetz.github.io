// Database call
// Initialize Firebase
var config = {
    apiKey: "AIzaSyApltuvOtyyXPBfPc1PoBRUY5RPnSIibww",
    authDomain: "hogwarts-express-schedule.firebaseapp.com",
    databaseURL: "https://hogwarts-express-schedule.firebaseio.com",
    projectId: "hogwarts-express-schedule",
    storageBucket: "hogwarts-express-schedule.appspot.com",
    messagingSenderId: "737166235287"
};
firebase.initializeApp(config);
var database = firebase.database();

function calculateMonthsWorked(startDay) {
    var monthsWorked = moment(moment(), 'months').diff(startDay, "months");
    // Ternary statement to filter out the NAN values.  They are expressions, they evaluate to a value.
    // Not an if-then statement, it is an evaluation.
    return isNaN(monthsWorked) ? 0 : monthsWorked;
}

function calculateTotalBilled(monthsWorked, employeeMonthlyRate) {
    var totalBilled = (monthsWorked * employeeMonthlyRate);
    return totalBilled;
}

$("#add-train").on("click", function (event) {
    event.preventDefault();
    console.log("hello")
    // Display the info to the HTML
    employeeName = $("#train-number-input").val().trim();
    employeeRole = $("#destination-input").val().trim();
    employeeStartDate = $("#first-train-input").val().trim();
    employeeMonthlyRate = $("#frequency-input").val().trim();
    // Pushing new data to the database
    database.ref().push({
        employeeName: employeeName,
        employeeRole: employeeRole,
        employeeStartDate: employeeStartDate,
        employeeMonthlyRate: employeeMonthlyRate,
        dataAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

// database.ref().on("child_added", function (snapshot) {
//     var monthsWorked = calculateMonthsWorked(snapshot.val().employeeStartDate);
//     console.log("about to append to the DOM")

//     var totalBilled = calculateTotalBilled(monthsWorked, snapshot.val().employeeMonthlyRate)
//     console.log(totalBilled);
//     // console.log(snapshot.val())
//     $("#nameDisplay").append("<p>" + snapshot.val().employeeName + "</p>");
//     $("#roleDisplay").append("<p>" + snapshot.val().employeeRole + "</p>");
//     $("#startDateDisplay").append("<p>" + snapshot.val().employeeStartDate + "</p>");
//     $("#monthlyRateDisplay").append("<p>" + snapshot.val().employeeMonthlyRate + "</p>");
//     $("#monthsWorkedDisplay").append("<p>" + monthsWorked + " months" + "</p>");
//     $("#totalBilledDisplay").append("<p>" + "$" + totalBilled);
// });