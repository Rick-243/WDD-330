function listSelector(){
    var a = document.createElement("a");
    var ol = document.getElementsById("list_links");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Week02"));
    a.textContent = "week02";
    a.setAttribute('href', 'week02/index.html');
    li.appendChild(a);
    ol.appendChild(li);
    const list = [
        {
            label: "Week01",
            url: "week01/index.html"
        }
    ]
}