console.log("This is index.js")
// c4510a262ec24ef6be770acf581eab8f  <-- My API key
// grab the news container
let newsAccordion = document.getElementById('newsAccordion');
let xhr = new XMLHttpRequest();
let source = 'bbc-news';
let apiKey = 'c4510a262ec24ef6be770acf581eab8f'
let newsHtml="";
let news;
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText)
        let article = json.articles;
        article.forEach((element,index)=>
        {
            news = `<div class="card">
        <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="false" aria-controls="collapse${index}">
                <b>Breaking News ${index + 1}:</b> ${element["title"]}
            </button>
            </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
    </div>`
    newsHtml+=news;
        })
}
newsAccordion.innerHTML=newsHtml;
}

xhr.send();