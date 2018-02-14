'use strict'
process.stdin.setEncoding('utf-8')
process.stdin.on('data', function(data) {
  const lines = data.split('\n')
  let ja = ''
  let en = ''
  const res = {}
  for(let i =0;i<lines.length/2;++i){
    ja = lines[i*2]
    en =lines[i*2+1]
    res[ja]=en
  }
  console.log(res)
})
