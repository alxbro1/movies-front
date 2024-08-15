const validateForm = require('./validateData');
const updateServerData = require('./updateServerData')

const sendData = (() => {
    const form = document.querySelector(".needs-validation");

      form.addEventListener("submit",(event) => {
          event.preventDefault()
          if (!validateForm(form)) {
            event.stopPropagation();
            form.classList.add("was-validated");
            return alert("Make sure the fields are correct");
          }
          const formData = Object.fromEntries(new FormData(event.target))
          updateServerData(formData)
          form.classList.remove("was-validated");
          event.target.reset()
        },
        false
      );
  })()

module.exports = sendData