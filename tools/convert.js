'use strict'
process.stdin.setEncoding('utf-8')
process.stdin.on('data', function(data) {
  const lines = data.split('\n')
  let via = []
  let to = ''
  const timetable = []
  for(let line of lines){
    if(line.indexOf('+')>-1){
      via = line.substr(2).split(',').map(l=>l.trim())
      continue
    }
    timetable.push({
      time:+(line.substr(0,2))*60+(+line.substr(2,2)),
      via:via
    })
  }
  timetable.sort((a,b)=>a.time-b.time)
  console.log(JSON.stringify(timetable))
})
