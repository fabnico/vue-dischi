const app = new Vue({
   el: '#root',
   data:{
      cds: null,
      genre: ''
   },
   methods:{
      deleteFilter: function (){
         this.genre = '';
      },
      getCd: function (){
         if (this.genre == ''){
            return this.cds
         } else {
            return this.cds.filter(e => e.genre == this.genre)
         }
      }
   },
   mounted: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(result => this.cds = result.data.response);
   }
});
