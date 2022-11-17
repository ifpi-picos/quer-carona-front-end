import isEmail from "validator/lib/isEmail";
import axios from "axios";

const SHOW_ERROR_MESSAGES = "show-error-message";
const form = document.querySelector("#formEmail") as HTMLFormElement;
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
form?.addEventListener("submit", submitEventFn);

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


console.log('validando email')

import './validandoNome';
import './validandoSenha';

type User = {
    id: number;
    email: string;
    firs_name: string;
}

type GetUsersResponse = { 
    data: User[];
}

async function getUsers() {
    try {
        const { data, status} = await axios.get<GetUsersResponse>(
            'http://localhost:3000/',
            {
                headers: {
                    Accept: 'application/json',
                }
            }
        )

        console.log(JSON.stringify(data, null, 4))

        console.log('response status is:', status)
        
        return data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('erro message:', error.message)
            return error.message
        } else {
            console.log('unexpected error: ', error)
            return 'An unexpected error occurred'
        }
    }
}

getUsers()

