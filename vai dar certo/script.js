let div = document.getElementById("divp")
document.getElementById("divp").onclick=function(){
    fetch("https://api.adviceslip.com/advice")
    .then(
        function(res){
        return (res.json())
        }
    )
    .then(function(warning){
            let h1 = document.createElement("h1")
            h1.append(document.createTextNode(warning.slip.advice))
            div.append(h1)
        }
    )
}
