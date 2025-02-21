<script>
const { data } = $props()
import Person from "$lib/components/Person.svelte";
</script>

<section class="page-title">
  <h2 class="text-l">{data.team[0].title}</h2>
</section>
<section class="content grid cols-3 text-xs">
  {#each data.team[0].team as member, i}
    <Person person={member}/>
  <!-- <div class="member">
    <div class="thumbnail">
      {#if member.thumbnail}
        <img src={urlFor(member.thumbnail)} alt="">
      {:else}
        <p class="text-m">{Array.from(member.name)[0]}{Array.from(member.surname)[0]}</p>
      {/if}
    </div>
    <p class="mt-0">{member.role}</p>
    <h2 class="mt-0"><a href="mailto:{member.email}">{member.name} {member.surname} ↗</a></h2>
    <p class="mt-0">{member.email}</p>
    {#each member.jobs as job, i}
      <p class="mt-0">{job}</p>
    {/each}
    {#if member.city}<p class="mt-0">{member.city}</p>{/if}
  </div> -->
  {/each}
</section>

<style>
.content {
  row-gap: calc(var(--gutter)*2);
}
</style>