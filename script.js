document.getElementById("botao").addEventListener("click", function () {
    var tweets = document.getElementById("tweets");
    var text = document.getElementById("text").value;

    var li = document.createElement("li");
    
    li.textContent = text;
    tweets.appendChild(li);
});

//rato