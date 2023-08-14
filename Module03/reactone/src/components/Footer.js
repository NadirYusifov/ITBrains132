import React from 'react'

function Footer() {
  return (
    <div id="contact" className="w3-container w3-padding-top-32">
    <h2 className="w3-border-bottom w3-border-light-grey w3-padding-16">
      Contact
    </h2>
    <p>Lets get in touch and talk about your next project</p>
    <form action="/action_page.php" target="_blank">
      <input
        className="w3-input w3-border"
        type="text"
        placeholder="Name"
        required=""
        name="Name"
      />
      <input
        className="w3-input w3-section w3-border"
        type="text"
        placeholder="Email"
        required=""
        name="Email"
      />
      <input
        className="w3-input w3-section w3-border"
        type="text"
        placeholder="Subject"
        required=""
        name="Subject"
      />
      <input
        className="w3-input w3-section w3-border"
        type="text"
        placeholder="Comment"
        required=""
        name="Comment"
      />
      <button className="w3-button w3-black w3-section" type="submit">
        <i className="fa fa-paper-plane" /> SEND MESSAGE
      </button>
    </form>
    <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image" style={{ width: "100%" }} />
    <footer className="w3-center w3-black w3-panel w3-padding-16">
      <p>
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          className="w3-hover-text-green"
        >
          w3.css
        </a>
      </p>
    </footer>
  </div>
  
  )
}

export default Footer