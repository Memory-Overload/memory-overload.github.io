import { Link } from "react-router-dom";

class Fanfic {
  constructor(url, name, description) {
    this.url = url;
    this.name = name;
    this.description = description;
  }
}

const fics = [
  new Fanfic("/TheGoodBasiliskLuzura", "The Good Basilisk Luzura", "Luz Noceda always knew she was different from most other kids. However, it was only when Luz went through a portal to the Demon Realm and discovered the Boiling Isles that she discovered how “different” she really was. (A Basilisk!Luz AU)"),
  new Fanfic("/ABoilingIslesYule", "A Boiling Isle's Yule", "The Holiday Season has come around on the Boiling Isles, and Luz is throwing a party to celebrate! However, more people may show up than she expected."),
  new Fanfic("/TheLifeoftheCostumeParty", "The Life of the (Costume) Party", "When Vee and Masha get invited to a costume party on Halloween night, Vee jumps at the chance to go out on the town in her basilisk form. Fortunately, everyone loves her “costume.”"),
  new Fanfic("/InvestigatorAmityandtheCaseoftheMissingMuffin", "Investigator Amity and the Case of the Missing Muffin", "Somebody stole Amity's muffin, and she intends to find out who."),
  new Fanfic("/TheNocedaClawthorneWhispersBunch", "The Noceda-Clawthorne-Whispers Bunch", "Hunter can grow wings and teleport. Gus can become a perfect copy of anyone he sees. Willow can control plants and command them to her will. Amity can become a living Abomination. Vee can make her skin as hard as steel or as flexible as rubber. King, the baby of the group, can destroy anything with his sonic scream. Luz? Well, she's just regular old Luz. Nothing special about her.Together, they are the Noceda-Clawthorne-Whispers Bunch, and they live with their parents Camila, Eda, and Raine, doing their best to look like a totally normal family.Good luck with that."),
  new Fanfic("/ASmileBrighterThanTheSun", "A Smile Brighter Than The Sun", "For Vee, it all started because of that smile. That Titan-damned smile.Or, Vee discovers she has a crush on Masha."),
  new Fanfic("/TheSecondReVeeal", "The Second Re-Vee-al", "On the one-year anniversary of Vee and Masha meeting (and Vee escaping to the human realm), the couple decides that it's finally time to let the rest of the Cabin Seven gang in on Vee's secret."),
  new Fanfic("/WhoCanItBeNow", "Who Can It Be Now?", "Jacob Hopkins is a very brave man and he is definitely not scared easily. Vee and Masha put this to the test by giving him a late-night visit."),
  new Fanfic("/TheMostNormalMilkshakeDateEver", "The Most Normal Milkshake Date Ever", "For Luz, the days of planning have all led up to this: the quintessential milkshake date with Amity. No monsters, no deadly duels, just her and her batata. The outfit, the venue, the food, it's all going to go perfectly according to plan.Hopefully.(FKA Lactase Pills and Unexpected Stills)"),
  new Fanfic("/TheIslesAccordingtoLuz", "The Isles According to Luz", "With Belos gone and the Isles at peace, Vee has finally worked up the courage to return to the Demon Realm. She won't be traveling alone, though, as Masha will be tagging along. Vee finally has the chance to show her partner where she came from. There's just one small issue: Vee knows pretty much nothing about living a normal life on the Isles. So, she enlists Luz to show both her and Masha the ins and outs of life on the BI.Except, this is Luz \"I died and came back to life\" Noceda we're talking about. She hasn't exactly had a normal life either.Titan help them all."),
  new Fanfic("/AnUncommonCaseoftheCommonMold", "An Uncommon Case of the Common Mold", "\"Vee was having a normal, pleasant day, relaxing in bed in her human form. That was, until she sneezed and her arm turned into that of a grizzly bear.\"Or, Vee catches the common mold and suddenly can't control her powers. Thankfully, Masha is there to save the day."),
  new Fanfic("/SoThatsWhatThoseColorsMean", "“So That's What Those Colors Mean!”", "June has rolled around, and now it is Pride Month! Except Vee has no idea what that is. Luckily, a certain enby is there to explain it for the basilisk."),
  new Fanfic("/MyTreasure", "My Treasure", "A short little fic about Masha teaching Vee some German, featuring Vee being a Sapphic Disaster™ and Masha trying to be cool but failing."),
  new Fanfic("/VeeAndMashaGoOnaTour", "Vee and Masha Go On a Tour (But Really It's a Date)", "Vee finally takes Masha up on their offer to give Vee a tour around Gravesfield. In the process, Vee meets Masha's grandpa, learns some German, kills a giraffe through the power of Uno, and may or may not have earned herself a partner."),
  new Fanfic("/ThroughGlassEyes", "Through Glass Eyes", "\"As the lights fell, Camila knew that a sacrifice had been made. She didn't know who it was for, but she knew who had done it.\"Or, the Luz death scene in Watching and Dreaming through the eyes of puppet!Camila."),
  new Fanfic("/TheHexsquadDiscoversTheInternet", "The Hexsquad Discovers The Internet", "Luz and Camila go grocery shopping and leave three witches, a basilisk, and a Grimwalker alone in the house with a computer. There is absolutely no way this can go wrong."),
  new Fanfic("/TheRealMeTheRealVee", "The Real Me. The Real Vee.", "\"Luz\" just got a call from Masha. They said they saw something weird when they were cleaning out the staff room at the Gravesfield Historical Society. Now Vee knows that the jig is up. Time to bite the bullet and reveal the truth."),
  new Fanfic("/Attempt37", "Attempt 37", "Attempt 37's hand shot from the dirt. It grasped for purchase, fruitlessly clawing at the dirt that entombed its body, yearning to break free, only to accept defeat and sink back down. I waited a few seconds. A muffled noise forced its way through the dirt. This one was a screamer. Of course it was."),
  new Fanfic("/Uncle", "Uncle", `“Useless piece of shit!” Uncle was mad again. Bailey peeked over the railing to see Uncle launch the remote at the TV, but he missed, the remote instead smashing against the wall. A bottle was in Uncle's left hand, half-empty, with more empty bottles scattered about on the floor. He'd been drinking again. Great.`),
]

function FanficTable() {
  return (
    <div>
      <hr />
      {fics.map((fic_info) =>
        <div>
          {console.log("<Route path=" + fic_info.url + "element={<" + fic_info.url + "/>} />")}
          <Link to={fic_info.url}>{fic_info.name}</Link> <br />
          <p class="ficSummary">{fic_info.description}</p>
          <hr />
        </div>
      )}
    </div>
  )
}

export default FanficTable;