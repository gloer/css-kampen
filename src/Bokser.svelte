<script>
    import Boks from "./Boks.svelte"
    import {db} from "./firebase.js"
    const cssBokser = db.collection("cssBokser")

    let bokser = []

    const lagBoks = () => {
        cssBokser.add({
            css: "background-color: orange;"
        })
    }

    cssBokser.onSnapshot(snap => {
        bokser = snap.docs
    })


</script>

<header>
    <button on:click={lagBoks}>LEGG TIL NY BOKS</button>
</header>
<section>
    {#each bokser as boks}
        <Boks id={boks.id} data={boks.data()} />
    {:else}
        <div>Klikk på knappen for å starte</div>
    {/each}
</section>

<style>

    section {
        margin-top: 2rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: 230px;
    }

    button {
        border: none;
        background-color: blueviolet;
        color: white;
        border-radius: 10px;
        padding: 1rem;
        cursor: pointer;
    }

    button:active {
        background-color: darkblue;        
    }

</style>