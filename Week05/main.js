console.log("Hi")

function validateEmail(email) {
    return email.includes("@") && email.length > 4 && email.includes(".");
}

function validateSubject(subject) {
    return subject.length > 1;
    
}

function validateProfile(profile) {
    return profile.length < 500 ;
}

console.log("click button")
$(".submit").click(function () {
    let email = $(".email").val();
    let subject = $(".subject").val();
    let profile = $(".profile").val();
console.log(email);
console.log(subject);
console.log(profile);
    if(validateEmail(email) && validateSubject(subject) && validateProfile(profile)) {
        $(".message").text("Success")
    } else {
        $(".message").text("Did not validate")
    }
})

