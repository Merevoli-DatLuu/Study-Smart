Page({
  data: {
   value:10,
   isOpenMenu:"none",
   check: false
  },
  onLoad(query) {
  },
  onReady() {
  },
  onShow() {
    
  },
  onHide() {
 
  },
  onUnload() {
  },
  onRestoreDefault(){
    this.setData({value:0})
  },
  onMenu(event){
    let mode= this.data.isOpenMenu=="none" ? "block" : "none"
    this.setData({isOpenMenu:mode})
  },
  closeMenu()
  {
    this.setData({isOpenMenu:"none"})
    console.log("click")
  },
  toggleMenu(){
    this.setData({...this.data,check : !this.check})
  }
  
});