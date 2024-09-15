const form = document.getElementById("resume-form") as HTMLFormElement;

const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

const shareableLinkContainer = document.getElementById(
  "shareable-link-container"
) as HTMLDivElement;
const shareableLinkElement = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const downloadPdfButton = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const fullName = (document.getElementById("fullName") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institutionName = (
    document.getElementById("institution-name") as HTMLInputElement
  ).value;
  const year = (document.getElementById("year") as HTMLInputElement).value;

  const title = (document.getElementById("title") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const years = (document.getElementById("years") as HTMLInputElement).value;

  const skill1 = (document.getElementById("skill-1") as HTMLInputElement).value;
  const skill2 = (document.getElementById("skill-2") as HTMLInputElement).value;
  const skill3 = (document.getElementById("skill-3") as HTMLInputElement).value;
  const skill4 = (document.getElementById("skill-4") as HTMLInputElement).value;
  const skill5 = (document.getElementById("skill-5") as HTMLInputElement).value;

  const resumeData = {
    username,
    fullName,
    email,
    phone,
    degree,
    institutionName,
    year,
    title,
    company,
    years,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
  };
  localStorage.setItem(username, JSON.stringify(resumeData));
  const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3><b><pre>                    Personal Information</pre></b></h3>
<p><b>Full Name:</b>  <span contenteditable="true">${fullName}</span></p>
<p><b>User Name:</b>  <span contenteditable="true">${username}</span></p>
<p><b>Email:</b>  <span contenteditable="true">${email}</span></p>
<p><b>Phone Number:</b>  <span contenteditable="true">${phone}</span></p>
<h3><b><pre>                            Education</pre></b></h3>
<p><b>Degree:</b>  <span contenteditable="true">${degree}</span></p>
<p><b>Institution Name:</b>  <span contenteditable="true">${institutionName}</span></p>
<p><b>Year of Graduation:</b>  <span contenteditable="true">${year}</span></p>
<h3><b><pre>                            Experience</pre></b></h3>
<p><b>Title:</b>  <span contenteditable="true">${title}</span></p>
<p><b>Company:</b>  <span contenteditable="true">${company}</span></p>
<p><b>Years of Expereince:</b>  <span contenteditable="true">${years}</span></p>
<h3><b><pre>                                Skills</pre></b></h3>
<p><b>Skill-1:</b>  <span contenteditable="true">${skill1}</span></p>
<p><b>Skill-2:</b>  <span contenteditable="true">${skill2}</span></p>
<p><b>Skill-3:</b>  <span contenteditable="true">${skill3}</span></p>
<p><b>Skill-4:</b>  <span contenteditable="true">${skill4}</span></p>
<p><b>Skill-5:</b>  <span contenteditable="true">${skill5}</span></p>
`;

  resumeDisplayElement.innerHTML = resumeHTML;
  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    username
  )}`;

  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
});

downloadPdfButton.addEventListener("click", () => {
  window.print();
});
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("fullName") as HTMLInputElement).value =
        resumeData.fullName;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.email;
      (document.getElementById("phone") as HTMLInputElement).value =
        resumeData.phone;
      (document.getElementById("degree") as HTMLInputElement).value =
        resumeData.degree;
      (document.getElementById("institutionName") as HTMLInputElement).value =
        resumeData.institutionName;
      (document.getElementById("year") as HTMLInputElement).value =
        resumeData.year;
      (document.getElementById("title") as HTMLInputElement).value =
        resumeData.title;
      (document.getElementById("company") as HTMLInputElement).value =
        resumeData.company;
      (document.getElementById("years") as HTMLInputElement).value =
        resumeData.years;
      (document.getElementById("skill1") as HTMLInputElement).value =
        resumeData.skill1;
      (document.getElementById("skill2") as HTMLInputElement).value =
        resumeData.skill2;
      (document.getElementById("skill3") as HTMLInputElement).value =
        resumeData.skill3;
      (document.getElementById("skill4") as HTMLInputElement).value =
        resumeData.skill4;
      (document.getElementById("skill5") as HTMLInputElement).value =
        resumeData.skill5;
    }
  }
});
