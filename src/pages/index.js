import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../components/customs.scss"
const IndexPage = () => (
    <Layout>
        <section class="section level">
            <div class="container">
                <div class="columns is-vcentered is-centered">
                    <div class="column is-half">
                        <h1 class="is-size-2">Get in contact</h1>
                        <form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                        <input
                            class="input"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                        />
                            <button  class="button is-primary is-medium"
                                >
                                    Send
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <SEO title="Contact form" />
    </Layout>
)

export default IndexPage
