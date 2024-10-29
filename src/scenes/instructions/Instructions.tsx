import ReactMarkdown from 'react-markdown'
import Readme from '../../../README.md?raw'
import 'github-markdown-css/github-markdown.css'

export default function Instructions() {
    return (
        <section className="Instructions relative mx-auto max-w-7xl px-4 focus:outline-none sm:px-3 md:px-5">
            <h2 className="sr-only">Instructions</h2>
            <article>
                <ReactMarkdown className="markdown-body">{Readme}</ReactMarkdown>
            </article>
        </section>
    )
}
