const clock = document.querySelector('.clock');

const tick = () =>{

    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    
    const html =`
    <span>${hour}</span>:
    <span>${min}</span>:
    <span>${sec}</span>

    `;

    clock.innerHTML=html;
};
setInterval(tick, 1000);