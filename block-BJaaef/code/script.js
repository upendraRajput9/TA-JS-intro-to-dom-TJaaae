let header =document.createElement(`header`)
document.querySelector(`body`).append(header)
let h1 = document.createElement(`h1`)
h1.innerText = `👑 People of GOT`
header.append(h1)
let ul= document.createElement(`ul`)
ul.className=`container`
got.houses.forEach((house)=>{
    house.people.map((person)=>{
        let li = document.createElement(`li`)
        let img = document.createElement(`img`)
        img.src=person.image
        let h2 = document.createElement(`h2`)
        h2=person.name
        let div = document.createElement(`div`)
        div=person.description
        let a = document.createElement(`a`)
        a.href = person.wikiLink
        a.innerText=`Learn More!`
        let div2 = document.createElement(`div`)
        div2.append(a)
        let span = document.createElement(`span`)
        span.append(img,h2)
        li.append(span,div,div2)
        li.className=`box`
        ul.append(li)
    })
})
document.querySelector(`body`).append(ul)