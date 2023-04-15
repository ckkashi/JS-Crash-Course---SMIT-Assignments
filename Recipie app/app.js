( async function () {

    const searchArea = document.getElementById('search-area');
    const searchBtn = document.getElementById('search-btn');
    const recipiesList = document.getElementById('recipies-list');
    const recipieDetail = document.getElementById('recipie-detail');

    const response =  await fetch('./recipies.json'); 
    const data = await response.json();

    function setSearchResults(searchResults) {
            recipiesList.innerHTML = '';
            let loading = document.createElement("img");
            loading.src = "./loading.gif";
            recipiesList.appendChild(loading);


        setTimeout( function(){
            if (searchResults.length !== 0) {
                
                console.log(searchResults.length);
                recipiesList.innerHTML = '';
                searchResults.map(function (result) {
                    let listItem = document.createElement("li");
                    listItem.innerHTML = `<h1>${result.title}</h1>
                    <br>
                    <p>${result.description !== null ? result.description : 'Description not found.'}</p>
                    `;
                    listItem.addEventListener('click',function () {
                        showDetail(result);
                        window.location='#recipie-detail';
                    });
                    recipiesList.appendChild(listItem);
                });
            }else{
                alert('Nothing found any recipie of the search.')
                setSearchResults(data);
                searchArea.value = '';
            }
        }, 3000);
    }

    setSearchResults(data);

    function showDetail(result) {
        recipieDetail.innerHTML = 
        `
            <h1>${result.title}</h1>
            <br>
            <p><strong>Description : </strong>${result.description !== null ? result.description+"." : 'Description not found.'}</p>
            <br>
            <p><strong>Ingredients : </strong>${result.ingredients !== null ?result.ingredients.join(" <br> ") : 'Ingredients not found.'}</p>
            <br>
            <p><strong>Instructions : </strong>${result.instructions !== null ?result.instructions : 'Instructions not found.'}</p>
            <br>
            <p><strong>Recipie by : </strong>${result.author !== null ?result.author : 'Author not found.'}</p>
            
        ` ;
    }

    function searchRecipie() {
        let searchResults = data.filter(function (value) {
            return value.title.toLowerCase().includes(searchArea.value.toLowerCase()) 
            ||
            value.ingredients.join(" ").includes(searchArea.value.toLowerCase()) ;
        });

        setSearchResults(searchResults);
            
    }

    searchBtn.addEventListener('click',searchRecipie);

})()