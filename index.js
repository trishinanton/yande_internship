const str = `

    = head res
    
    text ((https://ya.ru link)) text.
    
    * item
    * item
`
const arr = str.split(/\n\s*/)
const findHead = arr.filter(a=>a.indexOf('=')>-1)
const findText = arr.filter(a=>a.indexOf('text')>-1)
const findLink = arr.filter(a=>a.indexOf('((')>-1)
const findItem = arr.filter(a=>a.indexOf('*')>-1)


const head = findHead.map(h=>h.split(' '))[0].filter(e=>e.indexOf('=')===-1).join(' ').trim()
const paragraphWith = findText.map(h=>h.split('text'))[0].join('')
const paragraph = paragraphWith.slice(0,paragraphWith.length -1)

const url = findLink.map(h=>h.split(' '))[0].filter(e=>e.indexOf('((')>-1).map(h=>h.split('(('))[0].join('').trim()
const textLink = findLink.map(h=>h.split(' '))[0].filter(e=>e.indexOf('))')>-1).map(h=>h.split('))'))[0].join('').trim()

const item = findItem.map(h=>h.split(' ')).map(a=>a.filter(arr=>arr.indexOf('*')===-1)).map(a=>a.join(''))


const it = (item)=>{
    let li = item.map(e=>{
        return '<li>'+e+'</li>'
    })
    return li.join('')
}
const string = (head,paragraph,it)=>{
    return '<h1>'+head+'</h1>' + '<p>text'+paragraph+'text.</p>'+'<ul>'+it(item)+'</ul>'
}
console.log(string(head,paragraph,it))
