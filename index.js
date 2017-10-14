function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
<<<<<<< HEAD
  var current = document.getElementById('grand-node')
  var next = current.children[0]

   while (next) {
     current = next
     next = current.children[0]
   }
   return current
=======
  let current = document.querySelectorAll('#grand-node')
  let next = []
  while (current) {
    if (Array.isArray(current)) {
        next.push(current[0])
    }
    current = next.shift()
  }
>>>>>>> 6ac2fdb982c39f9c1efb9eea4acd935ec3f023dd
}
