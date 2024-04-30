const form = document.getElementById('myForm');
const submitButton = form.querySelector('button');
const url = 'https://jsonplaceholder.typicode.com/users';

console.log("Hello, World");
submitButton.addEventListener("click", (e)=> {
    let prompt = document.getElementById('Prompt');
    e.preventDefault();
    fetch(url).then((response)=> {
        response.ok ? response.json()
        .then((data)=>{
            for(let i = 0; i < data.length; i++){
                const Venti = "Venti";
                const Ciel = "Ciel";
                const name = document.getElementById('name');
                let nameValue = name.value
                console.log(nameValue);
                if (nameValue === data[i].username){
                    prompt.innerHTML = "Welcome, " +nameValue;
                    setTimeout(()=>{
                        window.location.href = "index2.html";
                    },500)
                    break;
                } else if (nameValue === Venti) {
                    prompt.innerHTML = "The bard"
                } else if (nameValue === Ciel) {
                    prompt.innerHTML = "Pink on Wednesdays";
                } else {
                    prompt.innerHTML = "Nuh uh" +nameValue+ ", try again"; 
                }
            }
        }):pass
    }).catch((err)=>{
        console.log("Failed to fetch, internet connection required");
        prompt.innerHTML = "Please check internet connection"
    });
});

