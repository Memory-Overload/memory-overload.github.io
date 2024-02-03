import React, { useState, useEffect } from "react";
import "./reader.css";

/** Alias for window.sessionStorage.setItem(key, value) */
const setStorage = (key, value) => window.sessionStorage.setItem(key, value);

/** Alias for window.sessionStorage.getItem(key) */
const getStorage = (key) => window.sessionStorage.getItem(key);

let chapter_paths_list = [];
let chapter_titles_list = [];
let currentChapter = 0;
let currentFontSize = 16; // default font size

const fontChoices = [
  ["Times New Roman", "Times", "serif"],
  ["Verdana", "Arial", "sans-serif"],
  ["Courier New", "Lucida", "monospace"],
  ["Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", "cursive"] // comic sans: microsoft, chalkboard: apple
]
let currentFontFamily = getStorage("font") ?? fontChoices[0]

function Reader({ folder }) {
  setStorage("storyPath", folder)

  const [nextButtonVisible, setPreviousButtonVis] = useState(false);
  const [previousButtonVisible, setNextButtonVis] = useState(true);
  const [chapterDropdown, setChapterDropdown] = useState(null);

  function update_styles(iframe) {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Add a style tag to set the font-size property inside the iframe
    const styleTag = iframeDocument.createElement('style');
    styleTag.innerHTML = `body { font-size: ${currentFontSize}px; font-family: ${currentFontFamily};}`;
    iframeDocument.head.appendChild(styleTag);
  }

  function change_chapter(jumping, new_chapter) {
    // update dropdown and currentChapter
    const dropdown = document.getElementById("chapter-selection")
    currentChapter = jumping ? Number(dropdown.value) : new_chapter
    if (!jumping) { dropdown.value = new_chapter }

    // update iframe to selected chapter
    const iframe = document.getElementById("reader-iframe");
    iframe.src = "fic_html/" + folder + "/" + chapter_paths_list[currentChapter];

    // apply font-size and typeface when iframe loads
    iframe.onload = () => { update_styles(iframe); };

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
    setStorage("font", currentFontFamily)
    const iframe = document.getElementById("reader-iframe")
    const innerDoc = iframe.contentDocument
    innerDoc.activeElement.style["font-family"] = currentFontFamily
  }

  function toggleWideMode() {
    // fuck sessionStorage for not allowing booleans
    let wideMode = getStorage("wideMode") ?? "init"
    if (wideMode === "init") {
      wideMode = "true"
    }
    else {
      wideMode = wideMode === "true" ? "false" : "true";
    }
    setStorage("wideMode", wideMode)
    const reader = document.getElementById("reader");
    reader.style.maxWidth = wideMode === "true" ? "100vw" : "80vw";
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      // get chapters
      await fetch("fic_html/" + folder + "/sitemap.json")
        .then(resp => resp.json())
        .then(resp => {
          chapter_paths_list = [];
          chapter_titles_list = [];
          Object.entries(resp)[0][1].map(chap => {
            chapter_paths_list.push(chap.section.path);
            chapter_titles_list.push(chap.section.title);
            return 1;
          });
        })

      // set wide mode
      const wide_mode_cb = document.getElementById("wide_mode_checkbox")
      wide_mode_cb.checked = getStorage("wideMode") === "true"
      if (wide_mode_cb.checked) {
        const reader = document.getElementById("reader");
        reader.style.maxWidth = "100vw";
      }

      // set font radio button
      let font_buttons = document.getElementsByName("fontSelection")
      font_buttons.forEach(choice => { if (choice.id === getStorage("font")) { choice.checked = true } return 1; })

      // update iframe src
      const iframe = document.getElementById("reader-iframe")
      iframe.src = "fic_html/" + folder + "/" + chapter_paths_list[0];
      iframe.onload = () => { update_styles(iframe) }

      // create chapter selection dropdown if necessary
      if (chapter_titles_list.length > 1) {
        setNextButtonVis(true)
        setChapterDropdown(<select onInput={() => (change_chapter(true, -1))} id="chapter-selection">
          {[...Array(chapter_paths_list.length).keys()].map((num) =>
            <option key={num} value={num}>
              {num + 1}. {chapter_titles_list[num]}
            </option>)}
        </select>)
      } else { setNextButtonVis(false) }
      setPreviousButtonVis(false)
    }, 1);
    // clean up
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {chapterDropdown ?
        <p>
          Jump to Chapter...<br />
          {chapterDropdown}
        </p> : <></>}
      <div id="reader">
        <iframe id="reader-iframe" title="reader-iframe" src="loading.html"></iframe>
      </div>
      <p>
        {nextButtonVisible && <button onClick={() => { change_chapter(false, currentChapter - 1) }}>← Previous Chapter</button>}
        &nbsp;
        {previousButtonVisible && <button onClick={() => { change_chapter(false, currentChapter + 1) }}>Next Chapter →</button>}
      </p>
    </div>
  )
}

export default Reader;
