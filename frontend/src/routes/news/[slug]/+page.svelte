<script>
const { data } = $props()
import News from '$lib/components/News.svelte';
</script>

<News news={data.news[0]}/>