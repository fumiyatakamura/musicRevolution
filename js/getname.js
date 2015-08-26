function getName(key) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for everything except IE 9 <=
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE 9 <= ... support for Microsoft lameness :/
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
            console.log(xmlhttp.status);
            if(xmlhttp.status == 200) {

                var text = xmlhttp.responseText;
                var data = JSON.parse(text);

                var outputP = document.getElementsByClassName('name-p');

                for(i =0; i < outputP.length; i++){
                    if(outputP[i].id == data['key']){
                        outputP[i].innerHTML = data['msg'];
                    }
                }


            } else if(xmlhttp.status == 400) {
                console.log("400 Error: " + xmlhttp.statusText);

            } else {
                console.log("General error: " + xmlhttp.statusText);
            }
        }
    }
    xmlhttp.open("GET", "./getname.php"+key, true);
    xmlhttp.send();
}

//get data
var getData = function() {
    var data = "?";
    var key = "name=";
    var formData = this.firstChild;
    data += key +　formData['value'];
    getName(data);
};

//event
var btns = document.getElementsByClassName("name-answer");
for (var i = 0; i < btns.length; i++) {
  var current = btns[i];
  current.addEventListener('submit', getData, false);
}



