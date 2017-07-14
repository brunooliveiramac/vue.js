<template>
    <button @click="callAction()" class='btn' :class="buttonStyle" :type="type">{{label}}</button>
</template>

<script>

export default {

    //props: ['type', 'label', 'confirm', 'btnStyle'],

    props: {
        type: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        },
        confirm: Boolean,
        btnStyle: String
    },

    methods: {
        callAction(){
            if(this.confirm){ 
                if(confirm('Do you relly want to remove?')) {
                    this.$emit('buttonActive')
                }
                return;
            }
            
            this.$emit('buttonActive')
       }    
   },

   computed: {
       buttonStyle(){
           if(this.btnStyle == 'default' || !this.btnStyle)
                return 'btn-default';
           else
                return 'btn-danger';
       }
   }

}

</script>

<style scoped>
    .btn {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .btn-danger {
        background: firebrick;
        color: white;
    }

    .btn-default {
        background: darkcyan;
        color: white;
    }

</style>

