import abbr from 'markdown-it-abbr';
import markdownIt from 'markdown-it';
import { IdAttributePlugin } from '@11ty/eleventy';
import embeds from 'eleventy-plugin-embed-everything';

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(IdAttributePlugin);
};
