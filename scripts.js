    // Select the submit button and input to be used later
    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');
    // Listen for input to be typed into the input field
    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    // Listen for submission of form
    document.querySelector('form').onsubmit = e => {

        e.preventDefault();
        // Find the task the user just submitted
        const task = newTask.value;

        const li = document.createElement('li');
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);
        newTask.value = '';
        submit.disabled = true;

        return;
    }