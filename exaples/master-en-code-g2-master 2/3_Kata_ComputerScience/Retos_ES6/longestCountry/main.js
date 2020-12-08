const longestCountry = (...country) => {
  let masLargo = country[0];
  for (let i = 0; i < country.length; i++) {
    if (masLargo.length < country[i].length) {
      masLargo = country[i];
    }
  }
  return masLargo;
};

console.log(
  longestCountry("Mexico", "Holanda", "Australia", "Estados Unidos de America")
);
