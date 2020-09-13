(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  levels: [{
      papers: ["a1", "b1", "c1", "d1"],
      text: "Welcome to your new position!\n Your task here is simple, organize the files to make a report. Find all the parts from the same topic, and join them.\n Simply Drag the paper parts from the left to the right and the machine does the rest. \n If you miss place a paper, just tap on it, and the machine spits it out.\nYou have all day to make one report.",
      time: 50,
      required: 1
    },
    {
      papers: ["a1", "b1", "c1", "d1", "a2", "b2", "c2", "d2"],
      text: "Congrats on your first day!\n Today we'll increase the your work capacity, and you have to sort 2 reports.\n Make sure all the papers are from the same category.",
      time: 50,
      required: 2
    },
    {
      papers: ["a1", "b1", "c1", "d1", "a2", "b2", "c2", "d2", "a3", "b3", "c3", "d3", "a4", "b4", "c4", "d4", "a5", "b5", "c5", "d5"],
      text: "By now you should know the drill. Sort all these reports.",
      time: 50,
      required: 5
    },
    {
      papers: ["d1", "a2", "c2", "d2", "b3", "a1", "b2", "c3"],
      text: "Someone has been stealing papers!\n If you can't find all the papers for one report just ignore it, we'll deal with it later.",
      time: 50,
      required: 1
    },
    {
      papers: ["a1", "a1", "b1", "c1", "d1", "a2", "b2", "c2", "a3", "b3", "c3", "c3", "d2"],
      text: "This problem is getting out of hand. We need to find who's responsible!\n In the mean time, just continue to do your job.",
      time: 50,
      required: 2
    },
    {
      papers: ["d4", "a2", "b2", "c2", "a3", "b3", "c3", "a4", "c4", "a1", "b2", "d3", "d4", "c2", "d2", "b4"],
      text: "We found out who's been stealing the papers, tomorrow everything goes back to normal.",
      time: 50,
      required: 3
    },
    {
      papers: ["a1", "d1", "a2", "b2", "a3", "b3", "c3", "d3", "b1", "c1", "c2", "d2"],
      text: "Because of that incident, we can't afford to pay everyone's hours full hours.\nYou have to do the same job but, in half the time. Are you up for it?",
      time: 25,
      required: 3
    },
    {
      papers: ["a1", "d1", "a2", "b2", "c2", "d2", "a3", "b3", "c3", "d3", "c4", "d4", "a5", "b5", "c5", "d5", "b1", "c1", "a4", "b4"],
      text: "Well done! In the rate will get back on our feet in no time.",
      time: 30,
      required: 5
    },
    {
      papers: ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
      text: "Management had a outstanding cost saving idea! We replaced a few of our writers with monkeys and interns.\n If you find any typo, on the papers, ignore it. Only build reports with perfect papers.",
      time: 25,
      required: 1
    },
    {
      papers: ["a1", "b1", "c1", "c2", "d2", "e2", "f2", "d1", "e1", "f1", "g1", "e3", "f3", "g3", "h3", "h1", "a2", "b2", "g2", "h2", "a3", "b3", "c3", "d3"],
      text: "Isn't this wonderful! We're able to produce the same amount of papers, at a fraction of the cost.\n Also, We returned your schedule back to normal, you're able to do the full day.",
      time: 50,
      required: 3
    },
    {
      papers: ["a1", "b1", "c1", "h1", "a2", "b2", "d3", "h3", "a3", "c2", "d2", "a3", "a2", "a4", "f4", "c4", "a5", "a5", "b5", "c5", "d5", "c4", "a5", "a3", "b3", "c3"],
      text: "Those interns are stealing paper! Just do your work as usual, management will figure this out.",
      time: 50,
      required: 3
    },
    {
      papers: ["a1", "b1", "c5", "c5", "a1", "b1", "f3", "c3", "d3", "c1", "d1", "a2", "c2", "d2", "d4", "d4", "c1", "e2", "f2", "g2", "h2", "a3", "e5", "f5", "a4", "b4", "d1", "d1", "a2", "b2", "c2", "d2", "c4"],
      text: "I belive that Management has a solution to our problem, Tomorrow we'll talk.",
      time: 75,
      required: 4
    },

    {
      papers: [],
      text: "I'm Sorry, but I have some bad news for you.",
      time: 0,
      required: 10
    },
  ],
  //
  loadLevel: function (currentLevel, width, height) {

    const level = this.levels[currentLevel];
    const map = {
      a: 'cover',
      b: 'introduction',
      c: 'content',
      d: 'conclusion',
      e: 'curvir',
      f: 'introotiiion',
      g: 'tnetnoc',
      h: 'conusin',
    }
    let papers = []
    for (let i = 0; i < level.papers.length; i++) {
      const y = Math.floor(Math.random() * height)
      const x = Math.floor(Math.random() * width);

      const paperDef = level.papers[i];
      var paper = {
        id: i,
        type: map[paperDef.substr(0, 1)],
        variant: paperDef.substr(1, 1),
        pos: {
          x,
          y
        },
        ogPos: {
          x,
          y
        },
        rotation: Math.floor(Math.random() * 45 * 2) - 45
      }
      papers.push(paper)
    }
    return papers
  }

};

},{}],2:[function(require,module,exports){
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
const savedLevel = localStorage.getItem("find-the-papers")
if (savedLevel && !!Number(savedLevel)) {
  currentLevel = Number(savedLevel)
}

setTimeout(() => {
  render.endLevel(currentLevel)
  setTimeout(() => {
    startLevel()
  }, 3000)
  setTimeout(() => {
    document.getElementById("intro").classList.add("fade-out")
  }, 500)
}, 3000)


let paperSelected = -1
let x = 0;
let y = 0;
let zIndex = 10

function mousedown(event) {
  document.body.classList.add("grabbing");
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
  document.body.classList.remove("grabbing");
  paper = getPaperFromId(paperSelected);
  paper.pos.y += +event.pageY - y
  paper.pos.x += +event.pageX - x
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

  render.renderPaper(paper, mousedown, true)
}

function getPaperFromId(id) {
  return papers.find((paper) => {
    return paper.id == id
  })
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
      const end = document.getElementById("end")
      document.getElementById("timer").classList.add("done")
      clearTimeout(levelTimeout);
      end.style.display = "block"
      end.onclick = () => {
        currentLevel++;
        localStorage.setItem("find-the-papers", currentLevel)
        numberOfPiles = 0;
        render.endLevel(currentLevel)
        setTimeout(() => {
          startLevel()
        }, 3000)
      }
    }
  }
}
var levelTimeout = 0;

