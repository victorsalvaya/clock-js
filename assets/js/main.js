const clock = document.querySelector('.relogio')
const startBtn = document.querySelector('.iniciar')
const stopBtn =  document.querySelector('.pausar')
const resetBtn = document.querySelector('.zerar')
let segundos = 0;
let startInClock;

formatTimer = (segundos) => {
  const data = new Date (segundos * 1000); // convertendo para milissegundos
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}

startClock = () => {
   startInClock = setInterval(function(){
    segundos ++;
    clock.innerHTML = formatTimer(segundos)
  },1000);
}


startBtn.addEventListener('click', function(){
  clearInterval(startInClock)
  startClock()
  clock.classList.remove('bg-red')
});

stopBtn.addEventListener('click', function(){
  clearInterval(startInClock)
  clock.classList.add('bg-red')
});

resetBtn.addEventListener('click', function(){
  clearInterval(startInClock)
  clock.innerHTML = '00:00:00';
  segundos = 0;
  clock.classList.add('bg-red')
});