const button = document.querySelector('.search button')
const inputWord = document.querySelector('.search input')
const result = document.querySelector(".result")


button.addEventListener("click", () => {

  const word = inputWord.value
  
  fetch(`https://significado.herokuapp.com/v2/${word}`)
  .then(result => result.json())
  .then(data => view(data))
 
})


function view(data) {
  console.log(data)

  let html = ''
  html += `<h1>Palavra: ${inputWord.value}</h1>`
 

  data.forEach(word => {
   
    html += `<p>Classe gramatical: ${word.partOfSpeech}</p>`

    word.meanings.forEach(meaning =>
      html += `<div>- ${meaning}</div>`
    )
    html += `<br> <p><em>${word.etymology}</em></p>`
    
  })

  result.innerHTML = html
}