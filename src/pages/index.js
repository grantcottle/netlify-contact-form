import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../components/customs.scss"
const IndexPage = () => (
<form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
>
<input
    class="input"
    type="text"
    placeholder='Your Name"
    name="name"
/>
    <button class="button is-primary is-medium">
            Send
        </button>
</form>
)

export default IndexPage
