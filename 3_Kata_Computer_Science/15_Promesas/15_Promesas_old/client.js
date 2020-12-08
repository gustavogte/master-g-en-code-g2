const request = require("request");


const AoE_API ="https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";

request.get(AoE_API, (err, res, body) => {
  if (res.statusCode === 200) {
    const json = JSON.parse(body);
    const civilizationName = json.civilizations[3].name;
    console.log(civilizationName);
  }
});
