<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuote($event)"></app-new-quote>
        <app-quote-grid :quotes="quotes" @delQoute="deleteQuote($event)"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="div alert alert-info">Info: click on a quote to delete it.</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    export default {
        data: function(){
            return {
                quotes: ['Just a quote to see something.'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid : QuoteGrid,
            appNewQuote : NewQuote
        },
        methods: {
            newQuote(q){
                this.quotes.push(q);
            },
            deleteQuote(q){
                this.quotes.splice(this.quotes.indexOf(q), 1);
            }
        }
    }
</script>

<style>
</style>
