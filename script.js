
const container = document.getElementById('subjects-added-container');
const newsubject = document.getElementById('subject');
const btn = document.getElementById('add-subject-btn');

btn.addEventListener('click', function(){
    let containerSubject= document.createElement('div');
    containerSubject.classList.add('container-new-subject');

    let subjectListItem = document.createElement('li');
    subjectListItem.innerText= `${newsubject.value}`;
    containerSubject.appendChild(subjectListItem);
  
   
    
    
    if (newsubject.value === ""){
        alert('Enter a task')
    }


    else{
        container.appendChild(containerSubject);
    }

    newsubject.value= ""

})

//no puedo agregar las nuevas asignaturas