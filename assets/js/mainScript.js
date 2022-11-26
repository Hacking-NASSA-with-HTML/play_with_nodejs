import { John } from "./pathToNames.js";
import { Maria } from "./pathToNames.js";

const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <a href="https://github.com/Hacking-NASSA-with-HTML/Array_iteration_cheatsheet"
                target="_blank"><img width="149" height="149"
                src="./assets/img/fork_me_left_red.png"
                style="position: fixed; top:0; left:0" alt="Fork me on GitHub">
            </a>
            <h1 class="titleH1">Play with nodejs</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">${John}</p>
            <p class="paragraph">${Maria}</p>
    </main>`
    return renderMainPageContent
}

console.log(John)
console.log(Maria)