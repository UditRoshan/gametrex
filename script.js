const heroGames = document.querySelectorAll('.hero-games>img')
const gName = document.querySelector('.g-name')
const gGenre = document.querySelector('.g-genre')
const gPrice = document.querySelector('.g-price')
const gRating = document.querySelector('.g-rating')
const hero = document.querySelector('.hero')

const mediaQuery = window.matchMedia('(max-width: 480px)')
const mediaQueryOriginal = window.matchMedia('(min-width: 1200px)')

heroGames[0].addEventListener('click', ()=>{
    gName.innerHTML = "For Honor"
    gGenre.innerHTML = "Fighting - Action"
    gPrice.innerHTML = "$29.99"
    gRating.innerHTML = "3.1/5"
    hero.style.background = "url(images/BG4.jpg)"
    hero.style.backgroundPosition = "center"
    hero.style.backgroundRepeat = "no-repeat"
    hero.style.backgroundSize = "cover"
})

heroGames[1].addEventListener('click', ()=>{
    gName.innerHTML = "Assassin's Creed Unity"
    gGenre.innerHTML = "Stealth - Fighting - Action - Adventure"
    gPrice.innerHTML = "$59.99"
    gRating.innerHTML = "4.2/5"
    hero.style.background = "url(images/BG1.webp)"
    hero.style.backgroundPosition = "center"
    hero.style.backgroundRepeat = "no-repeat"
    hero.style.backgroundSize = "cover"
})

heroGames[2].addEventListener('click', ()=>{
    gName.innerHTML = "Call Of Duty Modern Warefare"
    gGenre.innerHTML = "First Person Shooter - Adventure"
    gPrice.innerHTML = "$19.75"
    gRating.innerHTML = "3.5/5"
    hero.style.background = "url(images/BG3.jpg)"
    hero.style.backgroundRepeat = "no-repeat"
    hero.style.backgroundSize = "cover"
    hero.style.backgroundPosition = "center"
})

heroGames[3].addEventListener('click', ()=>{
    gName.innerHTML = "Red Dead Redemption 2"
    gGenre.innerHTML = "Shooter - Action - Adventure - Open World"
    gPrice.innerHTML = "$23.99"
    gRating.innerHTML = "4.8/5"
    hero.style.background = "url(images/BG2.jpg)"
    hero.style.backgroundPosition = "center"
    hero.style.backgroundRepeat = "no-repeat"
    hero.style.backgroundSize = "cover"
})


// KTC
const tabs = document.querySelectorAll('.left .inner .tab')
const ktc = document.querySelector('#ktc')
const topImg = document.querySelector('#topImg')
const bottomh1 = document.querySelector('#bottomh1')
const bottomp = document.querySelector('#bottomp')
const bottoma = document.querySelector('#bottoma')

tabs[0].addEventListener('click', () => {
    ktc.style.background = "url(images/agent.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/agent.png"
    topImg.style.height = "130%"
    topImg.style.top = "35%"
    bottomh1.textContent = "Agent 47"
    bottomp.textContent = "Agent 47 is a professional hitman and was the former top agent for the International Contract Agency, until he exposed agency information to the public, ending them permanently. After exposing the ICA and destroying Providence, both 47 and Diana went Freelance and now operate a murder-for-hire service by themselves with no ties to the ICA."
    bottomp.style.background = "#080b1e"
    bottoma.src = "https://hitman.fandom.com/wiki/Agent_47"
})

tabs[1].addEventListener('click', () => {
    ktc.style.background = "url(images/arthur.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/arthur.png"
    topImg.style.height = "150%"
    topImg.style.top = "25%"
    bottomh1.textContent = "Arthur Morgan"
    bottomp.textContent = "Arthur Morgan is a notorious outlaw who serves as the lead enforcer of the Van der Linde gang, as well as their deadliest member. He assists his mentor Dutch van der Linde in trying to live the dream of living outside of the law, but after some mishaps and tragedies, Arthur begins to have doubts about his loyalty to the gang's leader. Throughout the game, he attempts to either achieve his redemption for his crimes or become even more ruthless and cold-blooded in his life."
    bottomp.style.background = "#d3b694"
    bottoma.src = "https://hero.fandom.com/wiki/Arthur_Morgan"
})

tabs[2].addEventListener('click', () => {
    ktc.style.background = "url(images/ezio.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/ezio.png"
    topImg.style.height = "130%"
    topImg.style.top = "35%"
    bottomh1.textContent = "Ezio Auditore da Firenze"
    bottomp.textContent = "Ezio Auditore da Firenze (1459 – 1524) was a Florentine nobleman during the Renaissance, and, unbeknownst to most historians and philosophers, a Master Assassin and the Mentor of the Italian Brotherhood of Assassins, a title which he held from 1503 to 1513. He is also an ancestor of William and Desmond Miles, as well as Clay Kaczmarek."
    bottomp.style.background = "#9d1e1d"
    bottoma.src = "https://assassinscreed.fandom.com/wiki/Ezio_Auditore_da_Firenze"
})

tabs[3].addEventListener('click', () => {
    ktc.style.background = "url(images/geralt.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/geralt.png"
    topImg.style.height = "130%"
    topImg.style.top = "35%"
    bottomh1.textContent = "Geralt of Rivia"
    bottomp.textContent = `Geralt is known also as Gwynbleidd (Elder Speech meaning "The White Wolf", a name which was given to him by the dryads), as well as the Butcher of Blaviken, after an unfortunate incident in that city.`
    bottomp.style.background = "#262629"
    bottoma.src = "https://witcher-games.fandom.com/wiki/Geralt_of_Rivia"
})

