let highlight = function() {
  let threadList = document.getElementById('threadlisttableid');
  if (typeof(threadList) === "undefined"){
    return;
  }

  let tbody = threadList.getElementsByTagName('tbody');
  for (i = 0; i < tbody.length; i++){
    
    console.log(tbody[i]);
    tbody[i].style.setProperty("text-decoration", "line-through");
    let tr = tbody[i].getElementsByTagName("tr")[0];
    tr.getElementsByTagName("th")[0].style.setProperty("background-color", "lightgrey");
    let td = tr.getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
     td[j].style.setProperty("background-color", "lightgrey");
    }   
  }
}


highlight();
