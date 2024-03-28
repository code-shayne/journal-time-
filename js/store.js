function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    document.getElementById(sectionId).style.visibility = 'visible';
}

function scrollContainer(direction) {
    const container = document.querySelector('.product-container');
    const containerDimensions = container.getBoundingClientRect();
    const containerWidth = containerDimensions.width;
    const scrollAmount = containerWidth; // Adjust this value as needed

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

// const productContainers = document.querySelectorAll('.product-container');
// const nxtBtn = document.querySelectorAll(".nxt-btn");
// const preBtn = document.querySelectorAll(".pre-btn");

// nxtBtn.addEventListener('click', () => {
//     item.scrollLeft += containerWidth;
// })

// preBtn.addEventListener('click', () => {
//     item.scrollLeft -= containerWidth;
// })
// if (nxtBtn.length > 0 && preBtn.length > 0) {
//     nxtBtn.forEach((item, i) => {
//         item.addEventListener('click', () => {
//         item.parentNode.scrollLeft += containerWidth;
//         });
//     });

//     preBtn.forEach((item, i) => {
//         item.addEventListener('click', () => {
//             item.parentNode.scrollLeft -= containerWidth;
//         });
//     });
// }
// const productContainers = document.querySelectorAll('.product-container');
// const nxtBtn = document.querySelectorAll('.nxt-btn');
// const preBtn = document.querySelectorAll('.pre-btn');

// if (nxtBtn.length > 0 && preBtn.length > 0) {
//     nxtBtn.forEach((item, i) => {
//         let containerDimensions = item.getBoundingClientRect();
//         let containerWidth = containerDimensions.width;

//         nxtBtn.addEventListener('click', () => {
//             item.productContainers.scrollLeft += containerWidth;
//         });
//     });

//     preBtn.forEach((item, i) => {
//         let containerDimensions = item.getBoundingClientRect();
//         let containerWidth = containerDimensions.width;

//         preBtn.addEventListener('click', () => {
//             item.productContainers.scrollLeft -= containerWidth;
//         });
//     });
// }


//     productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;
    
//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })
