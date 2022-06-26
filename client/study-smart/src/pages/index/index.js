Page({
  onLoad(query) {
   
  },
  onReady() {
    console.log("onload")
   
    var numb=   document.querySelector(".numb").exec((ret) => {
      console.dir(ret);

    });
   // console.dir(numb);
      numb.value="100%";
            let counter = 0;
            // setInterval(()=>{
            //   if(counter == 100){
            //     clearInterval();
            //   }else{
            //     counter+=1;
            //     numb.textContent = counter + "%";
            //   }
            // }, 80);
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  }
});