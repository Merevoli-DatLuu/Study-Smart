let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const countDayStart = 3; //total = countDayStartx2-1
Component({
  mixins: [], // các minxin sử dụng trong Component
  data: {
    days: [],
    items: [],
    active: "active",
    dayCenter: 50,
    positionCenter: -1,
  }, // data của component
  props: { y: 1 }, // các thuộc tính

  // các hàm life cycles
  didMount() {

    this.setData({ days: this.getToday() });
  },
  didUpdate() { },
  didUnmount() {},

  // các methods
  methods: {
    getToday() {
      let arr = [];
     this.checkCurrentDay();
      let daysInMonth, i;
      daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

      //counting day before
      for (i = -2; currentDay + i <= 0; ++i) {
        arr.push(String((daysInMonth + currentDay + i) % (daysInMonth+1)));
      }
      //counting day after
      daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      while (i < countDayStart) {
        if (currentDay + i == daysInMonth)
          arr.push(String((currentDay + i) % (daysInMonth + 1)));
        else arr.push(String((currentDay + i) % daysInMonth));
        ++i;
      }

      this.setData({
        positionCenter: currentDay,
      });
      return arr;
    },
    nextDays() {
      currentDay += countDayStart - 1;

      this.setData({ days: this.getToday() });
    },
    lastDays() {
      currentDay -= countDayStart - 1;
      this.setData({ days: this.getToday() });
    },
    onTouchEnd() {

      this.setData({ positionCenter: currentDay });
    },
    checkCurrentDay()
    {
    
    let daysInMonth=new Date(currentYear, currentMonth+1, 0).getDate(); ;
            //currentMonth -> MonthNow-1;
            if (currentDay <= 0) {
              daysInMonth=new Date(currentYear, currentMonth, 0).getDate();
              --currentMonth;
              currentDay += daysInMonth;
            } else if      (currentDay > daysInMonth) {
              ++currentMonth;
              currentDay %= daysInMonth;
            }
    }
  },
});
