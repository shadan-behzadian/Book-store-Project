fetch("https://api.myjson.com/bins/1h3vb3", {
        method: "GET"
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        console.log('Request succeeded: ' + response.statusText);
    }).then(function (json) {

        app.books = json.books;

        console.log(json.books);
    })
    .catch(function (error) {
        console.log("Request failed: " + error.message);
    });

var app = new Vue({
    el: '#eachBook',
    data: {
        books: [],
        search: ''

    },
    computed: {
        filterdBooks: function () {
            return this.books.filter((book) => {
                return (book.titulo.toLowerCase().match(this.search.toLowerCase())) //you used to lowercase methose becouse your search box could not find the values that had upper case so you needed to convert it to lower case when it was search
                || (book.descripcion.toLowerCase().match(this.search.toLowerCase()))
            })
            
        
        }
    }
})
