const temperature = document.getElementById('temperature')
const button = document.getElementById('btn')
const result = document.getElementById('result')

button.addEventListener('click', (e) => {
  const tempToConvert = Number(temperature.value)

  const celsius = ((tempToConvert - 32) * 5) / 9

  result.innerText = celsius.toFixed(2)
})
