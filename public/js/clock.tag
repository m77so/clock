<clock>
  <span id="clock_date">{mm}/{dd}</span> <span id="clock_hm">{hour}:{min}</span><span id="clock_s">:{sec}</span>
  <script>
    const fillzero = (num) =>{
      return ('00'+num).substr(-2)
    }
    const update = ()=>{
      const t = new Date()
      this.mm = fillzero(t.getMonth()+1)
      this.dd = fillzero(t.getDate())
      this.hour = fillzero(t.getHours())
      this.min = fillzero(t.getMinutes())
      this.sec = fillzero(t.getSeconds())
    }
    update()
    setInterval(()=>{
      update()
      this.update()
    },100)

  </script>

  <style>
    #clock_date{
      font-size:5vh
    }
    #clock_hm{
      font-size:8vh
    }
    #clock_s{
      font-size:3vh
    }
  </style>
</clock>