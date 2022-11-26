const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    for(const card of target.querySelectorAll(".card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}

for(const cards of document.querySelectorAll(".cards")) {
    cards.onmousemove = e => handleOnMouseMove(e)
}