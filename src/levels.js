module.exports = {
  levels: [{
      papers: ["a1", "b1", "c1", "d1"],
      text: "Welcome to your new position!\n Your task here is simple, organize the files to make a report. Find all the parts from the same topic, and join them.\n Simply Drag the paper parts from the left to the right and the machine does the rest. \n If you miss place a paper, just tap on it, and the machine spits it out.\nYou have all day to make one report.",
      time: 50,
      required: 1
    },
    {
      papers: ["a1", "b1", "c1", "d1", "a2", "b2", "c2", "d2"],
      text: "Congrats on your first day!\n Today we'll increase the your work capacity, and you have to sort 2 reports.\n Make sure all the papers are from the same categories.",
      time: 50,
      required: 3
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
      text: "I belive that Management has a solution too our problem, Tomorrow we'll talk.",
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
