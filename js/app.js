


function showMarks(){
    var num = document.getElementById('marks').value;
    var result = document.getElementById('result');
    var short = document.getElementById('result');
    if (num >= 80 && num <= 100) {
        short.innerHTML = 'show your marks: ' + 'A+';
    }else if(num >= 70 && num <= 79) {
        short.innerHTML = 'show your marks: ' + 'A';
    }else if(num >= 60 && num <= 69) {
        short.innerHTML = 'show your marks: ' + 'A-';
    }else if(num >= 50 && num <= 59) {
        short.innerHTML = 'show your marks: ' + 'B';
    }else if(num >= 40 && num <= 49) {
        short.innerHTML = 'show your marks: ' + 'C';
    }else if(num >= 33 && num <= 39) {
        short.innerHTML = 'show your marks: ' + 'D';
    }else if(num >= 0 && num <= 32) {
        short.innerHTML = 'show your marks: ' + 'F';
    }else{
        alert('Ulta palta number dila online e mair acha');
    }
}

for (var i = 1; i <= 10;i++ ){
    document.write(i + '<br>')
}

var student = ['Tanvir','Karim','Rahim','Solim']

for(var i = 0; i <student.length; i++){
    document.write(student[i],'<br>','<br>');
}

function sum(nam1,nam2){
    document.write(nam1 + nam2 + "<br>");
}
sum(20,20);
sum(200,20);
sum(50,20);

for (var i= 1905; i <= 2030; i++){
    var option = document.createElement('option');
    option.innerText = i;

    document.getElementById('years').appendChild(option);
}
for (var i= 1; i <= 31; i++){
    var option = document.createElement('option');
    option.innerText = i;

    document.getElementById('form').appendChild(option);
}
for (var i= 1; i <= 30; i++){
    var option = document.createElement('option');
    option.innerText = i;

    document.getElementById('month').appendChild(option);
}

// copy 
jSuites.calendar(document.getElementById('calendar'), {
    type: 'year-month-picker',
    format: 'MMM-YYYY',
    validRange: [ '2020-02-01', '2022-12-31' ]
});
// copy 



