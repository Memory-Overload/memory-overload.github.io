import React, { useState } from "react";
import "./gbl.css";

window.sessionStorage.setItem("firstChapterPath", "gbl_chunked/1-prologue.html");
const firstChapterPath = window.sessionStorage.getItem("firstChapterPath");

const get_json = async () =>
  await fetch("gbl_chunked/sitemap.json").then(resp => resp.json());

let raw_json = get_json();
let chapters = raw_json.then(resp => Object.entries(resp)[1][1]);

let chapter_list = [];
const get_chaps = async () => await chapters.then(
  resp => {
    const chapter_array = [];
    resp.map(chap => chapter_array.push(chap));
    chapter_list = chapter_list.concat(chapter_array);
  }
)
await get_chaps()
let currentChapter = 0;

async function get_chapter_html(chapter_list) {
  console.log("Chapter", currentChapter, chapter_list[currentChapter]);
  const path = chapter_list[currentChapter]['section']['path'];
  return fetch('gbl_chunked/' + path)
    .then(resp => resp.text())
    .then(html => new DOMParser().parseFromString(html, "text/html"));
}

function Reader() {
  const [isNotFirstChapter, setPreviousButtonVis] = useState(false);
  const [isNotLastChapter, setNextButtonVis] = useState(true);

  async function next_chapter() {
    setNextButtonVis((currentChapter + 1) !== (chapter_list.length - 1));
    setPreviousButtonVis(true);
    currentChapter++;
    const chap_html = await get_chapter_html(chapter_list);
    console.log(chap_html)
    document.getElementById("reader").innerHTML = chap_html.body.innerHTML
  }

  async function previous_chapter() {
    setPreviousButtonVis(currentChapter - 1 !== 0)
    setNextButtonVis(true)
    currentChapter--;
    const chap_html = await get_chapter_html(chapter_list);
    console.log(chap_html)
    document.getElementById("reader").innerHTML = chap_html.body.innerHTML
  }

  return (
    <div>
      <div id="reader">
        <iframe title="reader-iframe" innerHTML={<p></p>} src={firstChapterPath}></iframe>
      </div>
      {(isNotLastChapter) && <button onClick={next_chapter}>Next Chapter</button>}
      {(isNotFirstChapter) && <button onClick={previous_chapter}>Previous Chapter</button>}
    </div>
  )
}

export default Reader;