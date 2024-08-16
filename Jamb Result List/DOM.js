

const dom = document.querySelector("#topic")

const div =document.querySelector(".container")

dom.textContent= "2024 JAMB Result"

// div.textContent="Welcome back"

const ul = document.querySelector(".list")

const makeRequest = async ()=>{
     await fetch('endpoint.json')
     

    .then(response => response.json())

// // the retrun promise can be used so we convert it to json
//     .then(res =>   console.log(res));

// }
// makeRequest()



//  to hard code it from backend

    .then(res => {

        console.log(res)

        res.forEach ((each, i) => {
           
                    
            ul.innerHTML += `
            <div class="card">
                <h2>${each.Name}</h2>
                <p>Phy: ${each.Phy + 5}</p>
                <p>Maths: ${each.Maths + 5}</p>
                <p>Eng: ${each.Eng + 5}</p>
                <p>Chem: ${each.Chem + 5}</p>
                <h3>Total Score: ${each.Phy + each.Maths + each.Eng + each.Chem}</h3>
                    <hr/>
            </div>`
           
        });
    
    })
}


makeRequest()




