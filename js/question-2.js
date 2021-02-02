// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const container = document.querySelector(".container");

async function getAPI() {
    try {
            const response = await fetch(url);
            const result = await response.json();
            const info = result.results;

            console.log(info);
            container.innerHTML = "";

            for (let i = 0; i < info.length; i++) {
                
                    if (i === 8) {
                    break;
                    }

                container.innerHTML += `<div class="info">
                <h2>${info[i].name}</h2>
                <p><span>Rating:</span> ${info[i].rating}</p>
                <p><span>Number of tags:</span> ${info[i].tags.length}</p>
                </div>`;

            }
        }

        catch (errorMessage) {
        container.innerHTML = displayError("Omg! You broke it!");
        console.log(errorMessage);
    
    }   finally {
        console.log("This will run whether there is an error or not, and I`m not sure why we need it 😅");
    }
};
    
    getAPI();