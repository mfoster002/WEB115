// Function to clear all form inputs
function clearForm() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('wgoal').value = '';
    document.getElementById('mondaybfast').value = '';
    document.getElementById('mondays').value = '';
    document.getElementById('mondayl').value = '';
    document.getElementById('mondays2').value = '';
    document.getElementById('mondayd').value = '';
    document.getElementById('tuesdaybfast').value= '';
    document.getElementById('tuesdays').value= '';
    document.getElementById('tuesdayl').value= '';
    document.getElementById('tuesdays2').value= '';
    document.getElementById('tuesdayd').value= '';
    document.getElementById('wednesdaybfast').value= '';
    document.getElementById('wednesdays').value= '';
    document.getElementById('wednesdayl').value= '';
    document.getElementById('wednesdays2').value= '';
    document.getElementById('wednesdayd').value= '';
    document.getElementById('thursdaybfast').value= '';
    document.getElementById('thursdays').value= '';
    document.getElementById('thursdayl').value= '';
    document.getElementById('thursdays2').value= '';
    document.getElementById('thursdayd').value= '';
    document.getElementById('fridaybfast').value= '';
    document.getElementById('fridays').value= '';
    document.getElementById('fridayl').value= '';
    document.getElementById('fridays2').value= '';
    document.getElementById('fridayd').value= '';
    document.getElementById('saturdaybfast').value= '';
    document.getElementById('saturdays').value= '';
    document.getElementById('saturdayl').value= '';
    document.getElementById('saturdays2').value= '';
    document.getElementById('saturdayd').value= '';
    document.getElementById('sundaybfast').value= '';
    document.getElementById('sundays').value= '';
    document.getElementById('sundayl').value= '';
    document.getElementById('sundays2').value= '';
    document.getElementById('sundayd').value= '';
}
//function to create meal plan
function createMealPlan(event) {
//validate email address
var email = document.getElementById('email').value;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//this will only allow a meal plan with a valid email
if(email.match(emailRegex)){
//monday meals field values
var name = document.getElementById('fname').value;
var goal = document.getElementById('wgoal').value;
var mondaybfast = document.getElementById('mondaybfast').value;
var mondays = document.getElementById('mondays').value;
var mondayl = document.getElementById('mondayl').value;
var mondays2 = document.getElementById('mondays2').value;
var mondayd = document.getElementById('mondayd').value;
//tuesday meals field values
var tuesdaybfast = document.getElementById('tuesdaybfast').value;
var tuesdays = document.getElementById('tuesdays').value;
var tuesdayl = document.getElementById('tuesdayl').value;
var tuesdays2 = document.getElementById('tuesdays2').value;
var tuesdayd = document.getElementById('tuesdayd').value;
//wednesday meals field values
var wednesdaybfast = document.getElementById('wednesdaybfast').value;
var wednesdays = document.getElementById('wednesdays').value;
var wednesdayl = document.getElementById('wednesdayl').value;
var wednesdays2 = document.getElementById('wednesdays2').value;
var wednesdayd = document.getElementById('wednesdayd').value;
//thursday meals field values
var thursdaybfast = document.getElementById('thursdaybfast').value;
var thursdays = document.getElementById('thursdays').value;
var thursdayl = document.getElementById('thursdayl').value;
var thursdays2 = document.getElementById('thursdays2').value;
var thursdayd = document.getElementById('thursdayd').value;
//friday meals field values
var fridaybfast = document.getElementById('fridaybfast').value;
var fridays = document.getElementById('fridays').value;
var fridayl = document.getElementById('fridayl').value;
var fridays2 = document.getElementById('fridays2').value;
var fridayd = document.getElementById('fridayd').value;
//saturday meals field values
var saturdaybfast = document.getElementById('saturdaybfast').value;
var saturdays = document.getElementById('saturdays').value;
var saturdayl = document.getElementById('saturdayl').value;
var saturdays2 = document.getElementById('saturdays2').value;
var saturdayd = document.getElementById('saturdayd').value;
//sunday meals field values
var sundaybfast = document.getElementById('sundaybfast').value;
var sundays = document.getElementById('sundays').value;
var sundayl = document.getElementById('sundayl').value;
var sundays2 = document.getElementById('sundays2').value;
var sundayd = document.getElementById('sundayd').value;
//Personalized heading and text (name and goal)
var mealPlanHTML = "<h1>" + name +"'s personalized meal plan</h1>";
mealPlanHTML += "<p>Hi " + name + ", we'd love to help you with your goal this week!</p>";
mealPlanHTML += "<p>Your goal was " + goal + ".</p>";
//Personalized output for meal values
// Groups output into rows and columns by day
mealPlanHTML += "<div class='days-row'>";
mealPlanHTML += "<div class='day-column'>";
mealPlanHTML += "<h3>Monday's meals</h3>";
mealPlanHTML += "<ul>";
mealPlanHTML += "<li>Breakfast:<strong>" + mondaybfast + "</strong></li>";
mealPlanHTML += "<li>Snack:<strong>" + mondays + "</strong></li>";
mealPlanHTML += "<li>Lunch:<strong>" + mondayl + "</strong></li>";
mealPlanHTML += "<li>Second Snack:<strong>" + mondays2 + "</strong></li>";
mealPlanHTML += "<li>Dinner:<strong>" + mondayd + "</strong></li>";
mealPlanHTML += "</ul>";
mealPlanHTML += "</div>";

mealPlanHTML += "<div class='day-column'>";
mealPlanHTML += "<h3>Tuesday's meals</h3>";
mealPlanHTML += "<ul>";
mealPlanHTML += "<li>Breakfast: <strong>"+ tuesdaybfast + "</strong></li>";
mealPlanHTML += "<li>Snack:<strong>" + tuesdays + "</strong></li>";
mealPlanHTML += "<li>Lunch:<strong>" + tuesdayl + "</strong></li>";
mealPlanHTML += "<li>Second Snack:<strong>" + tuesdays2 + "</strong></li>";
mealPlanHTML += "<li>Dinner:<strong>" + tuesdayd + "</strong></li>";
mealPlanHTML += "</ul>";
mealPlanHTML += "</div>";
mealPlanHTML += "</div>";

mealPlanHTML += "<div class='days-row'>";
mealPlanHTML += "<div class='day-column'>";
mealPlanHTML += "<h3>Wednesday's meals</h3>";
mealPlanHTML += "<ul>";
mealPlanHTML += "<li>Breakfast:<strong>" + wednesdaybfast + "</strong></li>";
mealPlanHTML += "<li>Snack:<strong>" + wednesdays + "</strong></li>";
mealPlanHTML += "<li>Lunch:<strong>" + wednesdayl + "</strong></li>";
mealPlanHTML += "<li>Second Snack:<strong>" + wednesdays2 + "</strong></li>";
mealPlanHTML += "<li>Dinner:<strong>" + wednesdayd + "</strong></li>";
mealPlanHTML += "</ul>";
mealPlanHTML += "</div>";

mealPlanHTML += "<div class='day-column'>";
mealPlanHTML += "<h3>Thursday's meals</h3>";
mealPlanHTML += "<ul>";
mealPlanHTML += "<li>Breakfast:<strong>" + thursdaybfast + "</strong></li>";
mealPlanHTML += "<li>Snack:<strong>" + thursdays + "</strong></li>";
mealPlanHTML += "<li>Lunch:<strong>" + thursdayl + "</strong></li>";
mealPlanHTML += "<li>Second Snack:<strong>" + thursdays2 + "</strong></li>";
mealPlanHTML += "<li>Dinner:<strong>" + thursdayd + "</strong></li>";
mealPlanHTML += "</ul>";
mealPlanHTML += "</div>";
mealPlanHTML += "</div>";

mealPlanHTML += "<div class='days-row'>";
mealPlanHTML += "<div class='day-column'>";
mealPlanHTML += "<h3>Friday's meals</h3>";
mealPlanHTML += "<ul>";
mealPlanHTML += "<li>Breakfast:<strong> " + fridaybfast + "</strong></li>";
mealPlanHTML += "<li>Snack:<strong> " + fridays + "</strong></li>";
mealPlanHTML += "<li>Lunch:<strong> " + fridayl + "</strong></li>";
mealPlanHTML += "<li>Second Snack:<strong> " + fridays2 + "</strong></li>";
mealPlanHTML += "<li>Dinner:<strong> " + fridayd + "</strong></li>";
mealPlanHTML += "</ul>";
mealPlanHTML += "</div>";

mealPlanHTML += "<div class='day-column'>";
mealPlanHTML += "<h3>Saturday's meals</h3>";
mealPlanHTML += "<ul>";
mealPlanHTML += "<li>Breakfast:<strong> " + saturdaybfast + "</strong></li>";
mealPlanHTML += "<li>Snack:<strong> " + saturdays + "</strong></li>";
mealPlanHTML += "<li>Lunch:<strong> " + saturdayl + "</strong></li>";
mealPlanHTML += "<li>Second Snack:<strong> " + saturdays2 + "</strong></li>";
mealPlanHTML += "<li>Dinner:<strong> " + saturdayd + "</strong></li>";
mealPlanHTML += "</ul>";
mealPlanHTML += "</div>";
mealPlanHTML += "</div>";

mealPlanHTML += "<div class='days-row'>";
mealPlanHTML += "<div class='day-column'>";
mealPlanHTML += "<h3>Sunday's meals</h3>";
mealPlanHTML += "<ul>";
mealPlanHTML += "<li>Breakfast:<strong>" + sundaybfast + "</strong></li>";
mealPlanHTML += "<li>Snack:<strong>" + sundays + "</strong></li>";
mealPlanHTML += "<li>Lunch:<strong>" + sundayl + "</strong></li>";
mealPlanHTML += "<li>Second Snack:<strong>" + sundays2 + "</strong></li>";
mealPlanHTML += "<li>Dinner:<strong>" + sundayd + "</strong></li>";
mealPlanHTML += "</ul>";
mealPlanHTML += "</div>";
mealPlanHTML += "</div>";
//HTML content for new window
//opens new window
var newWindow = window.open('', '_blank');
    //button to print the meal plan
    var printButton = newWindow.document.createElement('button');
    //Text for button
    printButton.textContent = 'Print';
    //creates button class
    printButton.classList.add('print-button');
    // Print the new window when the "Print" button is clicked
    printButton.addEventListener('click', function () {
        newWindow.print(); 
    });

    // Create a download button for the meal plan text
    var downloadButton = newWindow.document.createElement('button');
    //Text for button
    downloadButton.textContent = 'Download Meal Plan';
    //Download the meal plan when button is clicked
    downloadButton.addEventListener('click', function() {
        var downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(mealPlanHTML));
        downloadLink.setAttribute('download', 'meal-plan.txt');
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
    //writes the content in the new window
    newWindow.document.write(mealPlanHTML);
   //the buttons in the new window only
    newWindow.document.body.appendChild(printButton);
    newWindow.document.body.appendChild(downloadButton);

    //CSS for new window including output layout, buttons, fonts, colors, borders
    var styleElement = newWindow.document.createElement('style');
        styleElement.textContent = `
        body {
            background-color:#f2f2f2;
        }
  
        p {
            font-family: "Reddit Mono", monospace;
            text-align:center;
        }

        h1 {
            font-family: "Platypi", serif;
            color:#037f8c; 
            text-align:center;
            font-size:75px; 
        }

        li {
            font-family: "Reddit Mono", monospace;   
        }

        button {
            background-color: orange;
            color: black;
            font-weight: bold;
            padding: 12px;
            test-align: center;
            font-size: 16px;
            border-radius: 12px;
            margin-top: 45px;
            margin-right:20px;
        }

        button:hover {
            background-color:#f25c05; 
            color: white;
        }
       
        .days-row {
            display: flex;
            justify-content: space-around;
            margin-bottom: 10px;
        }
        
        .day-column {
            width: 45%; 
            padding: 10px;
            border: 2px solid #f25c05;
            border-radius: 5px;
            background-color: #f9f9f9;
            margin-bottom: 10px;
        }
        
        .day-column h3 {
            margin-top: 0;
            font-size: 18px;
            font-family: "Reddit Mono", monospace;
            color: royalblue; 
        }

        .day-column ul {
            list-style-type: none;
            padding: 0;
        }
        
        .day-column ul li {
            margin-bottom: 5px;
        }

        .print-button:hover {
            background-color:royalblue;
            color: white; 
        }
    `;
newWindow.document.head.appendChild(styleElement); 
//link to google fonts
var linkElement = newWindow.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Platypi');
newWindow.document.head.appendChild(linkElement);
 newWindow.document.close();
//message for users with an invalid email
}else{
alert("You have entered an invalid email address!");
return false;}
}
//Event listeners for clear and create buttons
document.getElementById('createButton').addEventListener('click', createMealPlan);
document.getElementById('clearButton').addEventListener('click', clearForm);

