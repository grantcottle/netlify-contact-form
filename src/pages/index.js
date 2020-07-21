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
                        <form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                        />
                            <button 
                                >
                                    Send
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default IndexPage
