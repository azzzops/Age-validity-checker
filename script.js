let user_form = document.forms["age_form"] 
let result = document.getElementById("result");


user_form.addEventListener("submit", (e) => {
    e.preventDefault();
    
        let user_age = document.getElementById("age").value;
        let user_year = user_age;
        let current_year = new Date().getFullYear();
        let age = current_year - user_year;
        
        if(user_age.trim() == ""){
            alert("Input a value")
        } else if(user_age.trim() !== "" && age < 18){
            result.style.color = "red";
            result.style.display = "flex";
            result.innerHTML = `You are ${age} years old and currently not of legal age. Please return in ${18 - age} years, when you will meet the legal age requirement.`
        } else if(user_age.trim() !== "" && age >= 18){
            result.style.color = "green";
            result.style.display = "flex";
             result.innerHTML = `You are ${age} years old and have attained the legal age, making you eligible to vote in any election.`;
        }
    });
    