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
        },
        {
            label: "Todo list",
            url: "todo/index.html"
        },
        {
            label: "Week07",
            url: "week07/index.html"
        },
        {
            label: "Week08",
            url: "week08/index.html"
        },
        {
            label: "Week09",
            url: "week09/index.html"
        },
        {
            label: "Week10",
            url: "week10/index.html"
        },
        {
            label: "team assignment 10",
            url: "TeamAct10/quakes.html"
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