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
    let svg = ""
    switch (paper.type) {
      case "cover":
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>'
        break;
      case "content":
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>'
        break;
      case "introduction":
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="m432,160l-416,0a16,16 0 0 0 -16,16l0,32a16,16 0 0 0 16,16l416,0a16,16 0 0 0 16,-16l0,-32a16,16 0 0 0 -16,-16zm-323.9,-64l231.81,0a12.09,12.09 0 0 0 12.09,-12.1l0,-39.81a12.09,12.09 0 0 0 -12.09,-12.09l-231.81,0a12.09,12.09 0 0 0 -12.1,12.09l0,39.81a12.1,12.1 0 0 0 12.1,12.1z" fill="currentColor"/></svg>'
        break;
      case "conclusion":
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
    console.log(textpart.length, part, )
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
        btn.innerText = "Continue"

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
