// // const publishBtn = document.querySelector('.publish-btn');

// publishBtn.addEventListener('click', () => {
//     if(titleField.value.length && descField.value.length){
//         // generating id
//         // let letters = 'abcdefghijklmnopqrstuvwxyz';
//         // let blogTitle = blogTitleField.value.split(" ").join("-");
//         // let id = '';
//         // for(let i = 0; i < 4; i++){
//         //     id += letters[Math.floor(Math.random() * letters.length)];
//         // }

//         // // setting up docName
//         // let docName = `${titleField}-${id}`;
//         // let date = new Date(); // for published at info

//         //access firstore with db variable;
//         db.collection("postings").doc(docName).set({
//             title: titleField.value,
//             article: descField.value,
//             //bannerImage: bannerPath,
//             //publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
//         })
//         // .then(() => {
//         //     location.href = `/${docName}`;
//         // })
//         .catch((err) => {
//             console.error(err);
//         })
//     }
// // })