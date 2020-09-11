var render = require('./render');
var levels = require('./levels');

var width = 300;
var height = 150;
var papers = [];
var papersPlaced = {
    cover: undefined,
    introduction: undefined,
    content: undefined,
    conclusion: undefined
};
var numberOfPiles = 0;
var currentLevel = 0;

papers = levels.loadLevel(currentLevel, width, height)

render.renderLevel(levels.levels[currentLevel], () => {
    render.renderPapers(papers, mousedown);
    render.renderTimer(10)
    setTimeout(() => {
        document.getElementById("timer").classList.add("done")
    }, 5000)
});



let paperSelected = -1
let x = 0;
let y = 0;
let zIndex = 10

function mousedown(event) {
    paperSelected = event.target.id;
    x = event.pageX;
    y = event.pageY;
    event.target.style.zIndex = zIndex++;
    event.target.style.pointerEvents = "none"
    document.body.addEventListener("mousemove", mousemove);
    document.body.addEventListener("mouseup", mouseup);
}

function mousemove(event) {
    let paperElem = document.getElementById(paperSelected)
    paper = getPaperFromId(paperSelected);
    paperElem.style.top = paper.pos.y + event.pageY - y + "px"
    paperElem.style.left = paper.pos.x + event.pageX - x + "px"
}

function mouseup(event) {
    paper = getPaperFromId(paperSelected);
    paper.pos.y += + event.pageY - y
    paper.pos.x += + event.pageX - x
    const oldPaperElem = document.getElementById(paperSelected)
    oldPaperElem.style.pointerEvents = "auto"
    allowedPlaces = ["cover", "introduction", "content", "conclusion"];
    const id = event.target.id
    const index = allowedPlaces.map(a => a + "-container").indexOf(id)
    if (index > -1) {
        if (document.getElementById(id).children.length < 4) {
            papersPlaced[allowedPlaces[index]] = paper
            render.renderPlaced(papersPlaced, paperClicked)
            checkIfAllFilledIn();

        }
    }
    document.body.removeEventListener("mousemove", mousemove);
    document.body.removeEventListener("mouseup", mouseup);
}
function paperClicked(event) {
    paper = getPaperFromId(event.target.id);
    paper.pos.x = paper.ogPos.x
    paper.pos.y = paper.ogPos.y
    const parentId = event.target.parentElement.id
    event.target.parentElement.removeChild(event.target);
    papersPlaced[parentId] = undefined

    render.renderPaper(paper, mousedown)
}

function getPaperFromId(id) {
    return papers.find((paper) => { return paper.id == id })
}

function checkIfAllFilledIn() {
    let valid = true
    if (papersPlaced["cover"])
        variant = papersPlaced["cover"].variant
    for (const property in papersPlaced) {
        if (!papersPlaced[property] || property !== papersPlaced[property].type || variant !== papersPlaced[property].variant) {
            valid = false
            break;
        }
    }
    if (valid) {
        numberOfPiles++;
        render.addReportsToPile(papersPlaced);
        for (const property in papersPlaced) {
            papersPlaced[property] = undefined
        }
        if (numberOfPiles == levels.levels[currentLevel].required) {
            render.endLevel(currentLevel);
        }
    }
}
