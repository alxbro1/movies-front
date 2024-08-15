const updateServerData = async (data) => {
  return fetch('http://localhost:3000/movies', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status == 201) {
      alert("New Movie created")
    }
    else{
      alert("Have a error")
    }
  });

};

module.exports = updateServerData