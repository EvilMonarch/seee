if (localStorage.getItem('id') == "") {
    window.location.href = "login2.html";
}
const form = document.querySelector('#incode');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var passcourse = localStorage.getItem("passcourse")
    var namecourse = localStorage.getItem("namecourse")
    var nameteacher = localStorage.getItem("nameteacher")
    var day = localStorage.getItem("day")
    var time = localStorage.getItem("time")
    var room = localStorage.getItem("room")
    var std = localStorage.getItem("id")
    var teacher = localStorage.getItem("teacher")
    var week = localStorage.getItem("week")
    var code = document.getElementById("code").value
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

    subject.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).get()
        .then(function (doc) {
            
            if (week == "week01" && doc.data().week01[0] == code) {
                let dt = []
                dt = doc.data().week01
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week01: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week02" && doc.data().week02[0] == code) {
                let dt = []
                dt = doc.data().week02
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week02: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week03" && doc.data().week03[0] == code) {
                let dt = []
                dt = doc.data().week03
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week03: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week04" && doc.data().week04[0] == code) {
                let dt = []
                dt = doc.data().week04
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week04: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week05" && doc.data().week05[0] == code) {
                let dt = []
                dt = doc.data().week05
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week05: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week06" && doc.data().week06[0] == code) {
                let dt = []
                dt = doc.data().week06
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week06: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week07" && doc.data().week07[0] == code) {
                let dt = []
                dt = doc.data().week07
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week07: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week08" && doc.data().week08[0] == code) {
                let dt = []
                dt = doc.data().week08
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week08: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week09" && doc.data().week09[0] == code) {
                let dt = []
                dt = doc.data().week09
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week09: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week10" && doc.data().week10[0] == code) {
                let dt = []
                dt = doc.data().week10
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week10: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week11" && doc.data().week11[0] == code) {
                let dt = []
                dt = doc.data().week11
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week11: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week12" && doc.data().week12[0] == code) {
                let dt = []
                dt = doc.data().week12
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week12: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week13" && doc.data().week13[0] == code) {
                let dt = []
                dt = doc.data().week13
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week13: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week14" && doc.data().week14[0] == code) {
                let dt = []
                dt = doc.data().week14
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week14: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week15" && doc.data().week15[0] == code) {
                let dt = []
                dt = doc.data().week15
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week15: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else if (week == "week16" && doc.data().week16[0] == code) {
                let dt = []
                dt = doc.data().week16
                dt.push(std)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week16: dt
                })
                alert("ลงชื่อเรียบร้อย");
                window.location.href = "check.html";
            }
            else{
                alert("กรอก code ผิดพลาด");
                window.location.href = "check2.html";
            }
            

        });


})