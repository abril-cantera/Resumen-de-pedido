const btnProceed = document.getElementById("button-proceed");
const icon = document.getElementById("icon");
const form = document.getElementById("form");
const btnSend = document.getElementById("button");
const $name = document.getElementById("nombre");
const $lastName = document.getElementById("apellido");

btnProceed.addEventListener("click", openForm);
icon.addEventListener("click", openForm);
btnSend.addEventListener("click", sendForm);

function openForm() {
  form.classList.toggle("inactive");
}

function sendForm() {
  if ($name.value === "" || $lastName.value === "") {
    swal("Estos campos son obligatorios para el registro de su compra");
    openForm();
  } else {
    swal(
      `Compra registrada a nombre de: ` +
        `${$name.value}` +
        ` ` +
        `${$lastName.value}`
    );
    openForm();
    $name.value = "";
    $lastName.value = "";
  }
}
