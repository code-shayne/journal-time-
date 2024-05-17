function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    document.getElementById(sectionId).style.visibility = 'visible';
    if (sectionId === 'prompts' || sectionId === 'themes') {
        document.getElementById("storeFilter").style.visibility = 'visible';
        document.getElementById("sortOptions").style.visibility = 'visible';
    } else {
        document.getElementById("storeFilter").style.visibility = 'hidden';
        document.getElementById("sortOptions").style.visibility = 'hidden';
        document.getElementById("storeSearch").style.display = 'none';
    }
}

function scrollThemeContainer(direction) {
    const container = document.querySelector('.theme-container');
    const containerWidth = container.offsetWidth; // Width of the container
    const scrollAmount = containerWidth; // Adjust this value as needed

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount; // Scroll left
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount; // Scroll right
    }
}

function scrollPromptContainer(direction) {
    const container = document.querySelector('.prompt-container');
    const containerWidth = container.offsetWidth; // Width of the container
    const scrollAmount = containerWidth; // Adjust this value as needed

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount; // Scroll left
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount; // Scroll right
    }
}

function scrollPetContainer(direction) {
    const container = document.querySelector('.pet-container');
    const containerWidth = container.offsetWidth; // Width of the container
    const scrollAmount = containerWidth; // Adjust this value as needed

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount; // Scroll left
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount; // Scroll right
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
