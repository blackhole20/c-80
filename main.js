var name_of_students=[];
function submit(){
    var studentnames=[];
    for (var index =1;index<=4;index++) {
        var name_of_the_student=document.getElementById("student"+index).value;
        name_of_students.push(name_of_the_student);
    }
    console.log(name_of_students);
    var length=name_of_students.length;
    for (var i =0;i<length;i++) {
        studentnames.push("<h4>name- "+name_of_students[i]+'</h4>');
        console.log(studentnames);
        
    }
   document.getElementById("name").innerHTMl=studentnames;
   var removecomas=studentnames.join(" ");
   console.log('iaminremovecoimas'+removecomas);
   document.getElementById("names").innerHTML=removecomas;
   document.getElementById("submitbutton").style.display="none";
   document.getElementById("sortbutton").style.display="inline-block";

}

function sort(){
    name_of_students.sort()
    console.log(name_of_students);
    var studentnamesorting=[];
    var lengthofsort=name_of_students.length;

    for (var i =0;i<lengthofsort;i++) {
        studentnamesorting.push("<h4>name- "+name_of_students[i]+'</h4>');
        console.log(studentnamesorting);
        var removecomas=studentnamesorting.join(" ");
        console.log(removecomas);
        document.getElementById("names").innerHTML=removecomas;
        
    }
}