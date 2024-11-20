<script lang="ts">
    import "$lib/style/fonts.css"
    import domorice from "$lib/assets/domorice.png"

    const { children } = $props();

    const elems_len = 5;
    const elems = {
        arr: new Array<HTMLAnchorElement>(elems_len),
        curr: 0,
    }

    const newClickHandler = (index: number) => {
        return () => {
            if (index == elems.curr)
                return

            const curr_el = elems.arr[elems.curr]
            curr_el.classList.remove('selected')
            curr_el.classList.add('unselected')

            const new_curr_el = elems.arr[index]
            new_curr_el.classList.remove('unselected')
            new_curr_el.classList.add('selected')

            elems.curr = index
        }
    }
</script>

<div class="maincontainer">
    <header>
        <div class="namecontainer">
            <span>
                <img class="domorice" src={domorice} alt="domo-kun eating rice" />
            </span>
            <span>pandadiestro</span>
        </div>
    </header>
    <div class="content">
        <nav class="sections">
            <ul class="sectionslist">
                <li class="sectionelem">
                    <a
                        bind:this={elems.arr[0]}
                        class="selected"
                        onclick={newClickHandler(0)}
                        href="/"
                    >whoami</a>
                </li>
                <li class="sectionnone" role="none">·</li>
                <li class="sectionelem">
                    <a
                        bind:this={elems.arr[1]}
                        class="unselected"
                        onclick={newClickHandler(1)}
                        href="/blog"
                    >blog</a>
                </li>
                <li class="sectionnone" role="none">·</li>
                <li class="sectionelem">
                    <a
                        bind:this={elems.arr[2]}
                        class="unselected"
                        onclick={newClickHandler(2)}
                        href="/publications"
                    >publications</a>
                </li>
            </ul>
        </nav>
        <main>
            <div class="separator" role="none"></div>
            {@render children()}
        </main>
    </div>
</div>

<style>
    .separator {
        position: relative;
        display: flex;
        width: 20px;
        height: 1px;

        margin-block: 25px;
        align-self: flex-start;

        background-color: #fbf1c7;
    }

    main {
        position: relative;
        display: flex;
        flex-flow: column;
        width: 70%;
        top: 60px;


        align-items: center;
        text-align: justify;

        font-size: 25px;
    }

    .maincontainer {
        position: relative;
        display: flex;

        width: 100%;
        height: 100%;

        flex-flow: row;
        font-family: 'EBGaramond';
        color: #fbf1c7;
    }

    header {
        position: relative;
        display: flex;

        width: 50%;
        height: 100%;
    }

    .namecontainer {
        display: flex;
        position: relative;

        align-self: end;
        bottom: 50px;
        left: 50px;

        font-size: 96px;
    }

    .domorice {
        height: 140px;
    }

    .content {
        display: flex;
        position: relative;
        width: 50%;
        margin: 50px;

        flex-flow: column;
        align-items: center;

        font-size: 32px;

        overflow-y: auto;
        overflow-x: hidden;
    }

    .sections {
        display: flex;
        position: relative;

        height: fit-content;

        justify-self: center;
    }

    .sectionslist {
        display: flex;
        position: relative;

        list-style: none;
        padding: 0px;
        margin: 0px;
        gap: 15px;
    }

    .sectionelem>a {
        cursor: pointer;
        transition-duration: 0.2s;
        user-select: none;
        border-bottom-style: solid;
        border-bottom-width: 2px;

        text-decoration: none;
        color: inherit;
    }

    .sectionnone {
        cursor: default;
        user-select: none;
    }

    .sectionelem>a:hover {
        border-bottom-color: #fbf1c7;
    }

    .selected {
        border-bottom-color: #fbf1c7;
    }

    .unselected {
        border-bottom-color: #ffffff00;
    }
</style>

