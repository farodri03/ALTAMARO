(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const $form = document.querySelector('#formContact');

        $form.addEventListener('submit', handleSubmit);

        async function handleSubmit(event) {
            event.preventDefault();
            const form = new FormData(this);
            const response = await fetch(this.action, {
                method: this.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.reset();
                const modal = document.getElementById('myModal');
                modal.style.display = 'block';
            }
        }
    });
})();