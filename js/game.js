let ok = "ok";
console.log(`Все ${ok}!`);

let all__td = document.querySelectorAll('td')
console.log(all__td);

all__td.forEach(function(item){
    item.addEventListener('click', function(){
        console.log(item);
        item.className = "red";
    })
})


    