tabs[4].addEventListener('click', () => {
    ktc.style.background = "url(images/jin.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/jin.png"
    topImg.style.height = "135%"
    topImg.style.top = "35%"
    bottomh1.textContent = "Jin Sakai"
    bottomp.textContent = `Jin Sakai is a samurai under the service of his uncle, Lord Shimura. Barely surviving a disastrous battle to repel Mongol invaders, he wanders the island of Tsushima to protect his homeland and repel the invaders. At first, an honorable samurai, he forsakes the samurai code and becomes a ruthless samurai-shinobi to defeat the invaders in more extreme measures.`
    bottomp.style.background = "#918173"
    bottoma.src = "https://hero.fandom.com/wiki/Jin_Sakai"
})

tabs[5].addEventListener('click', () => {
    ktc.style.background = "url(images/kratos.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/kratos.png"
    topImg.style.height = "130%"
    topImg.style.top = "35%"
    bottomh1.textContent = "Kratos"
    bottomp.textContent = `He was a servant of Olympus, helping in defeating evil deities. As the series went on in the Greek Era, however, Kratos became much more villainous and sinister, due to his undying bloodlust and his vengeful, destructive behavior as well as his nearly uncontrollable rage. His actions ultimately cause the downfall of Olympus and the Olympian Gods and, along with them all, most of all life in Greece, leaving doom and chaos in his wake; however, his attempted, but failed, suicide had allowed the power of Hope to spread across the world.`
    bottomp.style.background = "#4b606c"
    bottoma.src = "https://villains.fandom.com/wiki/Kratos"
})

tabs[6].addEventListener('click', () => {
    ktc.style.background = "url(images/lara.png)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "150%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/lara.png"
    topImg.style.height = "130%"
    topImg.style.top = "35%"
    bottomh1.textContent = "Lara Croft"
    bottomp.textContent = `Lara Croft is an English archaeologist, treasure hunter and tomb raider. Born to an aristocratic family, Lara is generally disinterested in upper class society, finding it stifling and boring. She takes far more interest in delving into the secrets of the past and finding what is believed to not even exist.`
    bottomp.style.background = "#56433b"
    bottoma.src = "https://tombraider.fandom.com/wiki/Lara_Croft"
})

tabs[7].addEventListener('click', () => {
    ktc.style.background = "url(images/master.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/master.png"
    topImg.style.height = "130%"
    topImg.style.top = "35%"
    bottomh1.textContent = "John-117"
    bottomp.textContent = `Master Chief Petty Officer John-117, more commonly known as Master Chief, is a SPARTAN-II commando of the UNSC Naval Special Warfare Command. He is the protagonist and main character in both the Halo trilogy and Reclaimer Saga. With over thirty years of active duty service, he has become one of the most decorated war veterans in the United Nations Space Command, earning every known UNSC medal except the Prisoner of War Medallion.`
    bottomp.style.background = "#8f9c8a"
    bottoma.src = "https://halo.fandom.com/wiki/John-117"
})

tabs[8].addEventListener('click', () => {
    ktc.style.background = "url(images/price.jpg)"
    ktc.style.backgroundPosition = "center"
    ktc.style.backgroundRepeat = "no-repeat"
    ktc.style.backgroundSize = "100%"
    if(mediaQuery) {
        ktc.style.backgroundSize = "400%" 
    }
    topImg.src = "images/cutouts/price.png"
    topImg.style.height = "130%"
    topImg.style.top = "35%"
    bottomh1.textContent = "Captain Price"
    bottomp.textContent = `Captain John Price is a legendary figure in the Call of Duty series. With his steely resolve, tactical brilliance, and unwavering commitment to his team, Price epitomizes the essence of a true leader on the battlefield. Known for his distinctive mustache and iconic cigar, he commands respect and inspires loyalty among his comrades. From daring missions to facing down formidable adversaries, Captain Price's courage and resourcefulness make him a force to be reckoned with in the world of modern warfare.`
    bottomp.style.background = "#171e2d"
    bottoma.src = "https://callofduty.fandom.com/wiki/John_Price"
}) 


const cardsCol = document.querySelector('.cat-middle .cards-col')
const cards = document.querySelectorAll('.card')

// Card Filter
const catTopElements = document.querySelectorAll('.cat-top ul li a')

const filterCards = e => {
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')

    cards.forEach(card => {
        card.classList.add('hide')
        
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove('hide')
        }
    })
}

catTopElements.forEach(button => button.addEventListener('click', filterCards))


const contactBtns = document.querySelectorAll('#contact .c-top button')
const contactBoxes = document.querySelectorAll('#contact .c-bottom .box')

contactBtns[0].addEventListener('click', ()=>{
    contactBoxes[0].style.zIndex = "2"
    contactBoxes[1].style.zIndex = "1"

    contactBtns[0].style.color = "var(--color3)"
    contactBtns[0].style.background = "var(--color2)"
    contactBtns[1].style.color = "var(--color2)"
    contactBtns[1].style.background = "var(--color3)"
})

contactBtns[1].addEventListener('click', ()=>{
    contactBoxes[1].style.zIndex = "2"
    contactBoxes[0].style.zIndex = "1"

    contactBtns[1].style.color = "var(--color3)"
    contactBtns[1].style.background = "var(--color2)"
    contactBtns[0].style.color = "var(--color2)"
    contactBtns[0].style.background = "var(--color3)"
})

const mobilemenu = document.querySelector('.mobile-menu')
const mobilemenuBox = document.querySelector('.mobile-menu-box')
const header = document.querySelector('.header')

mobilemenu.addEventListener('click', () => {
    if (mobilemenuBox.style.left == "0%" && header.style.background == "var(--color1)") {
        mobilemenuBox.style.left = "-110%"
        header.style.background = "transparent"
    } else {
        mobilemenuBox.style.left = "0%"
        header.style.background = "var(--color1)"
    }
})