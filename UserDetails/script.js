function addToConsole(event) {
    event.preventDefault();
    const form = document.forms["myForm"];
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    const phoneNumber = form["phoneNumber"].value;
    const name = firstName+" "+lastName;

    document.getElementById("user_details").textContent = `Hello ${name}! This is the phone number you've entered : ${phoneNumber}`;
    }

function testFunc() {
    if(document.getElementById("user_details").textContent !="")
    {
        document.getElementById("user_details").textContent = "";
    }
}