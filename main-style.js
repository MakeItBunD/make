function getDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(getDate, 0);

$(window).ready(function(){
setTimeout ("$('#block1').show('drop');",2000);
});