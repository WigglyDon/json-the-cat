const request = require("request");


const breedName = process.argv[2];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;


request(URL, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    console.log(error);
  }


  if (data.length === 0) {
    console.log("breed not found");
  } else {
    console.log(data[0].description);
  }



});



