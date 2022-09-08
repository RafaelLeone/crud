var app = new Vue({
    el: "#app",
    data: {
        message: "Olá Vue!",
        tasks: [

        ],
        showModal: false,
        showModalEdit: false,
        novaTarefa: '',
        tagDeCategoria: '',
    },
    methods: {
        add: function(){
            console.log(this.tasks.length+1)
            this.tasks.push({"id": this.tasks.length+1,
            "title": this.novaTarefa,
            "dueTo": "2022-05-01T12:00:00.000Z",
            "project": this.tagDeCategoria,
            "usuario": "joao@example.com",
            "feita": ""})
        },
        close: function(){
            this.showModal = false;
            this.showModalEdit = false;
        },
        edit: function(tarefa){
            tarefa.title = this.novaTarefa
            tarefa.project = this.tagDeCategoria
            console.log(this.novaTarefa)
            console.log(tarefa.title)
        },
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