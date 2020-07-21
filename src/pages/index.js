import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/customs.scss"
const IndexPage = () => (
    <Layout>
        <section className="section level">
            <div className="container">
                <div className="columns is-vcentered is-centered">
                    <div className="column is-half">
                        <h1 className="is-size-2">Get in contact</h1>
                        <form
                            name="contact"
                            method="post"
                            netlify
                            data-netlify="true"
                        >
                            <div className="field">
                                <label className="label">
                                    Your Name:
                                    <input
                                        className="input"
                                        type="text"
                                        name="fullname"
                                    />
                                </label>
                            </div>
                            <div className="field">
                                <label className="label">
                                    Your Email:
                                    <input
                                        className="input"
                                        type="email"
                                        name="email"
                                    />
                                </label>
                            </div>
                            <div className="field">
                                <label className="label">
                                    Message:
                                    <textarea
                                        className="textarea"
                                        name="message"
                                    ></textarea>
                                </label>
                            </div>
                            <div className="field">
                                <button
                                    className="button is-primary is-medium"
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
