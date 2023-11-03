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


    const openpopup1 = document.getElementById("open-popup1")
    const openpopup2 = document.getElementById("open-popup2")
    const openpopup3 = document.getElementById("open-popup3")
    const openpopup4 = document.getElementById("open-popup4")
    const closepopup = document.getElementById("close-popup")
    
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

    closepopup.addEventListener('click', function () {
        // console.log("hello")
        q1.style.display = 'none';
        q2.style.display = 'none';
        q3.style.display = 'none';
        q4.style.display = 'none';
    })
});

