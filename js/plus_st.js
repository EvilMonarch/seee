if (localStorage.getItem('id') == "") {
    window.location.href = "login.html";
}
const form = document.querySelector('#add');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var numm = 5;

    test3(0)
    test3(5)


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



