import React, { useState } from "react";
import "./reader.css";


let chapter_paths_list = [];
let chapter_titles_list = [];

const get_json = async () =>
  await fetch("fic_html/" + (window.sessionStorage.getItem("storyPath") ?? 'TheGoodBasiliskLuzura') + "/sitemap.json")
    .then(resp => resp.json())
    .then(
      resp => {
        chapter_paths_list = [];
        chapter_titles_list = [];
        Object.entries(resp)[0][1].map(chap => {
          chapter_paths_list.push(chap.section.path);
          chapter_titles_list.push(chap.section.title);
          return 1;
        });
      }
    );

let currentChapter = 0;
let currentFontSize = 16; // default font size

const fontChoices = [
  ["Times New Roman", "Times", "serif"],
  ["Verdana", "Arial", "sans-serif"],
  ["Courier New", "Lucida", "monospace"],
  ["Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", "cursive"] // comic sans: microsoft, chalkboard: apple
]
let currentFontFamily = fontChoices[0]

function Reader({ folder }) {
  window.sessionStorage.setItem("storyPath", folder)

  const [isNotFirstChapter, setPreviousButtonVis] = useState(false);
  const [isNotLastChapter, setNextButtonVis] = useState(true);

  function change_chapter(jumping, new_chapter) {
    // update dropdown and currentChapter
    const dropdown = document.getElementById("chapter-selection")
    currentChapter = jumping ? Number(dropdown.value) : new_chapter
    if (!jumping) { dropdown.value = new_chapter }

    // update iframe to selected chapter
    const iframe = document.getElementById("reader-iframe");
    iframe.src = "fic_html/" + folder + "/" + chapter_paths_list[currentChapter];

    // apply font-size and typeface when iframe loads
    iframe.onload = () => {
      // Ensure the content is fully loaded before modifying styles
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

      // Add a style tag to set the font-size property inside the iframe
      const styleTag = iframeDocument.createElement('style');
      styleTag.innerHTML = `body { font-size: ${currentFontSize}px; font-family: ${currentFontFamily};}`;
      iframeDocument.head.appendChild(styleTag);
    };

    // update button visibility
    setNextButtonVis(currentChapter < (chapter_paths_list.length - 1));
    setPreviousButtonVis(currentChapter !== 0);
  }

  function changeFontSize(change_by) {
    currentFontSize += change_by
    const iframe = document.getElementById("reader-iframe")
    const innerDoc = iframe.contentDocument
    innerDoc.activeElement.style["font-size"] = currentFontSize + "px"
  }

  function changeFontFamily(new_font_family) {
    currentFontFamily = new_font_family
    const iframe = document.getElementById("reader-iframe")
    const innerDoc = iframe.contentDocument
    innerDoc.activeElement.style["font-family"] = currentFontFamily
  }

  function toggleWideMode() {
    let wideMode = window.sessionStorage.getItem("wideMode") ?? "true"
    wideMode = wideMode === "true" ? "false" : "true";
    window.sessionStorage.setItem("wideMode", wideMode)
    const reader = document.getElementById("reader");
    reader.style.maxWidth = wideMode === "true" ? "100vw" : "80vw";
  }

  setTimeout(async () => {
    await get_json();
    document.getElementById("reader-iframe").src = "fic_html/" + folder + "/" + chapter_paths_list[0];
    document.getElementById(currentFontFamily).checked = true;
    const wide_mode_cb = document.getElementById("wide_mode_checkbox")
    wide_mode_cb.checked = window.sessionStorage.getItem("wideMode") === "true"
    if (wide_mode_cb.checked) {
      const reader = document.getElementById("reader");
      reader.style.maxWidth = "100vw";
    }
  }, 1);

  return (
    <div>
      <p>
        Font options &nbsp;
        <button onClick={() => changeFontSize(-2)}>Dec. Font Size</button>
        &nbsp;
        <button onClick={() => changeFontSize(2)}>Inc. Font Size</button>
      </p>

      <form>
        <fieldset>
          {fontChoices.map(choice => <div key={choice}>
            <input type="radio" name="fontSelection"
              value={choice} id={choice}
              onChange={() => { changeFontFamily(choice) }} />
            <label htmlFor={choice}>{choice[0]}</label>
          </div>)}
        </fieldset>
      </form>

      <input id="wide_mode_checkbox" name="wide_mode_checkbox" type="checkbox" onClick={toggleWideMode} />
      <label htmlFor="wide_mode_checkbox">Wide Mode</label>

      {chapter_titles_list.length > 1 &&
        <p>
          Jump to Chapter...<br />
          <select onInput={() => (change_chapter(true, 0))} id="chapter-selection">
            {[...Array(chapter_paths_list.length).keys()].map((num) =>
              <option key={num} value={num}>
                {num + 1}. {chapter_titles_list[num]}
              </option>)}
          </select>
        </p>}

      <div id="reader">
        <iframe id="reader-iframe" title="reader-iframe" src="loading.html"></iframe>
      </div>

      {chapter_titles_list.length > 1 ? <p>
        {isNotFirstChapter && <button onClick={() => { change_chapter(false, currentChapter - 1) }}>← Previous Chapter</button>}
        &nbsp;
        {isNotLastChapter && <button onClick={() => { change_chapter(false, currentChapter + 1) }}>Next Chapter →</button>}
      </p> : <p></p>}
    </div>
  )
}

export default Reader;