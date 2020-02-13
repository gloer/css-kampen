<script>
    import {db} from "./firebase.js"
    const cssBokser = db.collection("cssBokser")

    export let id = ""
    export let data = {}

    const endreCSS = () => {
        const boks = cssBokser.doc(id)
        boks.update({
            css: data.css
        })
    }

</script>

<textarea style={data.css} bind:value={data.css} on:input={endreCSS}></textarea>

<style>
    textarea {
        transition: 2s;
    }

    textarea:focus {
        outline: none;
    }
</style>