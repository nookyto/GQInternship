document.addEventListener("DOMContentLoaded", function() {

    var numberVotes = document.getElementById('numberVotes');
    var numberUser = document.getElementById('numberUser');
    var numberShares = document.getElementById('numberShares');

    numberVotes.textContent = totalNumberOfVotes;
    numberUser.textContent = totalNumberOfUsers;
    numberShares.textContent = totalNumberOfShares;
});