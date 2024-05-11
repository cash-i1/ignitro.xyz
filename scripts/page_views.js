const url = "https://api.jsonbin.io/v3/b/663eda2bad19ca34f8679713";
const headers = {
  'Content-Type': 'application/json',
  'X-Access-Key': '$2a$10$7/Cx7Q1RQezS12RwcaJ71O8.xz19FVCpdxkgHhCrAIic5pUc2PG7m'
};

fetch(url, {
  method: 'GET',
  headers: headers
})
.then(response => response.json())
.then(data => {
  // console.log(data);
  
  const updatedData = { "visits": parseInt(data.record.visits) + 1 };
  // console.log(updatedData)      
  let view_counter = document.getElementById("page-views")
  view_counter.innerText = updatedData["visits"]

  fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(updatedData)
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
})
.catch(error => console.error('Error:', error));

// thanks gpt for converting the python code to js!!
