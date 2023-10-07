window.addEventListener("load", checkInternetStatus);

function checkInternetStatus(){
    const statusText = document.getElementById('statusText')
    const ipAddressText = document.getElementById('ipAddressText')
    const networkStrengthText = document.getElementById('networkStrengthText')

    statusText.textContent = 'Checking...'

    if(navigator.onLine){
        

    }
    else{
        statusText.textContent = 'Disconnected'
        ipAddressText.textContent = '-'
        networkStrengthText.textContent = '-'

    }
}