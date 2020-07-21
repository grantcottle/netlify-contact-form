import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
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
                            netlify-honeypot="bot-field"
                        >
                            <div class="field">
                                <label class="label">
                                    Your Name:
                                    <input
                                        class="input"
                                        type="text"
                                        name="name"
                                    />
                                </label>
                            </div>
                            <div class="field">
                                <label class="label">
                                    Your Email:
                                    <input
                                        class="input"
                                        type="email"
                                        name="email"
                                    />
                                </label>
                            </div>
                            <div class="field">
                                <label class="label">
                                    Message:
                                    <textarea
                                        class="textarea"
                                        name="message"
                                    ></textarea>
                                </label>
                            </div>
                            <div class="field">
                                <button
                                    class="button is-primary is-medium"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <SEO title="Contact form" />
    </Layout>
)

export default IndexPage
