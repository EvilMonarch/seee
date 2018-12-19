var config = {
  apiKey: "AIzaSyDp27nzyKjhTwzdHol9FYOV8e9CvT3_3s4",
  authDomain: "checkin-class-itkmitl.firebaseapp.com",
  databaseURL: "https://checkin-class-itkmitl.firebaseio.com",
  projectId: "checkin-class-itkmitl",
  storageBucket: "checkin-class-itkmitl.appspot.com",
  messagingSenderId: "56110941267"
};
firebase.initializeApp(config)
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
var subject = firebase.firestore();
if (localStorage.getItem('id') == "") {
  window.location.href = "login.html";
}

const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#course3');

// create element & render cafe
function renderCafe(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);


}

// getting data
db.collection('teacher').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    renderCafe(doc);
  });
});
form.addEventListener('submit', (e) => {
  e.preventDefault();


  var nameteacher = localStorage.getItem("nameteacher")
  var id = localStorage.getItem("id")
  var week = localStorage.getItem("week")
  var day = document.getElementById("select1").value
  var time = document.getElementById("select2").value
  var year = document.getElementById("select3").value
  var type = document.getElementById("select4").value
  var detail = document.getElementById("detail").value
  if (day == "00" || time == "00" || year == "00" || detail == "") {
    alert("กรอกข้อมูลไม่ครบ");
  }
  else {
    db.collection('teacher').doc(localStorage.getItem("teacher")).collection('subject').doc(localStorage.getItem("namecourse")).collection(localStorage.getItem("week")).doc(day + time + year + localStorage.getItem("id")).set({

      detail: detail,
      id: id,
      type: type,
      nameteacher: nameteacher,
      week: week,
      day: day,
      time: time,
      year: year

    });
    var delayInMilliseconds = 1000; //1 second
    setTimeout(function () {
      alert("ส่งเรื่องการลาเรียบร้อย");
      window.location.href = "check.html";
    }, delayInMilliseconds);
  }
})

