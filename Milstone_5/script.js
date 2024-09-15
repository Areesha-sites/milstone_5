var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username")
        .value;
    var fullName = document.getElementById("fullName")
        .value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institutionName = document.getElementById("institution-name").value;
    var year = document.getElementById("year").value;
    var title = document.getElementById("title").value;
    var company = document.getElementById("company")
        .value;
    var years = document.getElementById("years").value;
    var skill1 = document.getElementById("skill-1").value;
    var skill2 = document.getElementById("skill-2").value;
    var skill3 = document.getElementById("skill-3").value;
    var skill4 = document.getElementById("skill-4").value;
    var skill5 = document.getElementById("skill-5").value;
    var resumeData = {
        username: username,
        fullName: fullName,
        email: email,
        phone: phone,
        degree: degree,
        institutionName: institutionName,
        year: year,
        title: title,
        company: company,
        years: years,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        skill4: skill4,
        skill5: skill5,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3><b><pre>                    Personal Information</pre></b></h3>\n<p><b>Full Name:</b>  <span contenteditable=\"true\">".concat(fullName, "</span></p>\n<p><b>User Name:</b>  <span contenteditable=\"true\">").concat(username, "</span></p>\n<p><b>Email:</b>  <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone Number:</b>  <span contenteditable=\"true\">").concat(phone, "</span></p>\n<h3><b><pre>                            Education</pre></b></h3>\n<p><b>Degree:</b>  <span contenteditable=\"true\">").concat(degree, "</span></p>\n<p><b>Institution Name:</b>  <span contenteditable=\"true\">").concat(institutionName, "</span></p>\n<p><b>Year of Graduation:</b>  <span contenteditable=\"true\">").concat(year, "</span></p>\n<h3><b><pre>                            Experience</pre></b></h3>\n<p><b>Title:</b>  <span contenteditable=\"true\">").concat(title, "</span></p>\n<p><b>Company:</b>  <span contenteditable=\"true\">").concat(company, "</span></p>\n<p><b>Years of Expereince:</b>  <span contenteditable=\"true\">").concat(years, "</span></p>\n<h3><b><pre>                                Skills</pre></b></h3>\n<p><b>Skill-1:</b>  <span contenteditable=\"true\">").concat(skill1, "</span></p>\n<p><b>Skill-2:</b>  <span contenteditable=\"true\">").concat(skill2, "</span></p>\n<p><b>Skill-3:</b>  <span contenteditable=\"true\">").concat(skill3, "</span></p>\n<p><b>Skill-4:</b>  <span contenteditable=\"true\">").concat(skill4, "</span></p>\n<p><b>Skill-5:</b>  <span contenteditable=\"true\">").concat(skill5, "</span></p>\n");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
});
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value =
                username;
            document.getElementById("fullName").value =
                resumeData.fullName;
            document.getElementById("email").value =
                resumeData.email;
            document.getElementById("phone").value =
                resumeData.phone;
            document.getElementById("degree").value =
                resumeData.degree;
            document.getElementById("institutionName").value =
                resumeData.institutionName;
            document.getElementById("year").value =
                resumeData.year;
            document.getElementById("title").value =
                resumeData.title;
            document.getElementById("company").value =
                resumeData.company;
            document.getElementById("years").value =
                resumeData.years;
            document.getElementById("skill1").value =
                resumeData.skill1;
            document.getElementById("skill2").value =
                resumeData.skill2;
            document.getElementById("skill3").value =
                resumeData.skill3;
            document.getElementById("skill4").value =
                resumeData.skill4;
            document.getElementById("skill5").value =
                resumeData.skill5;
        }
    }
});
