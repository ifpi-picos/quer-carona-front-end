
console.log('Validando senha')
const SHOW_ERROR_MESSAGES1 = "show-error-message1";

const formNome = document.querySelector("#formSenha") as HTMLFormElement;

const password = document.querySelector(".Psenha")  as HTMLInputElement;
const password2 = document.querySelector(".Psenha2") as HTMLInputElement;

export const submitEventFn1 = async (event1: Event) => {
            // para nao enviar mais o formulario
    console.log('oi')
    event1.preventDefault();
    const target = event1.target as HTMLFormElement;

    hideErrorMessages1(target);
    // Criando as validações
    await checkForEmptyFields1(password, password2);
    await checkEqualPasswords1(password, password2);
    const result = await shouldSendForm1(target);
    if (result) window.location.href = './oferecer.html'  //form.submit();
    
};

formNome.addEventListener("submit", submitEventFn1);



async function checkForEmptyFields1(...inputs: HTMLInputElement[]): Promise<void> {
    inputs.forEach((input) => {
        if (!input.value)
        showErrorMessage1(input, "Campo não pode ficar vazio");
    });
}

async function checkEqualPasswords1(password:HTMLInputElement, password2:HTMLInputElement): Promise<void>{
    if (password.value !== password2.value) {
        await showErrorMessage1(password, "Senhas não coincide");
        await showErrorMessage1(password2, "Senhas não coincide");
    }
}
                                                // nao esta retornando nada.
function hideErrorMessages1(formNome: HTMLFormElement): void {
    formNome.querySelectorAll("." + SHOW_ERROR_MESSAGES1).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGES1)
    );
}

async function showErrorMessage1(input: HTMLInputElement, msg: string): Promise<void> {
    const cadastrarSenha1 = input.parentElement as HTMLDivElement;
    const errorMessage1 = cadastrarSenha1.querySelector(
        ".error-message1"
    ) as HTMLSpanElement;
    errorMessage1.innerText = msg;
    cadastrarSenha1.classList.add(SHOW_ERROR_MESSAGES1);
}
//checando se existe algum campo com msg de erro.
function shouldSendForm1(formNome: HTMLFormElement): boolean {
    let send = true;
    formNome.querySelectorAll("." + SHOW_ERROR_MESSAGES1).forEach(
        () => (send = false)
    );
    return send;
}
