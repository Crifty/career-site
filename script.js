function showResult() {
    const interest = document.getElementById("interest").value;
    if (!interest) {
        alert("Please select an interest");
        return;
    }
    window.location.href = "result.html?interest=" + interest;
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get("interest");
    const output = document.getElementById("output");

    if (!output) return;

    let careers = {
        software: [
            "Software Developer",
            "Web Developer",
            "App Developer",
            "Backend Engineer"
        ],
        ai: [
            "AI Engineer",
            "Machine Learning Engineer",
            "Data Scientist"
        ],
        design: [
            "UI Designer",
            "UX Researcher",
            "Graphic Designer"
        ],
        networking: [
            "Network Engineer",
            "Cybersecurity Analyst",
            "Ethical Hacker"
        ],
        data: [
            "Data Analyst",
            "Business Analyst",
            "ML Engineer"
        ],
        electronics: [
            "Embedded Engineer",
            "VLSI Engineer",
            "IOT Developer"
        ]
    };

    if (careers[interest]) {
        output.innerHTML = "<ul>" +
            careers[interest].map(c => `<li>${c}</li>`).join("") +
            "</ul>";
    }
};
