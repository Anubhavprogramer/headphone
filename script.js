document.addEventListener("DOMContentLoaded", function () {
    const commentsList = document.getElementById("comments-list");
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        const name = nameInput.value;
        const comment = commentInput.value;
        
        if (name && comment) {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentsList.appendChild(commentDiv);
            
            nameInput.value = "";
            commentInput.value = "";
        }
    });


});

const openpopup1 = document.getElementById("open-popup1")
const openpopup2 = document.getElementById("open-popup2")
const openpopup3 = document.getElementById("open-popup3")
const openpopup4 = document.getElementById("open-popup4")
const closepopup1 = document.getElementById("close-popup1")
const closepopup2 = document.getElementById("close-popup2")
const closepopup3 = document.getElementById("close-popup3")
const closepopup4 = document.getElementById("close-popup4")

const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const q3 = document.getElementById('q3')
const q4 = document.getElementById('q4')
openpopup1.addEventListener('click',function(){
    q1.style.display = 'block';
})
openpopup2.addEventListener('click',function(){
    q2.style.display = 'block';
})
openpopup3.addEventListener('click',function(){
    q3.style.display = 'block';
})
openpopup4.addEventListener('click',function(){
    q4.style.display = 'block';
})

closepopup1.addEventListener('click', function () {
    q1.style.display = 'none';
})
closepopup2.addEventListener('click', function () {
    q2.style.display = 'none';
})
closepopup3.addEventListener('click', function () {
    q3.style.display = 'none';
})
closepopup4.addEventListener('click', function () {
    q4.style.display = 'none';
})