function startLevel() {
  papers = levels.loadLevel(currentLevel, width, height)
  render.renderLevel(levels.levels[currentLevel], () => {
    render.renderPapers(papers, mousedown);
    render.renderTimer(levels.levels[currentLevel].time)

    levelTimeout = setTimeout(() => {
      //lose and stuff
      document.getElementById("date").innerText = new Date().toDateString()
      document.getElementById("service").innerText = (currentLevel + 1) + " day" + (currentLevel == 0 ? '' : 's')
      document.getElementById("endgame").classList.add("show")
      document.getElementById("restart").onclick = (() => {
        restart()
      })
      if (currentLevel === 12) {
        document.getElementById("try-again").style.display = "none"
        document.getElementById("endgame-message").style.display = "block"
      } else {
        document.getElementById("endgame-message").style.display = "none"
        document.getElementById("try-again").onclick = (() => {
          tryAgain()

        })
      }
    }, levels.levels[currentLevel].time * 1000)
  });

}

function tryAgain() {
  window.location.reload()
}

function restart() {
  localStorage.removeItem("find-the-papers");
  window.location.reload()
}

},{"./levels":1,"./render":3}],3:[function(require,module,exports){
module.exports = {
  renderPapers: function (papers, mousedown) {
    for (var i = 0; i < papers.length; i++) {
      this.renderPaper(papers[i], mousedown)
    }
  },
  renderPaper: function (paper, mousedown, removeFancyEntering) {

    const paperElem = this.createBasicPaper(paper)
    paperElem.addEventListener('mousedown', (event) => {
      mousedown(event)
    })
    if (!removeFancyEntering) {
      paperElem.style.top = 0
      paperElem.style.left = "100px"
      paperElem.style.transform = "rotate(0deg) scale(1.2)";
    } else {
      paperElem.style.transform = "rotate(" + paper.rotation + "deg) scale(1.2)";
    }
    document.getElementById("work-table").appendChild(paperElem);
    paperElem.classList.add("transition")

    setTimeout(() => {
      paperElem.style.top = paper.ogPos.y + "px"
      paperElem.style.left = paper.ogPos.x + "px"
      paperElem.style.transform = "rotate(" + paper.rotation + "deg)";
      setTimeout(() => {
        paperElem.classList.remove("transition")
      }, 500)
    })
  },
  renderPlaced: function (papers, callback) {
    for (const property in papers) {
      const parent = document.getElementById(property)
      if (parent) {
        if (papers[property]) {
          const oldChild = document.getElementById(papers[property].id)
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
    let svg = ""
    switch (paper.type) {
      case "cover":
      case "curvir":
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>'
        break;
      case "content":
      case "tnetnoc":
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>'
        break;
      case "introduction":
      case "introotiiion":
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="m432,160l-416,0a16,16 0 0 0 -16,16l0,32a16,16 0 0 0 16,16l416,0a16,16 0 0 0 16,-16l0,-32a16,16 0 0 0 -16,-16zm-323.9,-64l231.81,0a12.09,12.09 0 0 0 12.09,-12.1l0,-39.81a12.09,12.09 0 0 0 -12.09,-12.09l-231.81,0a12.09,12.09 0 0 0 -12.1,12.09l0,39.81a12.1,12.1 0 0 0 12.1,12.1z" fill="currentColor"/></svg>'
        break;
      case "conclusion":
      case "conusin":
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="m432,35l-416,-3a16,16 0 0 0 -16,19l0,32a16,16 0 0 0 16,16l416,0a16,16 0 0 0 16,-16l0,-32a16,16 0 0 0 -16,-16zm-92.09,192a12.09,12.09 0 0 0 12.09,-12.1l0,-39.81a12.09,12.09 0 0 0 -12.09,-12.09l-231.81,0a12.09,12.09 0 0 0 -12.1,12.09l0,39.81a12.1,12.1 0 0 0 12.1,12.1l231.81,0z" fill="currentColor"/></svg>'
        break;
    }
    paperElem.innerHTML = paper.type + svg
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
            paperElem.style.transform = "translate(20px, -175px)"
            break;
          case "introduction":
            paperElem.style.transform = "translate(140px, -175px)"
            break;
          case "content":
            paperElem.style.transform = "translate(260px, -175px)"
            break;
          case "conclusion":
            paperElem.style.transform = "translate(380px, -175px)"
            break;

        }
        setTimeout(() => {
          paperElem.style.transform = "translate(" + randomX + "px, -175px)"
          setTimeout(() => {
            paperElem.style.transform = "translate(" + randomX + "px, 0)"
          }, 250)
        }, 50)
        document.getElementById("final").appendChild(paperElem)
        // document.getElementById(papersPlaced[property].id).style.transform = "translate(10px)"
      }
    }
  },
  renderTimer: function (time) {
    let start = null
    var element = document.getElementById("timer");
    element.classList.remove("done")

    function step(timestamp) {
      if (element.classList.contains("done")) {
        return
      }

      if (!start) start = timestamp;
      var progress = timestamp - start;
      const width = 100 - ((progress * 100) / (time * 1000))
      element.style.width = width + "%";
      if (width > 50) {
        element.className = "green"
      } else {
        if (width > 25) {
          element.className = "yellow"
        } else {
          element.className = "red"
        }
      }
      if (progress < time * 1000) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  },
  renderLevel: function (level, callback) {
    //Man Enters
    this.renderMan(() => {
      this.renderText(level.text, 0, () => {
        document.getElementById("next").style.display = "none"
        callback();
        document.getElementById("guy").classList.remove("enter");
        setTimeout(() => {
          document.getElementById("guy").classList.add("leave");
        }, 2000)
      })
    })

  },
  renderText: function (text, part, callback) {
    btn = document.getElementById("next")
    btn.style.display = "none"
    textpart = text.split("\n")[part]
    for (let i = 0; i < textpart.length; i++) {
      setTimeout(() => {
        document.getElementById("text").innerText = textpart.substring(0, i + 1)
      }, i * 25)
    }
    setTimeout(() => {
      btn.onclick = () => {
        if (part + 1 == text.split("\n").length) {
          callback()
        } else {
          this.renderText(text, part + 1, callback)
        }
      };
      if (part + 1 == text.split("\n").length) {
        btn.innerText = "Start Work!"
      } else {
        btn.innerText = "Continue >>"

      }
      btn.style.display = "block"

    }, (textpart.length + 10) * 25)
  },
  renderMan: function (callback) {
    document.getElementById("guy").classList.remove("leave");
    document.getElementById("guy").classList.add("enter");
    setTimeout(() => {
      callback()
    }, 2500)
  },
  endLevel: function (currentLevel) {
    document.getElementById("day-text").innerText = "Day " + (currentLevel + 1)
    document.getElementById("day-text").classList.add("fade")
    setTimeout(() => {
      this.cleanTable();
    }, 1500)
    setTimeout(() => {

      document.getElementById("day-text").classList.remove("fade")
    }, 3000)

  },
  cleanTable: function () {
    document.getElementById("work-table").innerHTML = ""
    document.getElementById("final").innerHTML = "";
    document.getElementById("end").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("timer").className = "green";
    document.getElementById("timer").style.width = "100%";
    document.getElementById("guy").classList.remove("leave")
    document.getElementById("text").innerText = ""
  }

};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbGV2ZWxzLmpzIiwic3JjL21haW4iLCJzcmMvcmVuZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBsZXZlbHM6IFt7XHJcbiAgICAgIHBhcGVyczogW1wiYTFcIiwgXCJiMVwiLCBcImMxXCIsIFwiZDFcIl0sXHJcbiAgICAgIHRleHQ6IFwiV2VsY29tZSB0byB5b3VyIG5ldyBwb3NpdGlvbiFcXG4gWW91ciB0YXNrIGhlcmUgaXMgc2ltcGxlLCBvcmdhbml6ZSB0aGUgZmlsZXMgdG8gbWFrZSBhIHJlcG9ydC4gRmluZCBhbGwgdGhlIHBhcnRzIGZyb20gdGhlIHNhbWUgdG9waWMsIGFuZCBqb2luIHRoZW0uXFxuIFNpbXBseSBEcmFnIHRoZSBwYXBlciBwYXJ0cyBmcm9tIHRoZSBsZWZ0IHRvIHRoZSByaWdodCBhbmQgdGhlIG1hY2hpbmUgZG9lcyB0aGUgcmVzdC4gXFxuIElmIHlvdSBtaXNzIHBsYWNlIGEgcGFwZXIsIGp1c3QgdGFwIG9uIGl0LCBhbmQgdGhlIG1hY2hpbmUgc3BpdHMgaXQgb3V0LlxcbllvdSBoYXZlIGFsbCBkYXkgdG8gbWFrZSBvbmUgcmVwb3J0LlwiLFxyXG4gICAgICB0aW1lOiA1MCxcclxuICAgICAgcmVxdWlyZWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhcGVyczogW1wiYTFcIiwgXCJiMVwiLCBcImMxXCIsIFwiZDFcIiwgXCJhMlwiLCBcImIyXCIsIFwiYzJcIiwgXCJkMlwiXSxcclxuICAgICAgdGV4dDogXCJDb25ncmF0cyBvbiB5b3VyIGZpcnN0IGRheSFcXG4gVG9kYXkgd2UnbGwgaW5jcmVhc2UgdGhlIHlvdXIgd29yayBjYXBhY2l0eSwgYW5kIHlvdSBoYXZlIHRvIHNvcnQgMiByZXBvcnRzLlxcbiBNYWtlIHN1cmUgYWxsIHRoZSBwYXBlcnMgYXJlIGZyb20gdGhlIHNhbWUgY2F0ZWdvcnkuXCIsXHJcbiAgICAgIHRpbWU6IDUwLFxyXG4gICAgICByZXF1aXJlZDogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGFwZXJzOiBbXCJhMVwiLCBcImIxXCIsIFwiYzFcIiwgXCJkMVwiLCBcImEyXCIsIFwiYjJcIiwgXCJjMlwiLCBcImQyXCIsIFwiYTNcIiwgXCJiM1wiLCBcImMzXCIsIFwiZDNcIiwgXCJhNFwiLCBcImI0XCIsIFwiYzRcIiwgXCJkNFwiLCBcImE1XCIsIFwiYjVcIiwgXCJjNVwiLCBcImQ1XCJdLFxyXG4gICAgICB0ZXh0OiBcIkJ5IG5vdyB5b3Ugc2hvdWxkIGtub3cgdGhlIGRyaWxsLiBTb3J0IGFsbCB0aGVzZSByZXBvcnRzLlwiLFxyXG4gICAgICB0aW1lOiA1MCxcclxuICAgICAgcmVxdWlyZWQ6IDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhcGVyczogW1wiZDFcIiwgXCJhMlwiLCBcImMyXCIsIFwiZDJcIiwgXCJiM1wiLCBcImExXCIsIFwiYjJcIiwgXCJjM1wiXSxcclxuICAgICAgdGV4dDogXCJTb21lb25lIGhhcyBiZWVuIHN0ZWFsaW5nIHBhcGVycyFcXG4gSWYgeW91IGNhbid0IGZpbmQgYWxsIHRoZSBwYXBlcnMgZm9yIG9uZSByZXBvcnQganVzdCBpZ25vcmUgaXQsIHdlJ2xsIGRlYWwgd2l0aCBpdCBsYXRlci5cIixcclxuICAgICAgdGltZTogNTAsXHJcbiAgICAgIHJlcXVpcmVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXBlcnM6IFtcImExXCIsIFwiYTFcIiwgXCJiMVwiLCBcImMxXCIsIFwiZDFcIiwgXCJhMlwiLCBcImIyXCIsIFwiYzJcIiwgXCJhM1wiLCBcImIzXCIsIFwiYzNcIiwgXCJjM1wiLCBcImQyXCJdLFxyXG4gICAgICB0ZXh0OiBcIlRoaXMgcHJvYmxlbSBpcyBnZXR0aW5nIG91dCBvZiBoYW5kLiBXZSBuZWVkIHRvIGZpbmQgd2hvJ3MgcmVzcG9uc2libGUhXFxuIEluIHRoZSBtZWFuIHRpbWUsIGp1c3QgY29udGludWUgdG8gZG8geW91ciBqb2IuXCIsXHJcbiAgICAgIHRpbWU6IDUwLFxyXG4gICAgICByZXF1aXJlZDogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGFwZXJzOiBbXCJkNFwiLCBcImEyXCIsIFwiYjJcIiwgXCJjMlwiLCBcImEzXCIsIFwiYjNcIiwgXCJjM1wiLCBcImE0XCIsIFwiYzRcIiwgXCJhMVwiLCBcImIyXCIsIFwiZDNcIiwgXCJkNFwiLCBcImMyXCIsIFwiZDJcIiwgXCJiNFwiXSxcclxuICAgICAgdGV4dDogXCJXZSBmb3VuZCBvdXQgd2hvJ3MgYmVlbiBzdGVhbGluZyB0aGUgcGFwZXJzLCB0b21vcnJvdyBldmVyeXRoaW5nIGdvZXMgYmFjayB0byBub3JtYWwuXCIsXHJcbiAgICAgIHRpbWU6IDUwLFxyXG4gICAgICByZXF1aXJlZDogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGFwZXJzOiBbXCJhMVwiLCBcImQxXCIsIFwiYTJcIiwgXCJiMlwiLCBcImEzXCIsIFwiYjNcIiwgXCJjM1wiLCBcImQzXCIsIFwiYjFcIiwgXCJjMVwiLCBcImMyXCIsIFwiZDJcIl0sXHJcbiAgICAgIHRleHQ6IFwiQmVjYXVzZSBvZiB0aGF0IGluY2lkZW50LCB3ZSBjYW4ndCBhZmZvcmQgdG8gcGF5IGV2ZXJ5b25lJ3MgaG91cnMgZnVsbCBob3Vycy5cXG5Zb3UgaGF2ZSB0byBkbyB0aGUgc2FtZSBqb2IgYnV0LCBpbiBoYWxmIHRoZSB0aW1lLiBBcmUgeW91IHVwIGZvciBpdD9cIixcclxuICAgICAgdGltZTogMjUsXHJcbiAgICAgIHJlcXVpcmVkOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXBlcnM6IFtcImExXCIsIFwiZDFcIiwgXCJhMlwiLCBcImIyXCIsIFwiYzJcIiwgXCJkMlwiLCBcImEzXCIsIFwiYjNcIiwgXCJjM1wiLCBcImQzXCIsIFwiYzRcIiwgXCJkNFwiLCBcImE1XCIsIFwiYjVcIiwgXCJjNVwiLCBcImQ1XCIsIFwiYjFcIiwgXCJjMVwiLCBcImE0XCIsIFwiYjRcIl0sXHJcbiAgICAgIHRleHQ6IFwiV2VsbCBkb25lISBJbiB0aGUgcmF0ZSB3aWxsIGdldCBiYWNrIG9uIG91ciBmZWV0IGluIG5vIHRpbWUuXCIsXHJcbiAgICAgIHRpbWU6IDMwLFxyXG4gICAgICByZXF1aXJlZDogNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGFwZXJzOiBbXCJhMVwiLCBcImIxXCIsIFwiYzFcIiwgXCJkMVwiLCBcImUxXCIsIFwiZjFcIiwgXCJnMVwiLCBcImgxXCJdLFxyXG4gICAgICB0ZXh0OiBcIk1hbmFnZW1lbnQgaGFkIGEgb3V0c3RhbmRpbmcgY29zdCBzYXZpbmcgaWRlYSEgV2UgcmVwbGFjZWQgYSBmZXcgb2Ygb3VyIHdyaXRlcnMgd2l0aCBtb25rZXlzIGFuZCBpbnRlcm5zLlxcbiBJZiB5b3UgZmluZCBhbnkgdHlwbywgb24gdGhlIHBhcGVycywgaWdub3JlIGl0LiBPbmx5IGJ1aWxkIHJlcG9ydHMgd2l0aCBwZXJmZWN0IHBhcGVycy5cIixcclxuICAgICAgdGltZTogMjUsXHJcbiAgICAgIHJlcXVpcmVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXBlcnM6IFtcImExXCIsIFwiYjFcIiwgXCJjMVwiLCBcImMyXCIsIFwiZDJcIiwgXCJlMlwiLCBcImYyXCIsIFwiZDFcIiwgXCJlMVwiLCBcImYxXCIsIFwiZzFcIiwgXCJlM1wiLCBcImYzXCIsIFwiZzNcIiwgXCJoM1wiLCBcImgxXCIsIFwiYTJcIiwgXCJiMlwiLCBcImcyXCIsIFwiaDJcIiwgXCJhM1wiLCBcImIzXCIsIFwiYzNcIiwgXCJkM1wiXSxcclxuICAgICAgdGV4dDogXCJJc24ndCB0aGlzIHdvbmRlcmZ1bCEgV2UncmUgYWJsZSB0byBwcm9kdWNlIHRoZSBzYW1lIGFtb3VudCBvZiBwYXBlcnMsIGF0IGEgZnJhY3Rpb24gb2YgdGhlIGNvc3QuXFxuIEFsc28sIFdlIHJldHVybmVkIHlvdXIgc2NoZWR1bGUgYmFjayB0byBub3JtYWwsIHlvdSdyZSBhYmxlIHRvIGRvIHRoZSBmdWxsIGRheS5cIixcclxuICAgICAgdGltZTogNTAsXHJcbiAgICAgIHJlcXVpcmVkOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXBlcnM6IFtcImExXCIsIFwiYjFcIiwgXCJjMVwiLCBcImgxXCIsIFwiYTJcIiwgXCJiMlwiLCBcImQzXCIsIFwiaDNcIiwgXCJhM1wiLCBcImMyXCIsIFwiZDJcIiwgXCJhM1wiLCBcImEyXCIsIFwiYTRcIiwgXCJmNFwiLCBcImM0XCIsIFwiYTVcIiwgXCJhNVwiLCBcImI1XCIsIFwiYzVcIiwgXCJkNVwiLCBcImM0XCIsIFwiYTVcIiwgXCJhM1wiLCBcImIzXCIsIFwiYzNcIl0sXHJcbiAgICAgIHRleHQ6IFwiVGhvc2UgaW50ZXJucyBhcmUgc3RlYWxpbmcgcGFwZXIhIEp1c3QgZG8geW91ciB3b3JrIGFzIHVzdWFsLCBtYW5hZ2VtZW50IHdpbGwgZmlndXJlIHRoaXMgb3V0LlwiLFxyXG4gICAgICB0aW1lOiA1MCxcclxuICAgICAgcmVxdWlyZWQ6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhcGVyczogW1wiYTFcIiwgXCJiMVwiLCBcImM1XCIsIFwiYzVcIiwgXCJhMVwiLCBcImIxXCIsIFwiZjNcIiwgXCJjM1wiLCBcImQzXCIsIFwiYzFcIiwgXCJkMVwiLCBcImEyXCIsIFwiYzJcIiwgXCJkMlwiLCBcImQ0XCIsIFwiZDRcIiwgXCJjMVwiLCBcImUyXCIsIFwiZjJcIiwgXCJnMlwiLCBcImgyXCIsIFwiYTNcIiwgXCJlNVwiLCBcImY1XCIsIFwiYTRcIiwgXCJiNFwiLCBcImQxXCIsIFwiZDFcIiwgXCJhMlwiLCBcImIyXCIsIFwiYzJcIiwgXCJkMlwiLCBcImM0XCJdLFxyXG4gICAgICB0ZXh0OiBcIkkgYmVsaXZlIHRoYXQgTWFuYWdlbWVudCBoYXMgYSBzb2x1dGlvbiB0byBvdXIgcHJvYmxlbSwgVG9tb3Jyb3cgd2UnbGwgdGFsay5cIixcclxuICAgICAgdGltZTogNzUsXHJcbiAgICAgIHJlcXVpcmVkOiA0XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgcGFwZXJzOiBbXSxcclxuICAgICAgdGV4dDogXCJJJ20gU29ycnksIGJ1dCBJIGhhdmUgc29tZSBiYWQgbmV3cyBmb3IgeW91LlwiLFxyXG4gICAgICB0aW1lOiAwLFxyXG4gICAgICByZXF1aXJlZDogMTBcclxuICAgIH0sXHJcbiAgXSxcclxuICAvL1xyXG4gIGxvYWRMZXZlbDogZnVuY3Rpb24gKGN1cnJlbnRMZXZlbCwgd2lkdGgsIGhlaWdodCkge1xyXG5cclxuICAgIGNvbnN0IGxldmVsID0gdGhpcy5sZXZlbHNbY3VycmVudExldmVsXTtcclxuICAgIGNvbnN0IG1hcCA9IHtcclxuICAgICAgYTogJ2NvdmVyJyxcclxuICAgICAgYjogJ2ludHJvZHVjdGlvbicsXHJcbiAgICAgIGM6ICdjb250ZW50JyxcclxuICAgICAgZDogJ2NvbmNsdXNpb24nLFxyXG4gICAgICBlOiAnY3VydmlyJyxcclxuICAgICAgZjogJ2ludHJvb3RpaWlvbicsXHJcbiAgICAgIGc6ICd0bmV0bm9jJyxcclxuICAgICAgaDogJ2NvbnVzaW4nLFxyXG4gICAgfVxyXG4gICAgbGV0IHBhcGVycyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsLnBhcGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGVpZ2h0KVxyXG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2lkdGgpO1xyXG5cclxuICAgICAgY29uc3QgcGFwZXJEZWYgPSBsZXZlbC5wYXBlcnNbaV07XHJcbiAgICAgIHZhciBwYXBlciA9IHtcclxuICAgICAgICBpZDogaSxcclxuICAgICAgICB0eXBlOiBtYXBbcGFwZXJEZWYuc3Vic3RyKDAsIDEpXSxcclxuICAgICAgICB2YXJpYW50OiBwYXBlckRlZi5zdWJzdHIoMSwgMSksXHJcbiAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2dQb3M6IHtcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICB5XHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3RhdGlvbjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDUgKiAyKSAtIDQ1XHJcbiAgICAgIH1cclxuICAgICAgcGFwZXJzLnB1c2gocGFwZXIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFwZXJzXHJcbiAgfVxyXG5cclxufTtcclxuIiwidmFyIHJlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyk7XHJcbnZhciBsZXZlbHMgPSByZXF1aXJlKCcuL2xldmVscycpO1xyXG5cclxudmFyIHdpZHRoID0gMzAwO1xyXG52YXIgaGVpZ2h0ID0gMTUwO1xyXG52YXIgcGFwZXJzID0gW107XHJcbnZhciBwYXBlcnNQbGFjZWQgPSB7XHJcbiAgY292ZXI6IHVuZGVmaW5lZCxcclxuICBpbnRyb2R1Y3Rpb246IHVuZGVmaW5lZCxcclxuICBjb250ZW50OiB1bmRlZmluZWQsXHJcbiAgY29uY2x1c2lvbjogdW5kZWZpbmVkXHJcbn07XHJcbnZhciBudW1iZXJPZlBpbGVzID0gMDtcclxudmFyIGN1cnJlbnRMZXZlbCA9IDA7XHJcbmNvbnN0IHNhdmVkTGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpbmQtdGhlLXBhcGVyc1wiKVxyXG5pZiAoc2F2ZWRMZXZlbCAmJiAhIU51bWJlcihzYXZlZExldmVsKSkge1xyXG4gIGN1cnJlbnRMZXZlbCA9IE51bWJlcihzYXZlZExldmVsKVxyXG59XHJcblxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICByZW5kZXIuZW5kTGV2ZWwoY3VycmVudExldmVsKVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc3RhcnRMZXZlbCgpXHJcbiAgfSwgMzAwMClcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9cIikuY2xhc3NMaXN0LmFkZChcImZhZGUtb3V0XCIpXHJcbiAgfSwgNTAwKVxyXG59LCAzMDAwKVxyXG5cclxuXHJcbmxldCBwYXBlclNlbGVjdGVkID0gLTFcclxubGV0IHggPSAwO1xyXG5sZXQgeSA9IDA7XHJcbmxldCB6SW5kZXggPSAxMFxyXG5cclxuZnVuY3Rpb24gbW91c2Vkb3duKGV2ZW50KSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZ3JhYmJpbmdcIik7XHJcbiAgcGFwZXJTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC5pZDtcclxuICB4ID0gZXZlbnQucGFnZVg7XHJcbiAgeSA9IGV2ZW50LnBhZ2VZO1xyXG4gIGV2ZW50LnRhcmdldC5zdHlsZS56SW5kZXggPSB6SW5kZXgrKztcclxuICBldmVudC50YXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiXHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlbW92ZSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZXVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2Vtb3ZlKGV2ZW50KSB7XHJcbiAgbGV0IHBhcGVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcGVyU2VsZWN0ZWQpXHJcbiAgcGFwZXIgPSBnZXRQYXBlckZyb21JZChwYXBlclNlbGVjdGVkKTtcclxuICBwYXBlckVsZW0uc3R5bGUudG9wID0gcGFwZXIucG9zLnkgKyBldmVudC5wYWdlWSAtIHkgKyBcInB4XCJcclxuICBwYXBlckVsZW0uc3R5bGUubGVmdCA9IHBhcGVyLnBvcy54ICsgZXZlbnQucGFnZVggLSB4ICsgXCJweFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNldXAoZXZlbnQpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJncmFiYmluZ1wiKTtcclxuICBwYXBlciA9IGdldFBhcGVyRnJvbUlkKHBhcGVyU2VsZWN0ZWQpO1xyXG4gIHBhcGVyLnBvcy55ICs9ICtldmVudC5wYWdlWSAtIHlcclxuICBwYXBlci5wb3MueCArPSArZXZlbnQucGFnZVggLSB4XHJcbiAgY29uc3Qgb2xkUGFwZXJFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFwZXJTZWxlY3RlZClcclxuICBvbGRQYXBlckVsZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiXHJcbiAgYWxsb3dlZFBsYWNlcyA9IFtcImNvdmVyXCIsIFwiaW50cm9kdWN0aW9uXCIsIFwiY29udGVudFwiLCBcImNvbmNsdXNpb25cIl07XHJcbiAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuaWRcclxuICBjb25zdCBpbmRleCA9IGFsbG93ZWRQbGFjZXMubWFwKGEgPT4gYSArIFwiLWNvbnRhaW5lclwiKS5pbmRleE9mKGlkKVxyXG4gIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNoaWxkcmVuLmxlbmd0aCA8IDQpIHtcclxuICAgICAgcGFwZXJzUGxhY2VkW2FsbG93ZWRQbGFjZXNbaW5kZXhdXSA9IHBhcGVyXHJcbiAgICAgIHJlbmRlci5yZW5kZXJQbGFjZWQocGFwZXJzUGxhY2VkLCBwYXBlckNsaWNrZWQpXHJcbiAgICAgIGNoZWNrSWZBbGxGaWxsZWRJbigpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlbW92ZSk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZXVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFwZXJDbGlja2VkKGV2ZW50KSB7XHJcbiAgcGFwZXIgPSBnZXRQYXBlckZyb21JZChldmVudC50YXJnZXQuaWQpO1xyXG4gIHBhcGVyLnBvcy54ID0gcGFwZXIub2dQb3MueFxyXG4gIHBhcGVyLnBvcy55ID0gcGFwZXIub2dQb3MueVxyXG4gIGNvbnN0IHBhcmVudElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRcclxuICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChldmVudC50YXJnZXQpO1xyXG4gIHBhcGVyc1BsYWNlZFtwYXJlbnRJZF0gPSB1bmRlZmluZWRcclxuXHJcbiAgcmVuZGVyLnJlbmRlclBhcGVyKHBhcGVyLCBtb3VzZWRvd24sIHRydWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcGVyRnJvbUlkKGlkKSB7XHJcbiAgcmV0dXJuIHBhcGVycy5maW5kKChwYXBlcikgPT4ge1xyXG4gICAgcmV0dXJuIHBhcGVyLmlkID09IGlkXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZkFsbEZpbGxlZEluKCkge1xyXG4gIGxldCB2YWxpZCA9IHRydWVcclxuICBpZiAocGFwZXJzUGxhY2VkW1wiY292ZXJcIl0pXHJcbiAgICB2YXJpYW50ID0gcGFwZXJzUGxhY2VkW1wiY292ZXJcIl0udmFyaWFudFxyXG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcGFwZXJzUGxhY2VkKSB7XHJcbiAgICBpZiAoIXBhcGVyc1BsYWNlZFtwcm9wZXJ0eV0gfHwgcHJvcGVydHkgIT09IHBhcGVyc1BsYWNlZFtwcm9wZXJ0eV0udHlwZSB8fCB2YXJpYW50ICE9PSBwYXBlcnNQbGFjZWRbcHJvcGVydHldLnZhcmlhbnQpIHtcclxuICAgICAgdmFsaWQgPSBmYWxzZVxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHZhbGlkKSB7XHJcbiAgICBudW1iZXJPZlBpbGVzKys7XHJcbiAgICByZW5kZXIuYWRkUmVwb3J0c1RvUGlsZShwYXBlcnNQbGFjZWQpO1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwYXBlcnNQbGFjZWQpIHtcclxuICAgICAgcGFwZXJzUGxhY2VkW3Byb3BlcnR5XSA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gICAgaWYgKG51bWJlck9mUGlsZXMgPT0gbGV2ZWxzLmxldmVsc1tjdXJyZW50TGV2ZWxdLnJlcXVpcmVkKSB7XHJcbiAgICAgIGNvbnN0IGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kXCIpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXJcIikuY2xhc3NMaXN0LmFkZChcImRvbmVcIilcclxuICAgICAgY2xlYXJUaW1lb3V0KGxldmVsVGltZW91dCk7XHJcbiAgICAgIGVuZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgIGVuZC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRMZXZlbCsrO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmluZC10aGUtcGFwZXJzXCIsIGN1cnJlbnRMZXZlbClcclxuICAgICAgICBudW1iZXJPZlBpbGVzID0gMDtcclxuICAgICAgICByZW5kZXIuZW5kTGV2ZWwoY3VycmVudExldmVsKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc3RhcnRMZXZlbCgpXHJcbiAgICAgICAgfSwgMzAwMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG52YXIgbGV2ZWxUaW1lb3V0ID0gMDtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0TGV2ZWwoKSB7XHJcbiAgcGFwZXJzID0gbGV2ZWxzLmxvYWRMZXZlbChjdXJyZW50TGV2ZWwsIHdpZHRoLCBoZWlnaHQpXHJcbiAgcmVuZGVyLnJlbmRlckxldmVsKGxldmVscy5sZXZlbHNbY3VycmVudExldmVsXSwgKCkgPT4ge1xyXG4gICAgcmVuZGVyLnJlbmRlclBhcGVycyhwYXBlcnMsIG1vdXNlZG93bik7XHJcbiAgICByZW5kZXIucmVuZGVyVGltZXIobGV2ZWxzLmxldmVsc1tjdXJyZW50TGV2ZWxdLnRpbWUpXHJcblxyXG4gICAgbGV2ZWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vbG9zZSBhbmQgc3R1ZmZcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLmlubmVyVGV4dCA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2aWNlXCIpLmlubmVyVGV4dCA9IChjdXJyZW50TGV2ZWwgKyAxKSArIFwiIGRheVwiICsgKGN1cnJlbnRMZXZlbCA9PSAwID8gJycgOiAncycpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kZ2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIikub25jbGljayA9ICgoKSA9PiB7XHJcbiAgICAgICAgcmVzdGFydCgpXHJcbiAgICAgIH0pXHJcbiAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT09IDEyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnktYWdhaW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRnYW1lLW1lc3NhZ2VcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kZ2FtZS1tZXNzYWdlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJ5LWFnYWluXCIpLm9uY2xpY2sgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgdHJ5QWdhaW4oKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LCBsZXZlbHMubGV2ZWxzW2N1cnJlbnRMZXZlbF0udGltZSAqIDEwMDApXHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlBZ2FpbigpIHtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdGFydCgpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZpbmQtdGhlLXBhcGVyc1wiKTtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZW5kZXJQYXBlcnM6IGZ1bmN0aW9uIChwYXBlcnMsIG1vdXNlZG93bikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5yZW5kZXJQYXBlcihwYXBlcnNbaV0sIG1vdXNlZG93bilcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlclBhcGVyOiBmdW5jdGlvbiAocGFwZXIsIG1vdXNlZG93biwgcmVtb3ZlRmFuY3lFbnRlcmluZykge1xyXG5cclxuICAgIGNvbnN0IHBhcGVyRWxlbSA9IHRoaXMuY3JlYXRlQmFzaWNQYXBlcihwYXBlcilcclxuICAgIHBhcGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgbW91c2Vkb3duKGV2ZW50KVxyXG4gICAgfSlcclxuICAgIGlmICghcmVtb3ZlRmFuY3lFbnRlcmluZykge1xyXG4gICAgICBwYXBlckVsZW0uc3R5bGUudG9wID0gMFxyXG4gICAgICBwYXBlckVsZW0uc3R5bGUubGVmdCA9IFwiMTAwcHhcIlxyXG4gICAgICBwYXBlckVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZykgc2NhbGUoMS4yKVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFwZXJFbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgcGFwZXIucm90YXRpb24gKyBcImRlZykgc2NhbGUoMS4yKVwiO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXRhYmxlXCIpLmFwcGVuZENoaWxkKHBhcGVyRWxlbSk7XHJcbiAgICBwYXBlckVsZW0uY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb25cIilcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcGFwZXJFbGVtLnN0eWxlLnRvcCA9IHBhcGVyLm9nUG9zLnkgKyBcInB4XCJcclxuICAgICAgcGFwZXJFbGVtLnN0eWxlLmxlZnQgPSBwYXBlci5vZ1Bvcy54ICsgXCJweFwiXHJcbiAgICAgIHBhcGVyRWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHBhcGVyLnJvdGF0aW9uICsgXCJkZWcpXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHBhcGVyRWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvblwiKVxyXG4gICAgICB9LCA1MDApXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcmVuZGVyUGxhY2VkOiBmdW5jdGlvbiAocGFwZXJzLCBjYWxsYmFjaykge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwYXBlcnMpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcGVydHkpXHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBpZiAocGFwZXJzW3Byb3BlcnR5XSkge1xyXG4gICAgICAgICAgY29uc3Qgb2xkQ2hpbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXBlcnNbcHJvcGVydHldLmlkKVxyXG4gICAgICAgICAgb2xkQ2hpbGQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvbGRDaGlsZClcclxuICAgICAgICAgIGNvbnN0IHBhcGVyRWxlbSA9IHRoaXMuY3JlYXRlQmFzaWNQYXBlcihwYXBlcnNbcHJvcGVydHldKVxyXG4gICAgICAgICAgcGFwZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spXHJcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocGFwZXJFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZUJhc2ljUGFwZXI6IGZ1bmN0aW9uIChwYXBlcikge1xyXG4gICAgY29uc3QgcGFwZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcGFwZXJFbGVtLmlkID0gcGFwZXIuaWRcclxuICAgIGxldCBzdmcgPSBcIlwiXHJcbiAgICBzd2l0Y2ggKHBhcGVyLnR5cGUpIHtcclxuICAgICAgY2FzZSBcImNvdmVyXCI6XHJcbiAgICAgIGNhc2UgXCJjdXJ2aXJcIjpcclxuICAgICAgICBzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDY0IDY0SDQ4QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJ2Mjg4YzAgMjYuNTEgMjEuNDkgNDggNDggNDhoNDE2YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMTEyYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bS02IDMzNkg1NGE2IDYgMCAwIDEtNi02VjExOGE2IDYgMCAwIDEgNi02aDQwNGE2IDYgMCAwIDEgNiA2djI3NmE2IDYgMCAwIDEtNiA2ek0xMjggMTUyYy0yMi4wOTEgMC00MCAxNy45MDktNDAgNDBzMTcuOTA5IDQwIDQwIDQwIDQwLTE3LjkwOSA0MC00MC0xNy45MDktNDAtNDAtNDB6TTk2IDM1MmgzMjB2LTgwbC04Ny41MTUtODcuNTE1Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMMTkyIDMwNGwtMzkuNTE1LTM5LjUxNWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDk2IDMwNHY0OHpcIj48L3BhdGg+PC9zdmc+J1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY29udGVudFwiOlxyXG4gICAgICBjYXNlIFwidG5ldG5vY1wiOlxyXG4gICAgICAgIHN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MzIgNDE2SDE2YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDQxNmExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZ6bTAtMTI4SDE2YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDQxNmExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZ6bTAtMTI4SDE2YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDQxNmExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZ6bTAtMTI4SDE2QTE2IDE2IDAgMCAwIDAgNDh2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2VjQ4YTE2IDE2IDAgMCAwLTE2LTE2elwiPjwvcGF0aD48L3N2Zz4nXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpbnRyb2R1Y3Rpb25cIjpcclxuICAgICAgY2FzZSBcImludHJvb3RpaWlvblwiOlxyXG4gICAgICAgIHN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBkPVwibTQzMiwxNjBsLTQxNiwwYTE2LDE2IDAgMCAwIC0xNiwxNmwwLDMyYTE2LDE2IDAgMCAwIDE2LDE2bDQxNiwwYTE2LDE2IDAgMCAwIDE2LC0xNmwwLC0zMmExNiwxNiAwIDAgMCAtMTYsLTE2em0tMzIzLjksLTY0bDIzMS44MSwwYTEyLjA5LDEyLjA5IDAgMCAwIDEyLjA5LC0xMi4xbDAsLTM5LjgxYTEyLjA5LDEyLjA5IDAgMCAwIC0xMi4wOSwtMTIuMDlsLTIzMS44MSwwYTEyLjA5LDEyLjA5IDAgMCAwIC0xMi4xLDEyLjA5bDAsMzkuODFhMTIuMSwxMi4xIDAgMCAwIDEyLjEsMTIuMXpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPidcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImNvbmNsdXNpb25cIjpcclxuICAgICAgY2FzZSBcImNvbnVzaW5cIjpcclxuICAgICAgICBzdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZD1cIm00MzIsMzVsLTQxNiwtM2ExNiwxNiAwIDAgMCAtMTYsMTlsMCwzMmExNiwxNiAwIDAgMCAxNiwxNmw0MTYsMGExNiwxNiAwIDAgMCAxNiwtMTZsMCwtMzJhMTYsMTYgMCAwIDAgLTE2LC0xNnptLTkyLjA5LDE5MmExMi4wOSwxMi4wOSAwIDAgMCAxMi4wOSwtMTIuMWwwLC0zOS44MWExMi4wOSwxMi4wOSAwIDAgMCAtMTIuMDksLTEyLjA5bC0yMzEuODEsMGExMi4wOSwxMi4wOSAwIDAgMCAtMTIuMSwxMi4wOWwwLDM5LjgxYTEyLjEsMTIuMSAwIDAgMCAxMi4xLDEyLjFsMjMxLjgxLDB6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz4nXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBwYXBlckVsZW0uaW5uZXJIVE1MID0gcGFwZXIudHlwZSArIHN2Z1xyXG4gICAgcGFwZXJFbGVtLmNsYXNzTmFtZSA9IGBwYWdlICR7cGFwZXIudHlwZX0gdi0ke3BhcGVyLnZhcmlhbnR9YFxyXG4gICAgcmV0dXJuIHBhcGVyRWxlbVxyXG4gIH0sXHJcbiAgYWRkUmVwb3J0c1RvUGlsZTogZnVuY3Rpb24gKHBhcGVyc1BsYWNlZCkge1xyXG4gICAgbGV0IHJhbmRvbVggPSBNYXRoLnJhbmRvbSgpICogMTkwO1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwYXBlcnNQbGFjZWQpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcGVydHkpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIC8vQFRFTVAgSUZcclxuICAgICAgaWYgKHBhcGVyc1BsYWNlZFtwcm9wZXJ0eV0pIHtcclxuICAgICAgICBjb25zdCBwYXBlckVsZW0gPSB0aGlzLmNyZWF0ZUJhc2ljUGFwZXIocGFwZXJzUGxhY2VkW3Byb3BlcnR5XSlcclxuICAgICAgICBwYXBlckVsZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgc3dpdGNoIChwYXBlcnNQbGFjZWRbcHJvcGVydHldLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgXCJjb3ZlclwiOlxyXG4gICAgICAgICAgICBwYXBlckVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMjBweCwgLTE3NXB4KVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImludHJvZHVjdGlvblwiOlxyXG4gICAgICAgICAgICBwYXBlckVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMTQwcHgsIC0xNzVweClcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJjb250ZW50XCI6XHJcbiAgICAgICAgICAgIHBhcGVyRWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgyNjBweCwgLTE3NXB4KVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImNvbmNsdXNpb25cIjpcclxuICAgICAgICAgICAgcGFwZXJFbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDM4MHB4LCAtMTc1cHgpXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHBhcGVyRWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIHJhbmRvbVggKyBcInB4LCAtMTc1cHgpXCJcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwYXBlckVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyByYW5kb21YICsgXCJweCwgMClcIlxyXG4gICAgICAgICAgfSwgMjUwKVxyXG4gICAgICAgIH0sIDUwKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWxcIikuYXBwZW5kQ2hpbGQocGFwZXJFbGVtKVxyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcGVyc1BsYWNlZFtwcm9wZXJ0eV0uaWQpLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDEwcHgpXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVuZGVyVGltZXI6IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICBsZXQgc3RhcnQgPSBudWxsXHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXJcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb25lXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZG9uZVwiKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0KSBzdGFydCA9IHRpbWVzdGFtcDtcclxuICAgICAgdmFyIHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnQ7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gMTAwIC0gKChwcm9ncmVzcyAqIDEwMCkgLyAodGltZSAqIDEwMDApKVxyXG4gICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyBcIiVcIjtcclxuICAgICAgaWYgKHdpZHRoID4gNTApIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiZ3JlZW5cIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh3aWR0aCA+IDI1KSB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwieWVsbG93XCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcInJlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwcm9ncmVzcyA8IHRpbWUgKiAxMDAwKSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICB9LFxyXG4gIHJlbmRlckxldmVsOiBmdW5jdGlvbiAobGV2ZWwsIGNhbGxiYWNrKSB7XHJcbiAgICAvL01hbiBFbnRlcnNcclxuICAgIHRoaXMucmVuZGVyTWFuKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJUZXh0KGxldmVsLnRleHQsIDAsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1eVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZW50ZXJcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1eVwiKS5jbGFzc0xpc3QuYWRkKFwibGVhdmVcIik7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gIH0sXHJcbiAgcmVuZGVyVGV4dDogZnVuY3Rpb24gKHRleHQsIHBhcnQsIGNhbGxiYWNrKSB7XHJcbiAgICBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIilcclxuICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgIHRleHRwYXJ0ID0gdGV4dC5zcGxpdChcIlxcblwiKVtwYXJ0XVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0cGFydC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIikuaW5uZXJUZXh0ID0gdGV4dHBhcnQuc3Vic3RyaW5nKDAsIGkgKyAxKVxyXG4gICAgICB9LCBpICogMjUpXHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnQgKyAxID09IHRleHQuc3BsaXQoXCJcXG5cIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyVGV4dCh0ZXh0LCBwYXJ0ICsgMSwgY2FsbGJhY2spXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAocGFydCArIDEgPT0gdGV4dC5zcGxpdChcIlxcblwiKS5sZW5ndGgpIHtcclxuICAgICAgICBidG4uaW5uZXJUZXh0ID0gXCJTdGFydCBXb3JrIVwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9IFwiQ29udGludWUgPj5cIlxyXG5cclxuICAgICAgfVxyXG4gICAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG5cclxuICAgIH0sICh0ZXh0cGFydC5sZW5ndGggKyAxMCkgKiAyNSlcclxuICB9LFxyXG4gIHJlbmRlck1hbjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1eVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibGVhdmVcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1eVwiKS5jbGFzc0xpc3QuYWRkKFwiZW50ZXJcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKVxyXG4gICAgfSwgMjUwMClcclxuICB9LFxyXG4gIGVuZExldmVsOiBmdW5jdGlvbiAoY3VycmVudExldmVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS10ZXh0XCIpLmlubmVyVGV4dCA9IFwiRGF5IFwiICsgKGN1cnJlbnRMZXZlbCArIDEpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS10ZXh0XCIpLmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jbGVhblRhYmxlKCk7XHJcbiAgICB9LCAxNTAwKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS10ZXh0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpXHJcbiAgICB9LCAzMDAwKVxyXG5cclxuICB9LFxyXG4gIGNsZWFuVGFibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay10YWJsZVwiKS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmFsXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lclwiKS5jbGFzc05hbWUgPSBcImdyZWVuXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVyXCIpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1eVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibGVhdmVcIilcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFwiKS5pbm5lclRleHQgPSBcIlwiXHJcbiAgfVxyXG5cclxufTtcclxuIl19
