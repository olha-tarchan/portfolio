const countDown = () => {
    const countDate = new Date('December 31, 2021 23:59:59').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;

}
const goTime = setInterval(countDown, 1000);



let el = document.querySelectorAll('.animate');

setTimeout(()=> {

    for (let i = 0; i < el.length; ++i) {
        el[i].classList.add('tired');
    };
    clearInterval(goTime);
}, 3000)

document.querySelector('.btn').addEventListener("click", function() {
    for (let i = 0; i < el.length; ++i) {
        el[i].classList.remove('tired');
    }
    setInterval(countDown, 1000);
});

