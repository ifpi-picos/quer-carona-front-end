import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = "show-error-message";
const form = document.querySelector(".form") as HTMLFormElement;
const email = document.querySelector(".email-criar") as HTMLInputElement;
const submitEventFn = (event: Event) => {
    // para nao enviar mais o formulario
event.preventDefault();
const target = event.target as HTMLFormElement;
hideErrorMessages(target);
// Criando as validações
checkForEmptyFields(email);
checkEmail(email);
if (shouldSendForm(target)) window.location.href = './cadastroNome.html';
};
form.addEventListener("submit", submitEventFn);

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value)
        showErrorMessage(input, "Campo não pode ficar vazio");
    });
}
function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, "Email Inválido");
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const emailcriarconta = input.parentElement as HTMLDivElement;
    const errorMessage = emailcriarconta.querySelector(
        ".error-message"
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    emailcriarconta.classList.add(SHOW_ERROR_MESSAGES);
}
function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGES)
    );
}
function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(
        () => (send = false)
    );
    return send;
}
