Component({
  mixins: [], // các minxin sử dụng trong Component
  data: {  month : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  // check ngày hiện tại 
  checkCurrentDay : new Date().getDate()
}, // data của component
  props: { y: 1 }, // các thuộc tính

  // các hàm life cycles
  didMount() {
  },
  didUpdate() {},
  didUnmount() {},

  // các methods
  methods: {
   handleChangeDate(event){
     // khi click vào thì sẽ set lại active 
     let dateClicked = event.currentTarget.dataset.day
     this.setData({checkCurrentDay:dateClicked})
  
   }
   
  }
})
