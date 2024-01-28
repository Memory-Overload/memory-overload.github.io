import React, { useState } from "react";
import "./reader.css";

const get_json = async () => await fetch("fic_html/" + window.sessionStorage.getItem("storyPath") + "/sitemap.json").then(resp => resp.json());
const raw_json = get_json();

let chapter_list = [];
const get_chaps = async () => await raw_json.then(
  resp => {
    const chapter_array = [];
    Object.entries(resp)[0][1].map(chap => chapter_array.push(chap['section']['path']));
    chapter_list = chapter_list.concat(chapter_array);
  }
)

const updateSessionStorage = (story) => { window.sessionStorage.setItem("storyPath", story) }

await get_chaps();
let currentChapter = 0;

function Reader({ story }) {
  updateSessionStorage(story);

  const [isNotFirstChapter, setPreviousButtonVis] = useState(false);
  const [isNotLastChapter, setNextButtonVis] = useState(true);

  function change_chapter(new_chapter_number) {
    if (new_chapter_number < 0 || new_chapter_number > (chapter_list.length - 1)) {
      console.log("Trying to access impossible chapter. Quitting early.", new_chapter_number)
      return
    }
    currentChapter = new_chapter_number
    document.getElementById("reader-iframe").src = "fic_html/" + story + "/" + chapter_list[currentChapter];
    setNextButtonVis(currentChapter < (chapter_list.length - 1));
    setPreviousButtonVis(currentChapter !== 0);
  }

  return (
    <div>
      <div id="reader">
        <iframe id="reader-iframe" title="reader-iframe" innerHTML={<p></p>} src={"fic_html/" + story + "/" + chapter_list[0]}></iframe>
      </div>
      <p>
        {(isNotFirstChapter) && <button onClick={() => { change_chapter(currentChapter - 1) }}>Previous Chapter</button>}
        {(isNotLastChapter) && <button onClick={() => { change_chapter(currentChapter + 1) }}>Next Chapter</button>}
      </p>
      <p>
        Jump to Chapter...<br />
        {[...Array(chapter_list.length).keys()].map(num => <span>
          <button key={num} onClick={() => { change_chapter(num) }}>{num + 1}</button>&nbsp;
        </span>)}
      </p>
    </div>
  )
}

export default Reader;