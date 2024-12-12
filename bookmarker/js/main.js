var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
let index = 1;
var bookMark=[];




function addsite() {

    if (siteName.value.trim() === "" || siteUrl.value.trim() === "") {
        alert("Please fill in both fields!");
        return;
    }
    for (var i = 0; i < bookMark.length; i++) {
        if (bookMark[i].name.toLowerCase() === siteName.value.trim().toLowerCase()) {
            alert("Bookmark name already exists!");
            return;
        }
        
    }
    var urlPattern = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    if (!urlPattern.test(siteUrl.value.trim())) {
        alert("Please enter a valid URL starting with http:// or https://");
        return;
    }

    var id = getNextId();
    var site = {
name:siteName.value,
url:siteUrl.value,
id: id,
    }
    bookMark.push(site);
    displaySite()
    clear()
}





function displaySite() {
    var cartona= '';
    for(var i=0;i<bookMark.length;i++){
        cartona+= `     <tr>
        <td>${bookMark[i].id}</td>
        <td>${bookMark[i].name}</td>
        <td><button onclick="visitButton('${bookMark[i].url}')" class="btn btn-warning">Visit</button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button></td>

    </tr>
        
        
        
        `
    }
    document.getElementById("tableContent").innerHTML=cartona
}

function clear(){
    siteName.value=null;
    siteUrl.value=null;
    
}


function visitButton(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
    }


    window.open( url, '_blank'); 
}


function deleteSite(index) {
    bookMark.splice(index, 1);
    displaySite();
}


function getNextId() {

    var usedIds = bookMark.map(bookmark => bookmark.id);


    var id = 1;
    while (usedIds.includes(id)) {
        id++;
    }
    return id;
}