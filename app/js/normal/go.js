import typish from './typewriter.js'
import CountUp from 'countup.js'
require('@css/normal/code.css')
require('@css/normal/cursor.css')
require('@css/normal/normal.css')
// 配置在一起的日子
const startTime = '2018/08/17'
// preload
document.getElementById('birthday').remove()
let s1 = require('@img/i-miss-u.png')
let s2 = require('@img/lips.svg')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
img1.setAttribute('src', s1)
img2.setAttribute('src', s2)

function go () {
  typish('#typer')
    .type('/**', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('Kailin小宝贝', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .wait(10)
    .type('我想你了', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .wait(10)
    .type('么么哒~o(*≧▽≦)ツ', '<span class="note">', 0)
    .wait(10)
    .then(() => {
      memeda()
    })
    .wait(25)
    .then(() => {
      transBoard('show', () => {
        foreverLove()
      })
    })
}
function memeda () {
  let lip = document.createElement('div')
  lip.className = 'lip'
  document.body.appendChild(lip)
  setTimeout(() => {
    lip.remove()
  }, 2500)
}
function transBoard (type, cb) {
  let board = document.querySelector('.board')
  board.style.display = 'block'
  setTimeout(() => {
    if (!type || type === 'hide') {
      board.style.right = 'calc(-100vw - 10px)'
    } else {
      board.style.right = '0'
    }
  }, 30)
  setTimeout(() => {
    cb && cb()
  }, 2000)
}
function foreverLove () {
  let showArea = document.querySelector('#showArea')
  let heartMain = document.querySelector('#heartMain')
  let foot = document.querySelector('.foot')
  let send = document.querySelector('#send')
  send.addEventListener('click', () => {
    stars()
  })
  showArea.className = 'show'
  // heartBg.style.display = 'block'
  heartMain.style.display = 'block'
  foot.style.display = 'block'
  setTimeout(() => {
    count()
  }, 2000)
}
function count () {
  const date = new Date(`${startTime} 00:00:00`)
  let end = new Date()
  let seconds = (Date.parse(end) - Date.parse(date)) / 1000
  let days = Math.floor(seconds / (3600 * 24))
  let timer = document.querySelector('#timer')
  timer.style.display = 'block'
  let numAnim = new CountUp('count', 0, days, 0, 5)
  numAnim.start()
}
function stars () {
  let send = document.querySelector('#send')
  send.setAttribute('disabled', '')
  setTimeout(() => {
    send.removeAttribute('disabled')
  }, 2000)
  let max = 5
  let startsContainer = document.createElement('div')
  startsContainer.className = 'startsContainer'
  for (let i = 0; i < 30; i++) {
    let img = document.createElement('img')
    img.setAttribute('src', s1)
    img.setAttribute('class', 'stars')
    startsContainer.appendChild(img)
  }
  let comments = document.querySelectorAll('.comment')
  let comentsLength = 0
  if (comments) {
    comentsLength = comments.length
    if (comentsLength > 7) {
      for (let i = 0; i < comentsLength; i++) {
        comments[i].remove()
      }
      comentsLength = 0
    }
  }
  let comment = document.createElement('div')
  comment.className = 'comment'
  comment.style.bottom = 80 + comentsLength * 55 + 'px'
  comment.innerHTML = '我想你了'
  document.body.appendChild(comment)

  document.body.appendChild(startsContainer)
  let els = document.querySelectorAll('.startsContainer')
  let current = els.length
  if (current > max) {
    els[0].remove()
  }
}
export {
  go
}
