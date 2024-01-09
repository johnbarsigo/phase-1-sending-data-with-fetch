const userData = {
    name : "Ken-Block",
    email : "ken43@hoonigan.com"
}

const configurationObject = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
    },
    body : JSON.stringify (userData),
};

fetch("http://localhost:3000/users", configurationObject);