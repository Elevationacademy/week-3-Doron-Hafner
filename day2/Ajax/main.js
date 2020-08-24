// // ==================== exercise1 ======================

// $('button').on('click', () => {
//     fetch ()
//     $('#input').val('')
// })


// const fetch = function (input) {
//     input = $('#input').val()
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${input}`,
//         success: function (data) {
//             const name = data.items[0].volumeInfo.title
//             render (name)
//         },
//         error: function (xhr, text, error) {
//             console.log('error');
//         }
//     }); 
// }
// const render = name => {
//     $('body').append(`<div>${name} is best book in the world </div>`);
// }


// // ==================== exercise2 ======================
// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(bookArr);
//         },
//         error: function (xhr, text, error) {
//             console.log('error');
//         }
//     })
// }
// fetch("title", "The Wise Man's Fears")


// // ==================== exercise3 ======================
// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             let bookArr = []
//             data.items.forEach(element => {
//                 let title = element.volumeInfo.title
//                 let author = element.volumeInfo.authors
//                 let isbn = element.volumeInfo.industryIdentifiers[1]
//                 bookArr.push({ title: title, author: author, isbn: isbn })
//             })
//             console.log(bookArr);
//         },
//         error: function (xhr, text, error) {
//             console.log('error');
//         }
//     })
// }
// fetch("title", "The Wise Man's Fears")



// ==================== exercise ======================
// ==================== exercise ======================
// ==================== exercise ======================
// ==================== exercise ======================
// ==================== exercise ======================


