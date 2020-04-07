<template>
    <div class="row">
        <app-quote v-for="quote in quotes" @click.native="deleteQuote(quote)">
            {{quote}}
        </app-quote>
    </div>
</template>

<script>
    import quote from './Quote.vue';

    export default {
        props : ['quotes'],
        components: {
            appQuote: quote
        },
        methods: {
            deleteQuote(quote){
                this.$emit('delQoute', quote);
            }
        },
    }
</script> 