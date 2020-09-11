module.exports = {
    levels: [
        {
            papers: ["a1", "b1", "c1", "d1"],
            text: "Welcome to your new position! Your task here is simple, organize the files to make a report.\nFind all the parts from the same topic, and join them. there are a \n Simply ",
            time: 60,
            required: 1
        }
    ],
    loadLevel: function (currentLevel, width, height) {

        const level = this.levels[currentLevel];
        const map = { 'a': 'cover', b: 'introduction', c: 'content', d: 'conclusion' }
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