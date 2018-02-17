<timetable>
<div id='clock'>{clock}</div>
  <fieldset each={fors}>
    <legend>{title}方面</legend>
    <ul>
      <bus each={buses} data={this}></bus>
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
    bus:nth-child(odd) li{
      background: #cff;
    }
    bus:nth-child(even) li{
      background: #bdf;
    }
  </style>
</timetable>
<bus>
  <li >{time} (in {lasttime}min) {text_ja}<br />{text_en}</li>
  <script>
  
  </script>
</bus>