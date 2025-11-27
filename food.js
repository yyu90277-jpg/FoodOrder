const signupbtn = document.getElementById("signup")
const modal = document.getElementById("first")
signupbtn.addEventListener("click",()=>{
    // modal.classList.add("data-bs-dismiss="modal"")
    signupbtn.setAttribute("data-bs-dismiss","modal")
})