// --------- Add habit to DB
const addHabit = async (data) => {
  const res = await fetch('http://localhost:3006/habits', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(err => {
    console.log('error', err)
  })
  return res.json()
}

// --------- Get the data from DB to update indicators
const getData = async () => {
  const response = await fetch('http://localhost:3006/getList')
  const result = await response.json();
  return result;
}

export default {
  addHabit,
  getData
}
