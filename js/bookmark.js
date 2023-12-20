var SiteName = document.getElementById("siteName");
var UrlName = document.getElementById("urlName");
var tableBody = document.getElementById("trs");
const toastTrigger = document.getElementById('submitbtn')


var urlList = [];
if (JSON.parse(localStorage.getItem("links")) != null) {
  urlList = JSON.parse(localStorage.getItem("links"));
  showDate();
}

function addUrlFavorite() {
  var uritem = {
    name: SiteName.value,
    url: UrlName.value,
  };
  if (/(^((http|https)\:\/\/((w{3})\.)\w+))(\.com)?$/i.test(UrlName.value)) {
    urlList.push(uritem);
    localStorage.setItem("links", JSON.stringify(urlList));
  } else {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

     

      toastBootstrap.show()
 
      
  }

  clearInputs();
  showDate();
}
function showDate() {
  urlList = JSON.parse(localStorage.getItem("links"));
  var tr = "";

  for (var i = 0; i < urlList.length; i++) {
    tr += ` <tr>
            <th  scope="row">${i}</th>
            <td scope="row">${urlList[i].name}</td>
            <td scope="row"><a class=" btn btn-success" target="_blank" href="${urlList[i].url}">visit</a> </td>
            <td scope="row"><button onclick="deletItem(${i})" class="btn btn-danger">delet</button></td>

          </tr>
            `;
  }
  tableBody.innerHTML = tr;
}
function clearInputs() {
  SiteName.value = "";
  UrlName.value = "";
}

function deletItem(i) {
  urlList.splice(i, 1);
  localStorage.setItem("links", JSON.stringify(urlList));
  showDate();
}




const toastLiveExample = document.getElementById('liveToast')

