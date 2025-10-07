function checkDetails() {
    const Nname = document.getElementById('Name').value.trim();
    const PhnNum = document.getElementById('PhnNum').value.trim();
    const Mailid = document.getElementById('mailid').value.trim();
    const Loc = document.getElementById('loc').value.trim();
    const warning = document.getElementById('warning');

    if (!Nname || !PhnNum || !Mailid || !Loc) {
        warning.innerHTML = "Please enter all the details!";
        warning.style.color = "red";
    } else {
        warning.innerHTML = "Form submitted successfully!";
        warning.style.color = "green";

        // Clear form immediately
        document.getElementById('formbody').reset();

        // Hide message after 2 seconds
        setTimeout(() => {
            warning.innerHTML = "";
        }, 2000);
    }
}
