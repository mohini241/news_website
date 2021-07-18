console.log("This is my index js file");

// Initialize the news api parameters

let apiKey = 'b84e60c1ff87acb23e9a877f5f26ba46'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=covid&country=us&language=en&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
             console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()





// Grab the news container
let newsAccordion2 = document.getElementById('newsAccordion2');

// Create an ajax get request
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `https://gnews.io/api/v4/search?q=india&country=in&language=en&token=${apiKey}`, true);

// What to do when response is ready
xhr2.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
             console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse2${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse2${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion2">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion2.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr2.send()
//technology


let technology='Technology'

// Grab the news container
let newsAccordion3 = document.getElementById('newsAccordion3');

// Create an ajax get request
const xhr3 = new XMLHttpRequest();
xhr3.open('GET', `https://gnews.io/api/v4/search?q=technology&country=us&language=en&token=${apiKey}`, true);

// What to do when response is ready
xhr3.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse3${index}"
                                    aria-expanded="false" aria-controls="collapse2${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse3${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion3">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion3.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr3.send()


