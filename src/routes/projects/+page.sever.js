import { onMount } from "svelte"
onMount( () => {
    fetch("https://api.github.com/users/Jkuffler/repos")
    })

// const selectedRepos = ['home-cookin', 'FIR', ]

// repos.filter((repo) )