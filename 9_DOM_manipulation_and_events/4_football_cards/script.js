const footballTeam = {
    team: "Zenit",
    year: 1996,
    headCoach: "Sergey Semak",
    players: [
        {
            "name": "Артём Дзюба",
            "position": "forward",
            "isCaptain": true
        },
        {
            "name": "Малком",
            "position": "forward",
            "isCaptain": false
        },
        {
            "name": "Клаудиньо",
            "position": "midfielder",
            "isCaptain": false
        },
        {
            "name": "Вилмар Барриос",
            "position": "midfielder",
            "isCaptain": false
        },
        {
            "name": "Дуглас Сантос",
            "position": "defender",
            "isCaptain": false
        },
        {
            "name": "Михаил Кержаков",
            "position": "goalkeeper",
            "isCaptain": false
        }
    ]
}

const headCoach = document.getElementById('head-coach');
const team = document.getElementById('team');
const year = document.getElementById('year');
const playersSelector = document.getElementById('players');
const playerCards = document.getElementById('player-cards');

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

// commit next line to pass the test
// this line set initial value and display cards after page reload
setPlayerCards(playersSelector.value);

playersSelector.addEventListener('change', e => setPlayerCards(e.target.value));

function setPlayerCards(pos) {
    const players = getPlayersByPosition(pos);
    playerCards.textContent = '';
    players.forEach(player => playerCards.appendChild(getPlayerCard(player)));
}

function getPlayerCard(player) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    const h2 = document.createElement('h2');
    h2.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;
    const p = document.createElement('p');
    p.textContent = `Position: ${player.position}`;
    playerCard.appendChild(h2);
    playerCard.appendChild(p);
    return playerCard;
}


function getPlayersByPosition(pos) {
    if (pos === 'all') {
        return footballTeam.players;
    }

    return footballTeam.players.filter(player => player.position === pos);
}