const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapper = document.querySelector('.wrapper');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();


yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Yay! I Love You!';
});

noBtn.addEventListener('mouseover', () => {
    const width = Math.floor(Math.random() * (wrapperRect.width
        - noBtnRect.width)) + 1;

    const height = Math.floor(Math.random() * (wrapperRect.height
        - noBtnRect.height)) + 1;

    noBtn.style.left = width + 'px';
    noBtn.style.top = height + 'px';
});