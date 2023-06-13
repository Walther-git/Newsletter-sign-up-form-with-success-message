document.addEventListener('DOMContentLoaded', () => {

    const subscription_button = document.querySelector('#subscription-button');
    const dismiss_button = document.querySelector('#dismiss-button');
    const sing_up = document.querySelector('#sign-up-id');
    const message = document.querySelector('#message-id');
    const subscription_input = document.querySelector('#subscription-input');
    const email_span = document.querySelector('#email-span')
    const error_mini = document.querySelector('#error-mini');

    // Regular Expresion
    const expresion = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');

    subscription_button.addEventListener('click', () => {
        message.classList.remove('reverse-opacity');
        if(expresion.test(subscription_input.value)){
            if(error_mini.classList.contains('visible') && subscription_input.classList.contains('error__input')){
                error_mini.classList.remove('visible')
                subscription_input.classList.remove('error__input')
            }
            email_span.textContent = subscription_input.value;
            sing_up.classList.add('reverse-opacity');
            setTimeout( () => {
                sing_up.classList.add('display-none');
                message.classList.remove('display-none');
            },'500')
        } else {
            error_mini.classList.add('visible');
            subscription_input.classList.add('error__input');
        }
    })

    dismiss_button.addEventListener('click', () => {
        message.classList.add('reverse-opacity');
        setTimeout(() => {
            sing_up.classList.remove('reverse-opacity');
            sing_up.classList.remove('display-none');
            message.classList.add('display-none');
        }, '500');
    })
});