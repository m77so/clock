const getFor = () => {
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
  let enFlag = ~~(now.getSeconds() / 6) % 2 ? true : false
  ikisakis.forEach(ikisaki => {
    fors.push({
      buses: currentTimetable
        .filter(e => {
          if (ikisaki.filter === null) return true
          for (let filter of ikisaki.filter) {
            if(filter.charAt(0)==='~' && e.via.includes(filter.substr(1))){
              return false
            }
            if (e.via.includes(filter)) {
              return true
            }
          }
          return false
        })
        .slice(0, 2)
        .map(e => {
          const bustime = new Date(+now)
          bustime.setHours(~~(e.time / 60))
          bustime.setMinutes(e.time % 60)
          return {
            time: bustime.getHours() + ':' + ('00' + bustime.getMinutes()).substr(-2),
            lasttime: ~~((bustime - now) / 60000),
            text_ja: e.via.join('->'),
            text_en: e.via.map(str => english[str]).join('->')
          }
        }),
      title_en: english[ikisaki.title] ,
      title_ja: ikisaki.title
    })
  })
  return fors
}

