function sendMsg() {
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var msg = document.getElementById("userMsg").value;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "venkatakrishnasai.activities@gmail.com",
      Password: "36F4DA50D2EF90672D58ADE67F86718CBC3C",
      To: "venkat.in2002@gmail.com",
      From: "venkatakrishnasai.activities@gmail.com",
      Subject: "You got feedback from " + name,
      Body: "Details of sender <br>" +
        "Name :" + name + "<br>" +
        "Email :" + email + "<br>" +
        "Feedback :<br>" + msg
    }).then(
      message => alert("Message Sent")
    );
  }



  var typed = new Typed("#auto-typer", {
    strings: ["Tech Enthusiast.", "Web Developer."],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  });


  function noticeToggle() {
    document.querySelector("#notice").style.display = "none";
  }