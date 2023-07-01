import { onMount } from "svelte"
onMount( () => {
    fetch("https://api.github.com/users/Jkuffler/repos")
    .then(r => r.json())
    .then(repos => console.log(repos))
    })
