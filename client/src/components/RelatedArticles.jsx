import { Link } from 'react-router-dom'
import { BLOG_ARTICLES, RELATED_BY_SLUG } from '../blog/blogData'

export default function RelatedArticles({ currentSlug }) {
  const relatedSlugs = RELATED_BY_SLUG[currentSlug]
  if (!relatedSlugs || relatedSlugs.length === 0) return null

  const articles = relatedSlugs
    .map((slug) => BLOG_ARTICLES.find((a) => a.slug === slug))
    .filter(Boolean)

  if (articles.length === 0) return null

  return (
    <section className="mt-12 pt-8 border-t border-gray-200" aria-label="Related articles">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Related articles</h2>
      <ul className="space-y-3">
        {articles.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              to={`/blog/${slug}`}
              className="text-indigo-600 hover:text-indigo-700 hover:underline text-[0.95rem]"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
