<script>
    import Carousel from 'svelte-carousel';
    import Grid from '../components/grid.svelte';
    import { browser } from '$app/environment';
    let carousel;

    const handleNextClick = () => {
    carousel.goToNext()
  }

    let imagenes = [
        {
            image: "https://images.pexels.com/photos/8458768/pexels-photo-8458768.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/19421454/pexels-photo-19421454/free-photo-of-ciudad-calle-hotel-edificio.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/19797769/pexels-photo-19797769/free-photo-of-ciudad-gente-azotea-cafeteria.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/19798545/pexels-photo-19798545/free-photo-of-ciudad-cielo-puesta-de-sol-arte.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        },
    ]
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if browser}
  <Carousel autoplay autoplayDuration="4000"
    bind:this={carousel}
  >
    {#each imagenes as img}
        <div style="display: flex; justify-content: center;">
            <img width="300px" src={img.image} alt="imagen">
        </div>
    {/each}
  </Carousel>
{/if}

<button on:click={handleNextClick}>Next</button>

<Grid />