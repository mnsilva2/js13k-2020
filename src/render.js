module.exports = {
    renderPapers: function (papers, mousedown) {
        for (var i = 0; i < papers.length; i++) {
            this.renderPaper(papers[i], mousedown)
        }
    },
    renderPaper: function (paper, mousedown) {

        paperElem = document.createElement("div")
        paperElem.id = paper.id
        paperElem.style.top = paper.ogPos.y + "px"
        paperElem.style.left = paper.ogPos.x + "px"
        paperElem.style.transform = "rotate(" + paper.rotation + "deg)";
        paperElem.innerText = paper.type
        paperElem.addEventListener('mousedown', (event) => { mousedown(event) })
        paperElem.className = `page ${paper.type} v-${paper.variant}`
        document.getElementById("work-table").appendChild(paperElem);
    },
    renderPlaced: function (papers, callback) {
        for (const property in papers) {
            const parent = document.getElementById(property)
            if (parent) {
                // parent.innerHTML = "";
                if (papers[property]) {
                    const oldChild = document.getElementById(papers[property].id)
                    console.log(oldChild, property, papers[property].id, papers)
                    oldChild.parentElement.removeChild(oldChild)
                    const paperElem = document.createElement("div")
                    paperElem.id = papers[property].id
                    paperElem.innerText = papers[property].type
                    paperElem.className = `page ${papers[property].type} v-${papers[property].variant}`
                    paperElem.addEventListener('click', callback)
                    parent.appendChild(paperElem);
                }
            }
        }
    },

    cleanTable: function () {
        document.getElementById("work-table").innerHTML = ""
    }

};