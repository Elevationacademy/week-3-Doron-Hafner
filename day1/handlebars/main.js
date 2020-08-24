// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }

// let source = $('#class-template').html()
// let template = Handlebars.compile(source)
// let newHTML = template(classData)
// $('.classroom').append(newHTML);

// const menuData = {
//     menu: [
//       { name: "Google", link: "http://google.com", socialNetwork: false },
//       { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
//       { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
//       { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
//     ]
//   };
  
//   const source = $('#menu-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(menuData);
//   $('.menu').append(newHTML);



// const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
// const source = $('#animals-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(animals);
// $('.animals').append(newHTML);

const languages = {lang:["French", "Spanish", "Togolese", "Javascript", "Uruk"]}
const source = $('#languages-template').html();
const template = Handlebars.compile(source);
const newHTML = template(languages);
$('.languages').append(newHTML);