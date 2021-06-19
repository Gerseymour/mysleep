// --------- Add habit to DB
const addHabit = async (data) => {
  const res = await fetch('http://192.168.1.116:3006/habits', {
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
  console.log('inside getdata');
  const response = await fetch('http://192.168.1.116:3006/getList')
  return await response.json()
}

export default {
  addHabit,
  getData
}
