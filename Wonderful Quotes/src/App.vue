<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="CreateNew($event)"></app-new-quote>
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
    import Header from './components/Header.vue';

    export default {
        data: function(){
            return {
                quotes: ['Just a quote to see something.'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid : QuoteGrid,
            appNewQuote : NewQuote,
            appHeader : Header
        },
        methods: {
            CreateNew(q){
                if(this.quotes.length >= this.maxQuotes)
                {
                    return alert('Max Quotes is 10');
                }
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
