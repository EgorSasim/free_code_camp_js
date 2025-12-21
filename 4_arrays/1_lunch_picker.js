const lunches = [];

function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`)
  return arr;
} 

function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`)
  return arr;
} 

function removeLastLunch(arr) {
   if (!arr.length) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`)
  }
  return arr;
}

function removeFirstLunch(arr) {
   if (!arr.length) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`)
  }
  return arr;
}

function getRandomLunch(arr) {
  if (!arr.length) {
    console.log("No lunches available.");
    return;
  }

  const randIndex = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randIndex]}`);
}

function showLunchMenu(arr) {
  if (!arr.length) {
    console.log("The menu is empty.");
    return;
  }
  const res = "Menu items: " + arr.join(', ');
  console.log(res);
}

