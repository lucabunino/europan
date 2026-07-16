import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './sanity';

// Get a pre-configured url-builder from your sanity client
const builder = createImageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source).auto('format')
}