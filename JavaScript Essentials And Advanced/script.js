function validation() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let country = document.getElementById('country').value;



    if (email == "") {
        document.getElementById("msg1").innerHTML = "** Please fill this email field";
        return false
    }
    if (pass == "") {
        document.getElementById("msg2").innerHTML = "** Please fill this password field";
        return false
    }
    if (cpass == "") {
        document.getElementById("msg3").innerHTML = "** Please fill this Re-type password field";
        return false
    }
    if (fname == "") {
        document.getElementById("msg4").innerHTML = "** Please fill this firstname field";
        return false
    }
    if (lname == "") {
        document.getElementById("msg5").innerHTML = "** Please fill this lastname field";
        return false
    }
    if (male == false && female == false) {
        document.getElementById("msg6").innerHTML = "** Please select gender"
        return false
    }
    if (country == "-1") {
        document.getElementById("msg7").innerHTML = "** Please fill this country field";
        return false
    }
}





function check_value(blnk, spanid) {
    if (blnk.value == "" || blnk.value == null || blnk.value == -1) {
        document.getElementById(spanid).innerHTML = "Please fill this"
        return false
    } else {
        document.getElementById(spanid).innerHTML = ""
        return false
    }
}

function regex_email(emailex, spanid) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailex.value)) {
        document.getElementById(spanid).innerHTML = "";
        return false
    } else {
        document.getElementById(spanid).innerHTML = "Enter Proper EmailId";
        return false
    }
}


function pass_reg_ex() {
    let passex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let pass = document.getElementById("pass").value;
    if (passex.test(pass)) {
        document.getElementById("msg2").innerHTML = "";
        return false
    } else {
        document.getElementById("msg2").innerHTML = "Enter Proper password";
        return false
    }
}

function match_password() {
    let pass = document.getElementById("pass").value
    let cpass = document.getElementById("cpass").value
    if (cpass != pass) {
        document.getElementById("msg3").innerHTML = "Password and Re-type Password not match"
        return false
    } else {
        document.getElementById("msg3").innerHTML = ""
        return false
    }
}

function reg_ex_name(uname, spanid) {
    let reg_ex = /^[a-zA-Z]*$/
    if (reg_ex.test(uname.value)) {
        document.getElementById(spanid).innerHTML = ""
        return false
    } else {
        document.getElementById(spanid).innerHTML = "Invalid Name"
        return false
    }
}