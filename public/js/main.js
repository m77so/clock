const ikisakis = [
  { title: '若松', filter: null },
  { title: '鈴見台二丁目', filter: ['鈴見台二丁目'] },
  { title: '旭町', filter: ['旭町', '如来寺前'] },
  { title: '香林坊', filter: ['香林坊', '西金沢', '金沢駅'] },
  { title: '西金沢', filter: ['西金沢'] },
  { title: '金沢駅', filter: ['金沢駅'] }
]
setInterval(() => {
  let now = new Date()
  const holiday = JapaneseHolidays.isHoliday(now)
  const vacation = now < new Date(2018, 4, 17, 0, 0, 0) && now > new Date(2018, 2, 13, 0, 0, 0)
  const sun = now.getDay() === 0
  const sat = now.getDay() === 6
  let res
  if (holiday || sun) {
    res = timetable.sun
  } else if (sat) {
    res = timetable.sat
  } else if (vacation) {
    res = timetable.vacation
  } else {
    res = timetable.weekday
  }
  const comparedTime = now.getHours() * 60 + now.getMinutes()
  const currentTimetable = res.filter(e => e.time >= comparedTime)

  const fors = []
  let enFlag = ~~(now.getSeconds()/6)%2 ? true : false
  ikisakis.forEach(ikisaki => {
    fors.push({
      buses: currentTimetable
        .filter(e => {
          if (ikisaki.filter === null) return true
          for (let filter of ikisaki.filter) {
            if (e.via.includes(filter)) {
              return true
            }
          }
          return false
        })
        .slice(0, 2)
        .map(e => {
          const bustime = new Date()
          bustime.setHours(~~(e.time / 60))
          bustime.setMinutes(e.time % 60)
          return {
            time: bustime.getHours() + ':' + ('00' + bustime.getMinutes()).substr(-2),
            lasttime: ~~((bustime - now) / 60000),
            title: e.via.map(str=>enFlag?english[str]:str).join('->')
          }
        }),
      title: enFlag?english[ikisaki.title]:ikisaki.title
    })
  })
  riot.mount('timetable', {
    fors: fors,
    clock: now.getHours() + ':' + ('00' + now.getMinutes()).substr(-2) + ':' + ('00' + now.getSeconds()).substr(-2)
  })
}, 100)
