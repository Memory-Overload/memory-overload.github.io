import React from "react";
import { Link } from "react-router-dom";

async function get_data(url) {
  const resp = await fetch(url);
  return resp.json();
}

function urlifyTitle(title) {
  return title.replaceAll(/\W/g, "");
}

const fic_data = await get_data('fanfic_data.json');

const ao3_url = "https://archiveofourown.org/works/";

const FanficTable = () => {
  const fic_list = Object.entries(fic_data)
  const slash = "/"
  return (
    <div>
      <hr />
      {fic_list.map(fic =>
        <div key={fic[1].id}>
          <h4>{fic[1].title}</h4>
          <p>Summary: {fic[1].summary}</p>
          <p>Characters: {fic[1].characters}</p>
          {/* If the final chapter count isn't known, the 'expected_chapters' field doesn't exist */}
          {/* That means we can abuse a ternary operator like so */}
          <p>Chapter(s): {fic[1].nchapters}/{fic[1].expected_chapters ? fic[1].expected_chapters : "?"}</p>
          <p><a href={ao3_url + fic[1].id}>Read it on AO3</a></p>
          <p><Link to={slash + urlifyTitle(fic[1].title)}>Read it here</Link></p>
          <hr />
        </div>
      )}
    </div>
  )
}

export default FanficTable;