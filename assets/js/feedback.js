var btn = document.getElementById("cbt");
            btn.onclick=function(){
                var name = document.getElementById("cname").value;
                var email = document.getElementById("cemail").value;
                var text = document.getElementById("ctext").value;
                var p = document.getElementById("message");
                if(name.length == 0 || email.length == 0 || text.length == 0){
                    p.innerText= "please write something";
                }
                else{
                    callDomain(name,email,text);
                }
            }
        function callDomain(name, email, text, callback) {
            var invocation = new XMLHttpRequest();
            //access api
            //single test
            var url =
                'https://fiterbubblespring.azurewebsites.net/api/demo/feedback/add?name=' + name + '&email=' + email + '&text=' + text;
            var invocationHistoryText;
            if (invocation) {
                invocation.open('GET', url, false);
                invocation.onreadystatechange = function () {
                    if (invocation.readyState == 4) {
                        if (invocation.status == 200) {
                            //get API json
                            var response = invocation.response;
                            if(response == 1){
                                var p = document.getElementById("message");
                                p.innerText= "Thanks for you feedback";
                            }
                            
                            if (typeof callback === "function") {
                                // apply() sets the meaning of "this" in the callback
                                callback.apply(xhr);
                            }
                        } else
                            console.log("Invocation Errors Occured");
                    } else
                        console.log("currently the application is at" + invocation.readyState);
                };
                invocation.send();
            } else {
                invocationHistoryText = "No Invocation TookPlace At All";
            }
        }