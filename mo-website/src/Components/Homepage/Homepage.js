import FanficTable from "./FanficTable";
import './Homepage.css';
function Homepage() {
  return (
    <div>
      <h1>MemoryOverload</h1>
      <h2>(or Kierin. That works, too.)</h2>
      <h3>About Me</h3>
      <h3>Fanfics I've Written</h3>
      <FanficTable />
    </div>
  )
}

export default Homepage;