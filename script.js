Vue.createApp({
    data(){
        return{
            showModal:false,
            todoList:[

            ],

            todo:{
                list:''
            },

            numbers:'',

            

            
        }
    },
    methods:{ 
        showList(){
            this.showModal = !this.showModal
        },

        addList(){ 
            this.todoList.push(this.todo)
            this.todo = {list:''};
            this.numbers = this.todoList.length;
        },

        deleteItem(index) {
            this.todoList.splice(index, 1);
            this.numbers = this.todoList.length;
            
         },

         deleteAll(){
             this.todoList = [];
             this.numbers = this.todoList.length;
         }
    }

}).mount("#app")

