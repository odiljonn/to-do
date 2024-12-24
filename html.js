let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    // agar 2 ta teng bolsa refresh qiladi agar 1ta = bolsa refresh bomaydi//
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
     <p>${input.value} </p>
          <div class="item-btn">
            <i class="bx bxs-edit"></i>
            <i class="bx bx-message-square-x"></i>
          </div>
          `;

    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});

//delate item os completed//

//mork item as from list//
