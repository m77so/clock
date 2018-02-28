'use strict'
process.stdin.setEncoding('utf-8')
let baseDate = new Date()
const asDate = str => {
  const res = new Date(+baseDate)
  if (str.length == 2) {
    res.setDate(+str)
  } else if (str.length == 4) {
    res.setDate(+str.substr(-2))
    res.setMonth(+str.substr(0, 2) - 1)
  } else if (str.length == 6) {
    res.setDate(+str.substr(-2))
    res.setMonth(+str.substr(2, 4) - 1)
    res.setFullYear(+str.substr(0, 2) + 2000)
  } else if (str.length == 8) {
    res.setDate(+str.substr(-2))
    res.setMonth(+str.substr(4, 6) - 1)
    res.setFullYear(+str.substr(0, 4))
  }
  return res
}
const asTime = str => {
  return [+(str.substr(0,2)),+(str.substr(2,4))]
}
process.stdin.on('data', function(data) {
  const lines = data.split('\n').map(s => s.split(' '))
  const valid = data.filter(l => l[0] === '#').map(l => {
    const s = l[1].split('-')
    return {
      since: asDate(s[0]),
      until: asDate(s[1])
    }
  })
  baseDate = valid[0].since
  const labels = {}
  data.filter(l => l[0] === '+').map(l => {
    const res = []
    l.slice(2).forEach(e => {
      const ee = e.split('-')
      labels[l[1]].push({ since: ee[0], until: ee[1] })
    })
  })
  const special = []
  data.filter(l => l[0].match(/^[0-9]/) !== null).forEach(l => {
    const date = l[0].split('-')
    const dateArray = []
    if (date.length === 0) {
      dateArray.push(asDate(date[0]))
    } else {
      for (let d = +asDate(date[0]); d <= +asDate(date[1]); d += 86400000) {
        dateArray.push(+new Date(d))
      }
    }
    const timeArray = []
    for (let i = 1; i < l.length; ++i) {
      if (l[i].match(/^[0-9]{4}-[0-9]{4}$/)) {
        const ee = e.split('-')
        timeArray.push({ since: ee[0], until: ee[1] , open: true})
      }else if(labels[l[i]]!==void 0){
        labels
      }
    }
    for(let d of dateArray){
      for(let t of timeArray){
        const dtSince = new Date(d)
        const dtUntil = new Date(d)
        const tSince = asTime(t.since)
        const tUntil = asTime(t.until)
        dtSince.setHours(tSince[0],tSince[1],0,0)
        dtUntil.setHours(tUntil[0],tUntil[1],0,0)
        special.push({
          since:dtSince,
          until:dtUntil,
          open: t.open
        })
      }
    }
  })
  const res = {
    valid: valid
  }
})
