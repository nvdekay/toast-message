// Toast function
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest('.toast_close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle'
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast_icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast_body">
                <h3 class="toast_title">
                    ${title}
                </h3>
                <p class="toast_message">
                    ${message}
                </p>
            </div>
            <div class="toast_close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        main.appendChild(toast);


    }
}

toast({
    title: 'Success',
    message: 'Woh! Everything looks good',
    type: 'success',
    duration: 3000
})

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Woh! Everything looks good',
        type: 'success',
        duration: 3000
    })
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Something went wrong',
        type: 'error',
        duration: 000
    })
}
