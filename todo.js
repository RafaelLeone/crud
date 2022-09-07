Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: "#app",
    data: {
        message: "Olá Vue!",
        tasks: [

        ],
        showModal: false
    },
    methods: {
        remove: function(tarefa){
            let index = this.tasks.indexOf(tarefa);
            this.tasks.splice(index, 1);
        }
    },
    created(){
        console.log('entrou aqui')
            fetch('http://localhost:3000/tasks')
            .then((response) => response.json())
            .then((tasks) =>
                (this.tasks = tasks))
            },
        })