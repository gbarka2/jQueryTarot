const $body = $('body')
const $div = $('<div>Add Random Image</div>')
const cards = [
  'https://www.trustedtarot.com/img/cards/the-fool.png',
  'https://www.trustedtarot.com/img/cards/the-magician.png',
  'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
  'https://www.trustedtarot.com/img/cards/the-empress.png',
  'https://www.trustedtarot.com/img/cards/the-emperor.png',
  'https://www.trustedtarot.com/img/cards/the-heirophant.png',
  'https://www.trustedtarot.com/img/cards/the-chariot.png',
  'https://www.trustedtarot.com/img/cards/strength.png',
  'https://www.trustedtarot.com/img/cards/the-hermit.png',
  'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
  'https://www.trustedtarot.com/img/cards/justice.png',
  'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
  'https://www.trustedtarot.com/img/cards/death.png',
  'https://www.trustedtarot.com/img/cards/temperance.png',
  'https://www.trustedtarot.com/img/cards/the-tower.png',
  'https://www.trustedtarot.com/img/cards/the-moon.png'
]
const $generate = $('.generate')
const $img = $('<img>')

$body.append($div)
$div.css('color', "white")
$div.addClass('generate')

$div.on('click', (event) => {
  const randomImageIndex = Math.floor(Math.random() * cards.length)
  const $img = $('<img>').on('click', addImage)
  $img.addClass('generate')
  $img.css('cursor', 'pointer')
  $img.attr('src', cards[randomImageIndex])
  $body.append($img)
})

function addImage() {
  const randomImageIndex = Math.floor(Math.random() * cards.length)
  const $img = $('<img>').on('click', addImage)
  $img.addClass('generate')
  $img.css('cursor', 'pointer')
  $img.attr('src', cards[randomImageIndex])
  $body.append($img)
}



