function findMatching(drivers , x){
    return drivers.filter(drivers => drivers.toLowerCase() === x.toLowerCase());
}

function fuzzyMatch(drivers, y) {
  return drivers.filter(drivers => drivers.startsWith(y));
}
function matchName(drivers, z) {
    return drivers.filter(drivers => drivers.name === z);
}

