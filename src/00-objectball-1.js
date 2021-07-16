  function gameObject () {  
    const gameObj = {
        home: {
        teamName:'Brooklyn Nets',
        colors:['Black', 'White'],
        players: {'Alan Anderson':
            {
            "number": 0,
            "shoe": 16,
            "points": 22,
            "rebounds": 12,
            "assists": 12,
            "steals": 3,
            "blocks": 1,
            "slamDunks": 1 
            },
            'Reggie Evans':
            {
            "number": 30,
            "shoe": 14,
            "points": 12,
            "rebounds": 12,
            "assists": 12,
            "steals": 12,
            "blocks": 12,
            "slamDunks": 7
            },
            'Brook Lopez':
            {
            "number": 11,
            "shoe": 17,
            "points": 17,
            "rebounds": 19,
            "assists": 10,
            "steals": 3,
            "blocks": 1,
            "slamDunks": 15
            },
            'Mason Plumlee':
            {
            "number": 1,
            "shoe": 19,
            "points": 26,
            "rebounds": 12,
            "assists": 6,
            "steals": 3,
            "blocks": 8,
            "slamDunks": 5
            },
            'Jason Terry':
            {
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
            'Jeff Adrien':
            {
            "number": 4,
            "shoe": 18,
            "points": 10,
            "rebounds": 1,
            "assists": 1,
            "steals": 2,
            "blocks": 7,
            "slamDunks": 2 
            },
           'Bismak Biyombo':
            {
            "number": 0,
            "shoe": 16,
            "points": 12,
            "rebounds": 4,
            "assists": 7,
            "steals": 7,
            "blocks": 15,
            "slamDunks": 10 
            },
            'DeSagna Diop':
            {
            "number": 2,
            "shoe": 14,
            "points": 24,
            "rebounds": 12,
            "assists": 12,
            "steals": 4,
            "blocks": 5,
            "slamDunks":  5
            },
            'Ben Gordon':
            {
            "number": 8,
            "shoe": 15,
            "points": 33,
            "rebounds": 3,
            "assists": 2,
            "steals": 1,
            "blocks": 1,
            "slamDunks": 0 
            },
            'Brendan Haywood':
            { 
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
    return gameObj
  } //end of fxn

  const gameObj = gameObject();

  function numPointsScored(playerName){
    if (Object.keys(gameObj.home.players).includes(playerName)) {
        return `${playerName} scored ${gameObj.home.players[playerName].points} points.`;
    } else if (Object.keys(gameObj.away.players).includes(playerName)) {
        return `${playerName} scored ${gameObj.away.players[playerName].points} points.`;
    } else {
        return 'Player not found'
    }
  }

  function shoeSize(playerName){
    if (Object.keys(gameObj.home.players).includes(playerName)) {
        return `${playerName} wears a size ${gameObj.home.players[playerName].shoe} shoe.`;
    } else if (Object.keys(gameObj.away.players).includes(playerName)) {
        return `${playerName} wears a size ${gameObj.away.players[playerName].shoe} shoe.`;
    } else {
        return 'Player not found'
    }
  }

  function teamColors(teamName){
    if (gameObj.home.teamName === teamName) {
        return `${teamName}'s colors are: ${gameObj.home.colors.join(' & ')}`;
    } else if (gameObj.away.teamName === teamName) {
        return `${teamName}'s colors are: ${gameObj.away.colors.join(' & ')}`;
    } else {
        return 'Team not found'
    }
  }

  function teamNames(){
      const teams = [];
      teams.push(gameObj.home.teamName, gameObj.away.teamName)
      return `Teams: ${teams.join(', ')}`
  }

  function playerNumbers(teamName){
      const jerseryNumbers = [];
      const homeNumbers = [];
        for (key in gameObj.home.players){
        homeNumbers.push(gameObj.home.players[key].number)
        }
      const awayNumbers = [];
        for (key in gameObj.away.players){
        awayNumbers.push(gameObj.away.players[key].number)}


    if (teamName === gameObj.home.teamName){
        return `${teamName}'s player numbers are ${homeNumbers}`;
    } else if (teamName === gameObj.away.teamName){
        return `${teamName}'s player numbers are ${awayNumbers}`;
    } else { return 'Team not found'}
  }

  function playerStats(playerName){
    let isHome = true;
    //determines if home or away team
    if (Object.keys(gameObj.away.players).includes(playerName)) {
        isHome = false;
    } else if (!Object.keys(gameObj.home.players).includes(playerName) && !Object.keys(gameObj.away.players).includes(playerName)) {
        return 'Player not found'
    }
    // returns player's stats   
    if (isHome){
        return gameObj.home.players[playerName];
    } else {
        return gameObj.away.players[playerName]
    }
  }

  function bigShoeRebounds(){
    const biggestFoot = findBigFoot()
    
    function findBigFoot(){
      const bigShoe = {name:'', shoe:0,};
      for (key in gameObj.home.players) {
        if (gameObj.home.players[key].shoe > bigShoe.shoe){
          bigShoe.name = key
          bigShoe.shoe = gameObj.home.players[key].shoe
        }
      }
      for (key in gameObj.away.players) {
        if (gameObj.away.players[key].shoe > bigShoe.shoe){
          bigShoe.name = key
          bigShoe.shoe = gameObj.home.players[key].shoe
        }
      }
      return bigShoe.name
    }//  end of findBigFoot
  
    //check home or away
    let isHome = true;
      //determines if home or away team
      if (Object.keys(gameObj.away.players).includes(biggestFoot)) {
          isHome = false;
      } 
      //returns the number of rebounds associated with biggest shoe
      if (isHome) {
        return gameObj.home.players[biggestFoot].rebounds
      }else {
        return gameObj.away.players[biggestFoot].rebounds
      }
  
  }