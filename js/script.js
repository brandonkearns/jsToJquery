console.log("Script is in!");
//
//var page = document.body;
//
//var paragraphs = page.getElementsByTagName("p");
//
//console.log(paragraphs);
//    
//paragraphs[0].style.color = "blue";

document.body.getElementsByTagName("p")[3].style.color = "blue";


var paragraphs = document.getElementsByTagName("p");

for (var i =0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

document.body.getElementsByClassName("season-copy")[1].style.fontSize = "20px";

//document.body.getElementsByTagName("li")[0].