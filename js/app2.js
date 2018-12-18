if (localStorage.getItem('id') == "") {
    window.location.href = "login.html";
}
const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
const weekk = document.querySelector('#week');
// create element & render cafe

var namecourse = localStorage.getItem("namecourse")
var week = localStorage.getItem("week")
// getting data
let div = document.createElement('div');
let weekkk = document.createElement('span');

weekkk.textContent = week;
div.appendChild(weekkk);
weekk.appendChild(div);


db.collection('teacher').doc(localStorage.getItem("id")).collection('subject').doc(localStorage.getItem("namecourse")).collection(localStorage.getItem("week")).get().then(snapshot => {
    snapshot.docs.forEach(doc => {
       
            if (week == "week01") {
                
               
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    let day = document.createElement('span');
                    let true1 = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                    namecourse.textContent = day.textContent+' : '+doc.data().id;
                    true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
                   

                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().id).get()
                        .then(function (doc) {
                            namecourse.textContent += ' : ' + doc.data().name

                            li.appendChild(namecourse);
                            li.appendChild(true1);
                            cafeList.appendChild(li);
                        });

                

            }
            if (week == "week02") {
                
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week03") {
               
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week04") {
                
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week05") {
                
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week06") {
               
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week07") {
                let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    let day = document.createElement('span');
                    let true1 = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                    namecourse.textContent = day.textContent+' : '+doc.data().id;
                    true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
                   

                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().id).get()
                        .then(function (doc) {
                            namecourse.textContent += ' : ' + doc.data().name

                            li.appendChild(namecourse);
                            li.appendChild(true1);
                            cafeList.appendChild(li);
                        });
            }
            if (week == "week08") {
              
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
            }
            if (week == "week09") {
                
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week10") {
               
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week11") {
               
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week12") {
              
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week13") {
                
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week14") {
               
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
                
            }
            if (week == "week15") {
                
                let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    let day = document.createElement('span');
                    let true1 = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                    namecourse.textContent = day.textContent+' : '+doc.data().id;
                    true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
                   

                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().id).get()
                        .then(function (doc) {
                            namecourse.textContent += ' : ' + doc.data().name

                            li.appendChild(namecourse);
                            li.appendChild(true1);
                            cafeList.appendChild(li);
                        });
            }
            if (week == "week16") {
               
                let li = document.createElement('li');
                let namecourse = document.createElement('span');
                let day = document.createElement('span');
                let true1 = document.createElement('span');
                li.setAttribute('data-id', doc.id);
                day.textContent = doc.data().day+' '+doc.data().time+' '+doc.data().year+' : '+doc.data().type;
                namecourse.textContent = day.textContent+' : '+doc.data().id;
                true1.textContent = 'เหตุผลการลา : '+doc.data().detail;
               

                var subject = firebase.firestore();
                subject.collection('students').doc(doc.data().id).get()
                    .then(function (doc) {
                        namecourse.textContent += ' : ' + doc.data().name

                        li.appendChild(namecourse);
                        li.appendChild(true1);
                        cafeList.appendChild(li);
                    });
            }
            

        
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('teacher').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});