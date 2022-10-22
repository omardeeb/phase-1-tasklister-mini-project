document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", (e) =>{
    e.preventDefault();
    submitfun(e.target.newtask.value);
  })
})

function submitfun(act){
  let newli = document.createElement('li');
  let removetask = document.createElement('button');
  newli.textContent = `${act}  `;
  removetask.textContent = "X"
  document.getElementById("tasks").appendChild(newli);
  newli.appendChild(removetask);
  removetask.addEventListener('click', () =>{
    let r = document.getElementsByTagName('button');
    document.getElementById("tasks").removeChild(newli);
    
  })
  let p = document.createElement('p');
  newli.appendChild(p);
  let varr = document.getElementById('select').value;
  p.textContent = `${varr} `;
  if (varr == "high priority"){
    p.style.backgroundColor = 'red';
  }
  else
  if (varr == "medium priority"){
    p.style.backgroundColor = 'yellow';
  }
  else
  if (varr == "low priority"){
    p.style.backgroundColor = 'green';
  }

}


