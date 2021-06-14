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
    var jsonInfo = httpInfo.responseText;
    var parsed = JSON.parse(jsonInfo);
    var degreeTable = "<tr><th>School</th><th>Major</th><th>Degree Type</th><th>Year Complete</th></tr>";
    
    var degree = parsed[0];
    document.write(degree.school);
}