module.exports = function winners(wait, pushResult, STREET_RACERS, N) {


    let racers = {}
    let firstRacers = []
    const callBack = (racer,loseControl) => {
        if(loseControl===undefined) racers[racer].push('check')
        // else racers[racer].push('lose')
        console.log(racers)
            return new Promise(res=>{
                setTimeout(res, 0)
            }).then(()=>{
                // if(racers[racer].length===N){
                if(racers[racer].filter(r=>r==='check').length === N){
                    firstRacers.push(racer)
                    if(firstRacers.length === 3) pushResult(firstRacers)
                }
            })


    }

    STREET_RACERS.map(racer=>{

        racers[racer] = []

        for (let i = 1; i <= N; i++){
            wait(racer, i, (loseControl)=>callBack(racer,loseControl))

        }
    })



}
