const app = new Vue({
   el: '#root',
   data:{
      cds: null,
      filteredCds: null,
      genre: ''
   },
   methods:{
      filterCd: function(){
      this.filteredCds = this.cds.filter(e => e.genre == this.genre);
      }
   },
   mounted: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(result => this.cds = result.data.response);
   }
});
