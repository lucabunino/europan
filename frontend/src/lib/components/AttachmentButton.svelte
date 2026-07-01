<script>
const {
  attachment = null,
} = $props();
</script>

<a class="attachment-button no-hover" href={attachment.url} target="_blank" rel="noopener noreferrer">
  <span class="attachment-title text-m">{attachment.title}</span>
  <span class="attachment-icon text-m">↧</span>
</a>

<style>
.attachment-button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  color: var(--black);
  background-color: var(--gray);
  aspect-ratio: var(--aspectRatio);
  padding: .4em .8em;
  position: relative;
}
.attachment-title {
	margin-top: .15em;
}
.attachment-title,
.attachment-icon {
  align-self: flex-start;
  overflow-wrap: break-word;
}
@media screen and (min-width: 601px) {
  .attachment-button:hover {
    background-color: var(--black);
    color: var(--white);
  }
}
</style>
