
/* function updateInnerHTML (selector, string){
    document.querySelector('selector') = string
}

updateInnerHTML("h1"," New Topic")
*/

function strong(string){
    return `<strong>${string}</strong>`
}

const template = strong('making things useful')

console.log(template)

const updateInnerHTML = function(selector,htmlString){
    document.querySelector(selector,htmlString).insertAdjacentHTML('beforeend',htmlString)
}

updateInnerHTML("section",template)