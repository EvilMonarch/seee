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
const form = document.querySelector('#add');
var subject = firebase.firestore();
var stref2 = firebase.firestore();
var week = localStorage.getItem("week")
stref2.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
    .then(function (doc) {
        if (week == "week01" && doc.data().week01[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week01[0]
        }
        else if (week == "week02" && doc.data().week02[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week02[0]
        }
        else if (week == "week03" && doc.data().week03[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week03[0]
        }
        else if (week == "week04" && doc.data().week04[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week04[0]
        }
        else if (week == "week05" && doc.data().week05[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week05[0]
        }
        else if (week == "week06" && doc.data().week06[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week06[0]
        }
        else if (week == "week07" && doc.data().week07[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week07[0]
        }
        else if (week == "week08" && doc.data().week08[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week08[0]
        }
        else if (week == "week09" && doc.data().week09[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week09[0]
        }
        else if (week == "week10" && doc.data().week10[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week10[0]
        }
        else if (week == "week11" && doc.data().week11[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week11[0]
        }
        else if (week == "week12" && doc.data().week12[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week12[0]
        }
        else if (week == "week13" && doc.data().week13[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week13[0]
        }
        else if (week == "week14" && doc.data().week14[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week14[0]
        }
        else if (week == "week15" && doc.data().week15[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week15[0]
        }
        else if (week == "week16" && doc.data().week16[0] != 'STOP') {
            document.getElementById("code").innerHTML = doc.data().week16[0]
        }
        else {
            document.getElementById("code").innerHTML = 'ปิดการเช็คชื่อ'
        }

    }

    )

subject.collection('teacher').doc(localStorage.getItem('id')).collection('subject')
    .onSnapshot(function (doc) {
        var num = 0;

        doc.docs
            .forEach(data => {

                if (data.data().namecourse == localStorage.getItem('namecourse')) {
                    if (data.data().week01.length - 1 != 0 && data.data().week01[data.data().week01.length - 1] != 'STOP') {
                        var num2 = data.data().week01.length - 1
                        $('#list-subject').append(createSubject(data.data().week01[num2])
                        )



                    }
                    if (data.data().week02.length - 1 != 0 && data.data().week02[data.data().week02.length - 1] != 'STOP') {
                        var num2 = data.data().week02.length - 1
                        $('#list-subject').append(createSubject(data.data().week02[num2])
                        )
                    }
                    if (data.data().week03.length - 1 != 0 && data.data().week03[data.data().week03.length - 1] != 'STOP') {
                        var num2 = data.data().week03.length - 1
                        $('#list-subject').append(createSubject(data.data().week03[num2])
                        )
                    }
                    if (data.data().week04.length - 1 != 0 && data.data().week04[data.data().week04.length - 1] != 'STOP') {
                        var num2 = data.data().week04.length - 1
                        $('#list-subject').append(createSubject(data.data().week04[num2])
                        )
                    }
                    if (data.data().week05.length - 1 != 0 && data.data().week05[data.data().week05.length - 1] != 'STOP') {
                        var num2 = data.data().week01.length - 1
                        $('#list-subject').append(createSubject(data.data().week05[num2])
                        )
                    }
                    if (data.data().week06.length - 1 != 0 && data.data().week06[data.data().week06.length - 1] != 'STOP') {
                        var num2 = data.data().week06.length - 1
                        $('#list-subject').append(createSubject(data.data().week06[num2])
                        )
                    }
                    if (data.data().week07.length - 1 != 0 && data.data().week07[data.data().week07.length - 1] != 'STOP') {
                        var num2 = data.data().week07.length - 1
                        $('#list-subject').append(createSubject(data.data().week07[num2])
                        )
                    }
                    if (data.data().week08.length - 1 != 0 && data.data().week08[data.data().week08.length - 1] != 'STOP') {
                        var num2 = data.data().week08.length - 1
                        $('#list-subject').append(createSubject(data.data().week08[num2])
                        )
                    }
                    if (data.data().week09.length - 1 != 0 && data.data().week09[data.data().week09.length - 1] != 'STOP') {
                        var num2 = data.data().week09.length - 1
                        $('#list-subject').append(createSubject(data.data().week09[num2])
                        )
                    }
                    if (data.data().week10.length - 1 != 0 && data.data().week10[data.data().week10.length - 1] != 'STOP') {
                        var num2 = data.data().week10.length - 1
                        $('#list-subject').append(createSubject(data.data().week10[num2])
                        )
                    }
                    if (data.data().week11.length - 1 != 0 && data.data().week11[data.data().week11.length - 1] != 'STOP') {
                        var num2 = data.data().week11.length - 1
                        $('#list-subject').append(createSubject(data.data().week11[num2])
                        )
                    }
                    if (data.data().week12.length - 1 != 0 && data.data().week12[data.data().week12.length - 1] != 'STOP') {
                        var num2 = data.data().week12.length - 1
                        $('#list-subject').append(createSubject(data.data().week12[num2])
                        )
                    }
                    if (data.data().week13.length - 1 != 0 && data.data().week13[data.data().week13.length - 1] != 'STOP') {
                        var num2 = data.data().week13.length - 1
                        $('#list-subject').append(createSubject(data.data().week13[num2])
                        )
                    }
                    if (data.data().week14.length - 1 != 0 && data.data().week14[data.data().week14.length - 1] != 'STOP') {
                        var num2 = data.data().week14.length - 1
                        $('#list-subject').append(createSubject(data.data().week14[num2])
                        )
                    }
                    if (data.data().week15.length - 1 != 0 && data.data().week15[data.data().week15.length - 1] != 'STOP') {
                        var num2 = data.data().week15.length - 1
                        $('#list-subject').append(createSubject(data.data().week15[num2])
                        )
                    }
                    if (data.data().week16.length - 1 != 0 && data.data().week16[data.data().week16.length - 1] != 'STOP') {
                        var num2 = data.data().week16.length - 1
                        $('#list-subject').append(createSubject(data.data().week16[num2])
                        )
                    }
                }
            })
     
    })

function createSubject(week) {

    html = ''
    html += '<div>'
    html += '<div class="description">'
    html += '<div class="wrapper">'

    html += '<p class="text" id="passcourse">' + week + '</p>'

    html += '</div>'
    html += '</div></div></div>'

    return html
}



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (localStorage.getItem('week') == 'week01') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week01
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week01: dt
                })
            });
    }

    if (localStorage.getItem('week') == 'week02') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week02
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week02: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week03') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week03
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week03: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week04') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week04
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week04: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week05') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week05
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week05: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week06') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week06
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week06: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week07') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week07
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week07: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week08') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week08
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week08: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week09') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week09
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week09: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week10') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week10
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week10: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week11') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week11
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week11: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week12') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week12
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week12: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week13') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week13
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week13: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week14') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week14
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week14: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week15') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week15
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week15: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week15') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week15
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week15: dt
                })
            });
    }
    if (localStorage.getItem('week') == 'week16') {
        firebase.firestore().collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
            .then(function (doc) {
                let dt = []
                dt = doc.data().week16
                dt[0] = 'STOP'
                dt[dt.length] = 'STOP'
                db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week16: dt
                })
            });
    }



    var delayInMilliseconds = 1500; //1 second

    setTimeout(function () {
        window.location.href = "blog2.html";
    }, delayInMilliseconds);

})
