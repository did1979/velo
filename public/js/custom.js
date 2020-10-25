//Here we will controll the modal.
function toggleModal(modal) {
    var Modal = document.querySelector(`#${modal}`);
    Modal.classList.toggle('is-active');
};