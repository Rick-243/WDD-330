function listSelector(){
    var ol = document.getElementById("list_links");
    const list = [
        {
            label: "Week01",
            url: "week01/index.html"
        },
        {
            label: "Week02",
            url: "week02/index.html"
        }, 
        {
            label: "Week03",
            url: "week03/index.html"
        },
        {
            label: "Week04",
            url: "week04/index.html"
        },
        {
            label: "Week05",
            url: "week05/index.html"
        },
        {
            label: "team_assignment",
            url: "team_assignment_05/index.html"
        }       
    ]
    for(let i = 0; i < list.length; i++){
        let li = document.createElement("li");
        let url = document.createElement("a");
        url.setAttribute("href", list[i].url);
        url.textContent = list[i].label;
        li.append(url);
        ol.append(li); 
    }
}