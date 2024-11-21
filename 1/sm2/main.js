let test = prompt('Как тебя зовут?');
alert(`Тебя зовут ${test} `); 

let age = prompt('Сколько тебе лет?');
if ( age < 20 )
{
    alert(`Тебе меньше 20`)
}
else
{
    for (let index = 0; index < 5; index++) {
        alert(`Привет`)                
    }
    
};


let isBoss = confirm('Хочешь изучать js?');
alert(`Супер!`);