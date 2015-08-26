        function submitInfo() {
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
                    if(xmlhttp.status == 200) {

                        var text = xmlhttp.responseText;
                        var data = JSON.parse(text);
                        console.log(data);

                        document.getElementById('thx').innerHTML = data['msg'];


                    } else if(xmlhttp.status == 400) {
                        console.log("400 Error: " + xmlhttp.statusText);

                    } else {
                        console.log("General error: " + xmlhttp.statusText);
                    }
                }
            }

            xmlhttp.open("POST", "./subscribe.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            var formInput = getFormInput();
            xmlhttp.send(formInput);

        }
        function getFormInput() {
            var data = "";

            data += "&email=" + document.getElementById("email").value;
            //console.log(data);
            return data;
        }