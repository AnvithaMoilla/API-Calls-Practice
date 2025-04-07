async function getData() {
    const user_search = document.getElementById('searchbar').value;
    let url = `https://api.github.com/search/users?q=${user_search}`;

    try 
    {
        document.getElementById("search_results").textContent="Loading....";
        const response = await fetch(url);
        
        if (!response.ok) 
        {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();

        const resultsElement = document.getElementById("search_results");
        resultsElement.innerHTML = '';

        if (json.items && json.items.length > 0) {
            json.items.forEach(item => {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `
                    <div class="user_details">
                        <img src="${item.avatar_url}" alt="${item.login}" width="50" height="50">
                        <div class="user_url">
                            <div>${item.login}</div>
                            <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                        </div>
                    </div>
                    <br><br>
                `;
                resultsElement.appendChild(userDiv);
            });
        } else {
            resultsElement.textContent = "No users found.";
        }

    } catch (error) {
        console.error(error.message);
    }

}

function clearFunc()
{
    document.getElementById('search_results').textContent = '';
}

function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer); 
        timer = setTimeout(() => {
            func(...args); 
        }, delay);
    };
}

document.getElementById('searchbar').addEventListener('input', debounce(getData,500));
