<timetable>
<div id='clock'>{clock}</div>
  <fieldset each={fors}>
    <legend>{title}方面</legend>
    <ul>
      <li each={buses}>{time} (in {lasttime}min) {title}</li>
    </ul>
  </fieldset>
  <script>
    this.fors = opts.fors
    this.clock = opts.clock
  </script>
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
      
      height: 8vh;
    }
    li:nth-child(odd){
      background: #cff;
    }
    li:nth-child(even){
      background: #bdf;
    }
  </style>
</timetable>