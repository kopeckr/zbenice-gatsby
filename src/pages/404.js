import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  maxWidth: 600
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Nenalezeno</title>
      <h1 style={headingStyles}>Stránka nebyla nalezena</h1>
      <p style={paragraphStyles}>
        Omlouváme se{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        obsah nebyl nalezen
        <br />
        <br />
        <p>Zpět na hlavní stránku {' '}
        <Link to="/">Domů</Link>.
        </p>
      </p>
    </main>
  )
}

export default NotFoundPage
