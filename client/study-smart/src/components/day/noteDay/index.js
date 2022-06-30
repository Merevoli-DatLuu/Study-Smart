
Component({
  mixins: [], // các minxin sử dụng trong Component
  data: {
    note:
    {
      startTime: "09:00",
      endTime:"10:00",
      title:"House Chores",
      paragraph:"Cleaning, Washing, Ironing,etc"
    }

  }, // data của component
  props: { y: 1 }, // các thuộc tính

  // các hàm life cycles
  didMount() {

  },
  didUpdate() {},
  didUnmount() {},

  // các methods
  methods: {
   
  },
});
