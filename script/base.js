/**
*
* base.js
* @author - Lameen
* @date - 28/02/2023
**/

function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    if (weight == "" && height == "") {
        alert("Enter height and weight");
        return;
    } 
    if (height == "") {
        alert("Enter height");
        return;
    }   
    if (weight == "") {
        alert("Enter weight");
        return;
    }
    height = height * 0.01;
    var BMI = weight / (height * height);
    document.getElementById("answer").innerHTML = BMI.toFixed(2);
    if (BMI < 18.5) {
        var weightStatus = "Underweight";
    }  
    else if (BMI >= 18.5 && BMI <= 24.99) {
        var weightStatus = "Healthy";
    } 
    else if (BMI >= 25 && BMI <= 29.99) {
        var weightStatus = "Overweight";
    } 
    else {
        var weightStatus = "Obese";
    }
    document.getElementById("weight-status").innerHTML = weightStatus;
}