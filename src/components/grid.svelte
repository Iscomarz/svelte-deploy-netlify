<script>
    import Grid from "gridjs-svelte";

    const columns = [
        {
            name: "Nombre",
            sort: true
        },
        {
            name: "Username",
            sort: false
        },
        {
            name: "Email",
            sort: false
        },
    ]
</script>

<Grid 
{columns}
search
pagination={{enabled: true, limit: 5}}
server={{
    url:"https://jsonplaceholder.typicode.com/users",
    then: (data) => 
        data.map((user) => {
            return [user.name, user.username, user.email]
        })
}}
/>

<style global>
    @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>