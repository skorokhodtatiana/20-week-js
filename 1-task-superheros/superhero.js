class Superhero {
    constructor(character, universe, name, career, friends, image) {

        this.character = character;
        this.universe = universe;
        this.name = name;
        this.career = career;
        this.friends = friends;
        this.image = image;
    }
}

let superheroes = [];

let batman = new Superhero("Бэтмэн", "DC-Comics", " Брюс Уэйн", "борец с преступностью, филантроп, миллиардер", " Робин, Бэтгерл");

let superman = new Superhero("Супермэн", "DC-Comics", "Кларк Кент", "борец за справедливость", "собака Крипто", "images/superman.jpg");

let ironman = new Superhero("Железный человек", "Marvel Comics", "Тони Старк", "гений, миллиардер, плейбой, филантроп", "Мстители");

let spiderman = new Superhero("Спайдер-мен/Человек-паук", "Marvel Comics", "Питер Паркер", "борец за справедливость, студент, фотограф", "Мстители, Фантастическая четверка, Люди Икс");

let captainamerica = new Superhero("Капитан Америка", "Marvel Comics", "Стивен Роджерс", "супер-солдат", "Мстители");

let thor = new Superhero("Тор", "Marvel Comics", "нет; полное имя — Тор Одинсон", "борец за справедливость, скандинавский бог", "Мстители");

let hulk = new Superhero("Халк", "Marvel Comics", "Брюс Беннер", "супергерой, борец за справедливость, ученый-биохимик", "Мстители", "images/hulk.jpg");

let wonderwoman = new Superhero("Чудо-женщина", "DC Comics", "Диана Принс", "супергероиня, секретарь-референт", "Лига Справедливости, Бэтмен, Супермен");

let blackwidow = new Superhero("Черная вдова", "Marvel Comics", "Наташа Романофф", "супергероиня, шпионка", "Мстители");

let deadpool = new Superhero("Дэдпул", "Marvel Comics", "Уэйд Уинстон Уилсон", "антигерой, наемник", "частично Мстители, Человек-паук, Росомаха");

superheroes.push(batman, superman, ironman, spiderman, captainamerica, thor, hulk, wonderwoman, blackwidow, deadpool);

let serializedHeroes = JSON.stringify(superheroes);
//console.log(serializedHeroes);

document.addEventListener('DOMContentLoaded', function (ev) {
    let parsedHeroes = JSON.parse(serializedHeroes);
    //console.log(parsedHeroes);

    let listHeroes = "";

    for (let i = 0; i < parsedHeroes.length; i++) {
        let hero = parsedHeroes[i];
        listHeroes += `<div class='cards'>
            <h2 class="header">${hero.character}</h2>
            <div>Вселенная: ${hero.universe}</div>
            <div>Альтер эго: ${hero.name}</div>
            <div>Род деятельности: ${hero.career}</div>
            <div>Друзья: ${hero.friends}</div>` +
            ((hero.image == undefined) ? `` : `<img class="imgHero" src="${hero.image}"/>`) +
            `<form action="#" class="rating-wrapper">
            <div class="rating-items">

            <input type="radio" id="rating5-${i}" class="rating-item" name="rating" onclick="getRating(this)" value="5"/>
            <label for="rating5-${i}" class="rating-label" title="Оценка «5»"></label>
            
            <input type="radio" id="rating4-${i}" class="rating-item" name="rating" onclick="getRating(this)" value="4"/>
            <label for="rating4-${i}" class="rating-label" title="Оценка «4»"></label> 
            
            <input type="radio" id="rating3-${i}" class="rating-item" name="rating" onclick="getRating(this)" value="3"/>
            <label for="rating3-${i}" class="rating-label" title="Оценка «3»"></label>
            
            <input type="radio" id="rating2-${i}" class="rating-item" name="rating" onclick="getRating(this)" checked value="2"/>
            <label for="rating2-${i}" class="rating-label" title="Оценка «2»"></label>
            
            <input type="radio" id="rating1-${i}" class="rating-item" name="rating" onclick="getRating(this)" value="1"/>
            <label for="rating1-${i}" class="rating-label" title="Оценка «1»"></label>
            
            </div>
            </form>
            <div class="rating-result">
            <span class="active"></span>	
            <span class="active"></span>    
            <span class="active"></span>  
            <span></span>    
            <span></span>
        </div>
        </div>`;
    }
    document.getElementById('herosContainer').innerHTML = listHeroes;
    return parsedHeroes;
})

function getRating(elem) {
    let ratingValue = elem.value;

    let parsedHeroes = JSON.parse(serializedHeroes);

    let numHero = elem.id.slice(-1);

    let nameHeros = parsedHeroes[numHero].character;

     localStorage.setItem(nameHeros, ratingValue);
}

