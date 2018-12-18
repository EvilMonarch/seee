if(localStorage.getItem('id')==""){
    window.location.href="login.html";
  }
const form = document.querySelector('#add');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var passcourse = localStorage.getItem("passcourse")
    var namecourse = localStorage.getItem("namecourse")
    var nameteacher = localStorage.getItem("nameteacher")
    var day = localStorage.getItem("day")
    var time = localStorage.getItem("time")
    var room = localStorage.getItem("room")
    var std = document.getElementById("std").value
    var teacher = localStorage.getItem("id")
    db.collection('students').doc(std).collection('subject').doc(namecourse).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    


    var subject = firebase.firestore();

    subject.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
    .then(function (doc){

        let dt = []
        
        
        for(i=0;i<doc.data().student.length;i++){
            if(doc.data().student[i]!=std){
                dt.push(doc.data().student[i])
            }
            
        }
        

        test(dt)

    });


})
function test(dt) {
    
    db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).update({
        student: dt
    })
    var delayInMilliseconds = 1500; //1 second

    setTimeout(function () {
        alert("ลบนักศึกษาเรียบร้อย");
        window.location.href = "blog5.html";
    }, delayInMilliseconds);
    
}



