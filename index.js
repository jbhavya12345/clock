let sec = document.getElementById("sec");
      let min = document.getElementById("min");
      let hr = document.getElementById("hr");
      setInterval(() => {
        let D = new Date();
        secdeg = 6 * D.getSeconds();
        mindeg = (60 * D.getMinutes() + D.getSeconds()) * 0.1;
        hrdeg = ((D.getHours()*3600) + (60 * D.getMinutes() + D.getSeconds())) * (1/120);
        sec.style.transform = `rotate(${secdeg}deg)`;
        min.style.transform = `rotate(${mindeg}deg)`;
        hr.style.transform = `rotate(${hrdeg}deg)`;
        console.log(D)
      }, 1000);