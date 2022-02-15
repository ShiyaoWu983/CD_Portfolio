//calendar click area(problem from here)

const specialDates = {
    '2020-12-24': 'event1.html',
    '2021-7-18': 'event2.html',
    '2021-7-29': 'event2.html',
    '2021-10-30': 'event3.html',
    '2021-12-15': 'event4.html'
}

function bindEvent() {
    document.querySelectorAll("span").forEach(span => {
        span.addEventListener('mouseover', function () {
            let day = span.dataset['specialDate']
            let targetHtmlPage = specialDates[day]
            if (targetHtmlPage) {
                span.style.backgroundColor = 'rgb(251,39,28)' // set red
                span.style.color = '#fff'
                span.style.borderRadius = '5px'
                span.style.cursor = 'pointer'
            }
        })
        
        // reset background color
        span.addEventListener('mouseout', function () {
            span.style.backgroundColor = '#fff'
            span.style.color = '#000'
        })
        span.addEventListener('click', function () {
            let day = span.dataset['specialDate']
            let targetHtmlPage = specialDates[day]
            if (targetHtmlPage) {
                location.href = targetHtmlPage
            }
        })
    })
}

//window.onload = function () {
//    display()
//}


