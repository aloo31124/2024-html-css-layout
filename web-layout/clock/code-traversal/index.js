
const container = document.querySelector(".container");
const clock = container.querySelector(".clock");

const spanList = clock.querySelectorAll("span");
console.log(spanList);

spanList.forEach(span => {
    span.addEventListener("click", () => {
        const content = span.querySelector("b").textContent;
        console.log(content)
    });
});




