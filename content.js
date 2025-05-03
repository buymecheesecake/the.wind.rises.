document.querySelectorAll('p, span, h1, h2, h3, h4, li').forEach(el => {
    const text = el.innerText;
    el.innerHTML = '';

    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; // preserve spaces
        span.style.display = 'inline-block';
        span.style.transition = 'transform 3s ease-in-out, opacity 3s ease-in-out';

        // Random delay so letters drift off randomly
        const delay = Math.random() * 2000;
        setTimeout(() => {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * -200;
            const rot = Math.random() * 720 - 360;
            span.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
            span.style.opacity = '0';
        }, delay);

        el.appendChild(span);
    });
});
