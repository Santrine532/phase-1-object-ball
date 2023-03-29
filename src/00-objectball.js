

console.log(gameObject());
/*
{
  home: {
    teamName: "",
    colors: [...],
    players: {
      "Alan Anderson": {...},
      "Reggie Evans": {...}
    }
  },
  away: {
    ...
  } 
}
*/



function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
  console.log(homeTeamName())
  // logs "Brooklyn Nets"
  
  

function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  
  console.log(homeTeamName())
  // logs "Brooklyn Nets"
  
  