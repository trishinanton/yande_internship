const commits = [
    {
        id: '1',
        message: 'initial commit',
        timestamp: 1624010073113
    },
    {
        id: '2',
        parents: ['1'],
        message: 'add layout',
        timestamp: 1624010082219
    },
    {
        id: '3',
        parents: ['2'],
        message: 'fix bugs',
        timestamp: 1624010109039,
        branches: ['master', 'bugfix']
    },
    {
        id: '4',
        parents: ['2'],
        message: 'add link',
        timestamp: 1624010179662,
        branches: ['feature/link']
    }
]

const branches = ['bugfix', 'feature/link']

function getLastCommonCommitMessage(commits, branches) {
    const firstBranch = branches[0];
    const secondBranch = branches[1];

    const commitsWithBranches = commits.filter(c => {
        if (c.branches) {
            return c.branches.find(b => b === firstBranch | b === secondBranch) !== undefined
        }
    })
    const arrayParents = commitsWithBranches.map(c => c.parents.join(''))

    let set = new Set()
    arrayParents.map(a=>set.add(a))


    ///////////////////////////
    const commit = commits.filter(c=> [...set].includes(c.id) )
    const maxTime =  Math.max(...commit.map(c=>c.timestamp))
    return commits.find(c=>c.timestamp === maxTime).message



}

console.log(getLastCommonCommitMessage(commits,branches))

