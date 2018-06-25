<script>

    const watchState = ( context ) => {

        const states = context.states || Object.keys( context.$store.state[ context.module ] );

        states.forEach( key =>
            context.$watch(
                () => context.$store.state[ context.module ][ key ],
                ( newVal ) => context.$set( context.state, key, newVal),
                { immediate: true }
            )
        );

    };

    const watchGetters = ( context, getters ) => {
        if( !getters ) return;

        getters.forEach( getter =>
            context.$watch(
                () => context.$store.getters[ getter ],
                ( newVal ) => context.$set( context.state, getter, newVal ),
                { immediate: true }
            )
        );

    };

    const setActions = ( context, actions ) => {
        if( !actions ) return;

        for( const action of actions ) {
            context.boundActions[ action ] = ( payload ) => context.$store.dispatch( action, payload );
        }
    };

    export default {
        props: {
            module: {
                type: String,
                required: true
            },
            states: {
                type: Array
            },
            actions: {
                type: Array
            },
            getters: {
                type: Array
            }
        },
        data() {
            return {
                state: {},
                boundActions: {}
            }
        },
        created() {
            watchState( this );
            watchGetters( this, this.getters);
            setActions( this, this.actions );
        },
        render() {
            return this.$scopedSlots.default({
                data: this.state,
                actions: this.boundActions,
            });
        },
    }

</script>
