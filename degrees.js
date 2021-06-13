(function() {
    var httpRequest;
    document.getElementById("button").onclick = function() { makeRequest('https://tschurder0518.github.io/cs601_hw5_oleary/my_degrees.json');
};

function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Error: Unable to create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = tableContents();

    httpRequest.open('GET', url);
    httpRequest.send();
}

function tableContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            document.write(httpRequest.responseText);
        } else {
            alert("There was a problem with the request");
        }
    }
}
})();
