module.exports = {
    renderPapers: function (papers, mousedown) {
        for (var i = 0; i < papers.length; i++) {
            this.renderPaper(papers[i], mousedown)
        }
    },
    renderPaper: function (paper, mousedown) {

        const paperElem = this.createBasicPaper(paper)
        paperElem.style.top = paper.ogPos.y + "px"
        paperElem.style.left = paper.ogPos.x + "px"
        paperElem.style.transform = "rotate(" + paper.rotation + "deg)";
        paperElem.addEventListener('mousedown', (event) => { mousedown(event) })
        document.getElementById("work-table").appendChild(paperElem);
    },
    renderPlaced: function (papers, callback) {
        for (const property in papers) {
            const parent = document.getElementById(property)
            if (parent) {
                if (papers[property]) {
                    const oldChild = document.getElementById(papers[property].id)
                    console.log(oldChild, property, papers[property].id, papers)
                    oldChild.parentElement.removeChild(oldChild)
                    const paperElem = this.createBasicPaper(papers[property])
                    paperElem.addEventListener('click', callback)
                    parent.appendChild(paperElem);
                }
            }
        }
    },
    createBasicPaper: function (paper) {
        const paperElem = document.createElement("div")
        paperElem.id = paper.id
        paperElem.innerText = paper.type
        paperElem.className = `page ${paper.type} v-${paper.variant}`
        return paperElem
    },
    addReportsToPile: function (papersPlaced) {
        let randomX = Math.random() * 190;
        for (const property in papersPlaced) {
            document.getElementById(property).innerHTML = "";
            //@TEMP IF
            if (papersPlaced[property]) {
                const paperElem = this.createBasicPaper(papersPlaced[property])
                paperElem.style.position = "absolute";
                switch (papersPlaced[property].type) {
                    case "cover":
                        paperElem.style.transform = "translate(20px, -150px)"
                        break;
                    case "introduction":
                        paperElem.style.transform = "translate(140px, -150px)"
                        break;
                    case "content":
                        paperElem.style.transform = "translate(260px, -150px)"
                        break;
                    case "conclusion":
                        paperElem.style.transform = "translate(380px, -150px)"
                        break;

                }
                setTimeout(() => {
                    paperElem.style.transform = "translate(" + randomX + "px, -150px)"
                    setTimeout(() => {
                        paperElem.style.transform = "translate(" + randomX + "px, 0)"
                    }, 250)
                }, 50)
                document.getElementById("final").appendChild(paperElem)
                // document.getElementById(papersPlaced[property].id).style.transform = "translate(10px)"
            }
        }
    },

    cleanTable: function () {
        document.getElementById("work-table").innerHTML = ""
    }

};