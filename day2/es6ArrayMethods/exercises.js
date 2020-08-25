// const getArray = () => {
//     $.ajax({
//         type: "GET",
//         url: "https://jsonplaceholder.typicode.com/users",
//         success: function (response) {
//             console.log(response);
//             // ====================== exerecise1 ======================
//             const newArr = response.map(user => { return { email: user.email, companyName: user.company.name } })
//             console.log(newArr);
//             // ====================== exerecise2 ======================
//             const newArr2 = response.filter(user => user.address.zipcode[0] === "5")
//             console.log(newArr2);
//             // ====================== exerecise3 ======================
//             const newArr3 = newArr2.map(user => user.id)
//             console.log(newArr3);
//             // ====================== exerecise4 ======================
//             const startWithC = response.filter(user => user.name.startsWith('C')).map(user => user.name)
//             console.log(startWithC);
//             // ====================== exerecise5 ======================
//             console.log(response.every(user => user.address.city === "South Christy"));
//             // ====================== exerecise6 ======================
//             console.log(response.find(user => user.address.suite === "Apt. 950").company.name);
//             // ====================== exerecise7 ======================
//             const userPhrase = (user) => {
//                 user.forEach(element => {
//                     console.log(`${element.name} lives in ${element.address.city}, and owns the company ${element.company.name}`);
//                 });
//             }
//             userPhrase(response)
//         }
//     })
// }
// getArray()











