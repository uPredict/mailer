import * as React from 'react'
import * as fs from 'fs'
import {render} from 'mjml-react'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote} from 'next-mdx-remote';
import components from './Components'
import Template from './Template'

(async () => {
    const emailDirectories = fs.readdirSync('./emails/', {withFileTypes: true})
        .filter(x => x.isDirectory())

    for (const directory of emailDirectories) {
        const emailSource = fs.readFileSync(`./emails/${directory.name}/email.md`)
        const mdx = await serialize(emailSource, {parseFrontmatter: true})

        const {html} = render(<Template>
            <MDXRemote {...mdx} components={components}/>
        </Template>);

        fs.writeFileSync(`./emails/${directory.name}/email.html`, html)
    }
})()
