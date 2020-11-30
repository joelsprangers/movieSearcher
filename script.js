
const radioButtons = document.querySelectorAll('input[type="filter"]');

//console.log(radioButtons);

radioButtons.forEach(button => {
    button.addEventListener("change", function(e){
        const currentFilter = e.target.id;
        console.log(currentFilter);

        //case()
    })
})


// functies verder uitwerken.



