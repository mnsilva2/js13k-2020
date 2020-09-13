module.exports = {
  renderPapers: function (papers, mousedown) {
    for (var i = 0; i < papers.length; i++) {
      this.renderPaper(papers[i], mousedown)
    }
  },
  renderPaper: function (paper, mousedown) {

    const paperElem = this.createBasicPaper(paper)
    paperElem.addEventListener('mousedown', (event) => {
      mousedown(event)
    })
    paperElem.style.top = 0
    paperElem.style.left = "100px"
    paperElem.style.transform = "rotate(0deg) scale(1.2)";
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
    paperElem.innerText = paper.type + ""
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

    //Fade.
    //clear everything.
    //Show next day text
    //Fade.
  },
  cleanTable: function () {
    document.getElementById("work-table").innerHTML = ""
    document.getElementById("final").innerHTML = "";

  }

};
