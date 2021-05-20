//Hente alle sectioner med tabcontent og gjemme de
function openTab(event, tabId) {
    tabcontent = document.querySelector('tabcontent');
    for(i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }


//Hente alle elementer med class tablinks og fjerne class is-active
function openTab(event, tabId) {
    tablinks = document.querySelector('tablinks');
    for(i=0; i < tablinks.length; i++) {
        tablinks[i].querySelector = tablinks[i].querySelector.replace(' is-active', '');
    }
}

//Vise den aktive tabben og legge til is-active på denne
document.getElementById(tabId).style.display = 'block';
event.currentTarget.querySelector += "is-active";

}