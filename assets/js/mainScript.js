import { John } from "./pathToNames.js";
import { Maria } from "./pathToNames.js";
import { secretName } from "./pathToNames.js";

const generatedContent = document.getElementById('containerForGeneratedContent')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<section id="mainSection">
            <a href="https://github.com/Hacking-NASSA-with-HTML/play_with_nodejs"
                target="_blank"><img width="149" height="149"
                src="./assets/img/fork_me_left_red.png"
                style="position: fixed; top:0; left:0" alt="Fork me on GitHub">
            </a>
            <h1 class="titleH1">Code For Joy</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">${John}</p>
            <p class="paragraph">${Maria}</p>
            <p class="paragraph">secret name is: ${secretName}</p>
        </section>
        `
    return renderMainPageContent
}

console.log(John)
console.log(Maria)
console.log(secretName)