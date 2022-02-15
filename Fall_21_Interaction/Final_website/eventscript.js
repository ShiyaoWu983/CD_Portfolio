window.onload = function () {
    const eventImgDom = document.querySelector('.event-img')
    const link = eventImgDom.parentNode
    const points = document.querySelector('.pointer').children
    for (let i = 0; i < points.length; i++) {
        points[i].addEventListener('click', function () {
            let imgIndex = i + 1 // 1 2 3 4
            eventImgDom.src = "event " + imgIndex + ".jpg"

            resetStyle()
            this.className = 'active'
            link.href = 'event' + imgIndex + '.html'
        })
    }

}

function resetStyle() {
    const points = document.querySelector('.pointer').children
    for (let i = 0; i < points.length; i++) {
        points[i].className = '';
    }
}


let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let week = now.getDay()

function leapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

function getTotalDayPerMonth(year, month) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(month + 1)) {
        return 31
    } else if ([4, 6, 9, 11].includes(month + 1)) {
        return 30
    } else if (month == 1) {
        return leapYear(year) ? 29 : 28
    }
}

function onNextMonth() {
    if (month < 11) {
        month++
    } else if (month == 11) {
        month = 0
        year++
    }

    display()
}

function onPrevMonth() {
    if (month == 0) {
        month = 11
        year--
    } else if (month > 0) {
        month--
    }


    display()
}


const englishMonth = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function display() {
    
    // set calendar title
    document.querySelector('#yearId').innerHTML = year
    document.querySelector('#monthId').innerHTML = englishMonth[month]

    let array = []

    let firstDay = new Date(year, month, 1).getDay()

    for (let i = 0; i < firstDay - 1; i++) {
        array.push(' ')
    }

    let totalDay = getTotalDayPerMonth(year, month)
    for (let i = 1; i <= totalDay; i++) {
        array.push(i + '')
    }

    let remainNum = 7 - array.length % 7
    for (let i = 0; i < remainNum; i++) {
        array.push(' ')
    }


    let html = '<div class="week">'
    for (let i = 0; i < array.length; i++) {
        if (i != 0 && i != array.length - 1 && i % 7 == 0) {
            html += '</div><div class="week">'
        }

        let day = array[i]

        html += `<span data-special-date="${year}-${month + 1}-${day}">${day}</span>`
    }
    html += '</div>'

    document.querySelector('.date').innerHTML = html

   bindEvent()
}

