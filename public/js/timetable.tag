<timetable>
  <fieldset each={fors}>
    <legend>{title_ja}方面 For {title_en}</legend>
    <ul>
      <bus each={buses} data={this}></bus>
    </ul>
    <div show={buses.length===0}>
      本日の運行は終了しました<br/>The service of today was finished.
    </div>
  </fieldset>

  <script>
    this.fors = getFor()

    setInterval(()=>{
      this.update({
        fors: getFor()
      })},
      1000
    )
  </script>

<!-- デバッグ用 -->
  <br/>
  <div style="height:100vh"></div>
  <ul>
    <bus each={aa}></bus>
  </ul>
  <script>
    this.aa = []
    for(let i =0;i<100;++i){
      this.aa.push({ 
          time: "",
          lasttime: i,
          text_ja: '',
          text_en: ''
      })
    }
  </script>
<!-- ここまでデバッグ用 -->
  <style>
  *{
    font-size: 2.5vh;
  }
  #clock{
    font-size:100px;
  }
    fieldset{
      display: inline-block;
      vertical-align:top;
      width: 40vw;
    }
    ul{
      margin:0;
      padding:0
    }
    li{
      list-style-type: none;
      padding:.2em;
      margin:.1em;
      
      height: 8vh;
    }
    bus:nth-child(odd) li{
      background: #cff;
    }
    bus:nth-child(even) li{
      background: #bdf;
    }
  </style>
</timetable>

<bus>
  <li style="background:rgb({red},{green},50)">{time} (in {lasttime}min) {text_ja}<br />{text_en}</li>
  <script>
    const lasttime = this.lasttime
    this.red = Math.max(255-lasttime*7,100)
    this.green= Math.min(120+lasttime*5,255)
  </script>
</bus>