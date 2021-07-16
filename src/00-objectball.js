function gameObject () {  
  return {
    home: {
      teamName:'Brooklyn Nets',
      colors:['Black', 'White'],
      players: {'Alan Anderson': {
        "number": 0,
        "shoe": 16,
        "points": 22,
        "rebounds": 12,
        "assists": 12,
        "steals": 3,
        "blocks": 1,
        "slamDunks": 1 
      },
      'Reggie Evans':{
        "number": 30,
        "shoe": 14,
        "points": 12,
        "rebounds": 12,
        "assists": 12,
        "steals": 12,
        "blocks": 12,
        "slamDunks": 7
      },
      'Brook Lopez':{
        "number": 11,
        "shoe": 17,
        "points": 17,
        "rebounds": 19,
        "assists": 10,
        "steals": 3,
        "blocks": 1,
        "slamDunks": 15
      },
      'Mason Plumlee':{
        "number": 1,
        "shoe": 19,
        "points": 26,
        "rebounds": 12,
        "assists": 6,
        "steals": 3,
        "blocks": 8,
        "slamDunks": 5
      },
      'Jason Terry':{
        "number": 31,
        "shoe": 15,
        "points": 19,
        "rebounds": 2,
        "assists": 2,
        "steals": 4,
        "blocks": 11,
        "slamDunks": 1
      }
    } //end of home players
    },   //end of home
    away: {
      teamName:'Charlotte Hornets',
      colors:['Turquoise', 'Purple'],
      players: {
      'Jeff Adrien':{
        "number": 4,
        "shoe": 18,
        "points": 10,
        "rebounds": 1,
        "assists": 1,
        "steals": 2,
        "blocks": 7,
        "slamDunks": 2 
      },
      'Bismak Biyombo':{
        "number": 0,
        "shoe": 16,
        "points": 12,
        "rebounds": 4,
        "assists": 7,
        "steals": 7,
        "blocks": 15,
        "slamDunks": 10 
      },
      'DeSagna Diop':{
        "number": 2,
        "shoe": 14,
        "points": 24,
        "rebounds": 12,
        "assists": 12,
        "steals": 4,
        "blocks": 5,
        "slamDunks":  5
      },
      'Ben Gordon':{
        "number": 8,
        "shoe": 15,
        "points": 33,
        "rebounds": 3,
        "assists": 2,
        "steals": 1,
        "blocks": 1,
        "slamDunks": 0 
      },
      'Brendan Haywood':{ 
        "number": 33,
        "shoe": 15,
        "points": 6,
        "rebounds": 12,
        "assists": 12,
        "steals": 22,
        "blocks": 5,
        "slamDunks": 12
      }
    } //end of players
   }//end of away
  } //end of obj
} //end of fxn

function isHomeTeam(teamNameInput){
  return teamNameInput === gameObject().home.teamName;
}

function awayTeam(){
  return gameObject().away;
}

function homeTeam(){
  return gameObject().home;
}
function players(){
  return Object.assign({}, awayTeam().players, homeTeam().players)
}

//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerInput){
  return players()[playerInput].points;
}

// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player
function shoeSize(playerInput){
  return players()[playerInput].shoe;
}

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamInput){
  return gameObject().home.teamName === teamInput  ? gameObject().home.colors : gameObject().away.colors
}

//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(){
  const teams = [];
  teams.push(gameObject().home.teamName, gameObject().away.teamName);
  return teams;
}

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamNameInput){
  const jerseryNumbers = [];
  let teamObj
  isHomeTeam(teamNameInput) ? teamObj = homeTeam() : teamObj = awayTeam();
  for (const player in teamObj.players){
    jerseryNumbers.push(teamObj.players[player].number);
  }
  return jerseryNumbers;
}

//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. 
function playerStats(playerInput){
  return players()[playerInput];
}

//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
function bigShoeRebounds(){
  const bigShoe = {name:'', shoe:0,};
  const playersObj = players();
  let biggestShoe;
  for (const player in playersObj) {
    if (playersObj[player].shoe > bigShoe.shoe){
      bigShoe.name = player
      bigShoe.shoe = playersObj[player].shoe
    }
  }
  biggestShoe = bigShoe.name;
  return playersObj[biggestShoe].rebounds;
}

//Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
  let mostPoints = {name:'', points:0}
  const playersObj = players();
  for(const player in playersObj){
    if (playersObj[player].points > mostPoints.points){
      mostPoints.name = player;
      mostPoints.points = playersObj[player].points;
    }
  }
  return mostPoints;
}

//Which team has the most points? Call the function winningTeam.
function winningTeam(){
  const awayTeamPoints = findPoints(awayTeam()).reduce(function (count, start){return count + start}, 0);
  const homeTeamPoints = findPoints(homeTeam()).reduce(function (count, start){return count + start}, 0);
  function findPoints(teamObj){
    const points = [];
    for (const player in teamObj.players){
      // debugger
    points.push(teamObj.players[player].points)
    }
    return points
  }
  return awayTeamPoints > homeTeamPoints ? awayTeam().teamName : homeTeam().teamName;
}
//Which player has the longest name? Call the function playerWithLongestName.


//Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon