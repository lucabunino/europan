<script>
const { data } = $props()
import News from '$lib/components/news.svelte';
</script>

<News news={data.news[0]}/>