import rss from '@astrojs/rss';

export async function GET(context) {
    const posts = Object.values(import.meta.glob('./blog/*.md', { eager: true }));
    return rss({
        title: 'Blog | Daniel Ting',
        description: 'My personal blog.',
        site: context.site,
        trailingSlash: false,
        stylesheet: '/rss.xsl',
        items: posts
            .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date))
            .map((post) => ({
                title: post.frontmatter.title,
                pubDate: new Date(post.frontmatter.date),
                description: post.frontmatter.description,
            })),
        customData: `<language>en-us</language>`,
    });
}
