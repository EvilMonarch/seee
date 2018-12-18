if (localStorage.getItem('id') == "") {
    window.location.href = "login.html";
}
const form = document.querySelector('#add');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var numm = 5;

    test3(0)
    test3(5)
    var delayInMilliseconds = 5000; //1 second

    setTimeout(function () {
        alert("เพิ่มนักศึกษาเรียบร้อย");
        window.location.href = "blog1.html";
    }, delayInMilliseconds);

})
function test(dt) {

    db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
        student: dt
    })
}

function test3(i) {
    if (i < 1 ) return;
    setTimeout(function () {

        if (document.getElementById("type" + i.toString()).checked) {
            var passcourse = localStorage.getItem("passcourse")
            var namecourse = localStorage.getItem("namecourse")
            var nameteacher = localStorage.getItem("nameteacher")
            var day = localStorage.getItem("day")
            var time = localStorage.getItem("time")
            var room = localStorage.getItem("room")
            var ttt = 'type' + i.toString();

            var std = document.getElementById(ttt).value

            var teacher = localStorage.getItem("id")
            db.collection('students').doc(std).collection('subject').doc(namecourse).set({

                passcourse: passcourse,
                namecourse: namecourse,
                nameteacher: nameteacher,
                day: day,
                time: time,
                teacher: teacher,
                room: room
            });
            var subject = firebase.firestore();
            
            
            subject.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
                .then(function (doc) {
                    let dt = []
                    dt = doc.data().student
                    dt.push(std)
                    test(dt)
                });
        }
        test3(--i);

    }, 1000);


}

var subject = firebase.firestore();
subject.collection('students')
.onSnapshot(function (doc) {
  var num = 0;
  doc.docs
  
    .forEach(data => {
      
        num = num+1;
        $('#subject-std').append(createSubject(num,data.data().id,data.data().name)
        )
      
    })
})
function createSubject(num,id,name) {

    html = ''
    html += '<div class="name'+num+'">'
											
    html += '<input id="type'+num+'" type="checkbox" value="'+id+'"> '+id+' : '+name+'<br>'

						
    html += '</div>'
    
  
    return html
  }