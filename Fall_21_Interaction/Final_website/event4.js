document.addEventListener('click', function (e) {
    const scale = Math.random() * 1.5 + 0.5 // random size
    const angle = Math.random() * 360       // random direction

    const flower = document.createElement("img")
    flower.src = 'flower.png'
    flower.style.position = 'absolute';
    flower.style.top = e.pageY - 10 * scale + 'px';
    flower.style.left = e.pageX - 20 * scale + 'px';
    flower.style.transform = 'rotate(' + angle + 'deg) scale(' + scale + ')'

    document.querySelector('body').appendChild(flower)
  })