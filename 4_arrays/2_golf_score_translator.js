const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

const diffToRes = {
  "0": names[3],
  "1": names[2],
  "-1": names[4],
  "-2": names[5],
}

function golfScore(par, strokes) {
   if (strokes === 1) return names[0];
   
  const diff = par - strokes;
  
  if (diff >= 2) return names [1];

  const res = diffToRes[diff];
  
  return res || "Go Home!";
}

