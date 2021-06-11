const button = document.getElementById("btn-get-authors");
const input1 = document.getElementById("first-name");
const input2 = document.getElementById("last-name");
const input3 = document.getElementById("book-id");
const div = document.getElementById("authors");

options = 
{
    method:"POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify({
        idBook: `${input3.value}`,
        firstName: `${input1.value}`,
        lastName: `${input2.value}`,  
    })
}

button.addEventListener("click",(()=>{
    fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`)
    .then(response =>{ return response.json()})
    .then(result => 
        {
            for (let author =0 ; author < 2 ; author++){                
                authors.insertAdjacentHTML ('beforeend',`
                <div id=${result[author].id} class="author">
                    <button>Do nothing</button>
                    <h3>${result[author].firstName} ${result[author].lastName}</h3>
                    <h4>Book ID {${result[author].idBook}}</h4>
                    <button class="button">Delete</button>
                </div>
                `)
                    
        }   
    });
    button.disabled = true;
}))


const addAuthorBtn = document.getElementsByTagName("button")[0];
addAuthorBtn.addEventListener("click",event => {
    event.preventDefault();
    fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`,options)
        .then(response =>
            { 
                if (response.status === 200)
                {
                    if (button.disabled === true){ 
                    div.insertAdjacentHTML('beforeend',`
                    <div class="author">
                    <button>Do nothing</button>
                    <h3>${input1.value} ${input2.value}</h3>
                    <h4>Book ID {${input3.value}}</h4>
                    <button class="button">Delete</button>
                    </div>`)
                }
                }})
})