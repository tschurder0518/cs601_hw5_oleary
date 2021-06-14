function loadJson() {
    const Http = new XMLHttpRequest();
    const url = 'https://tschurder0518.github.io/cs601_hw5_oleary/my_degrees.json';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.readyState === XMLHttpRequest.DONE) {
            if (Http.status === 200) {
                loadTable(Http);
            } else {
                alert("Error with the request");
            }
        }
    }
}
function loadTable(httpInfo) {
    jsonInfo = JSON.parse(httpInfo.responseText);
    var degreeTable = "<tr><th>School</th><th>Major</th><th>Degree Type</th><th>Year Complete</th></tr>";
    let text = "<table border = '1'>"
    text += "<tr><th>School</th><th>Major</th><th>Degree Type</th><th>Year Complete</th></tr>";
    for (let i = 0; i < 3; i++) {
        text += "<tr><td>" + jsonInfo.degrees[i].degree.school + "</td>";
        text += "<td>" + jsonInfo.degrees[i].degree.major + "</td>";
        text += "<td>" + jsonInfo.degrees[i].degree.type + "</td>";
        text += "<td>" + jsonInfo.degrees[i].degree.year + "</td></tr>";
    }

    text += "</table>"
    document.write(degreeTable + text);
}
