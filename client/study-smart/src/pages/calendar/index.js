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
  closeMenu()
  {
    this.setData({isOpenMenu:"none"})

  },
  toggleMenu(){
    let mode= this.data.isOpenMenu=="none" ? "block" : "none"
    this.setData({isOpenMenu:mode})
  }
  
});