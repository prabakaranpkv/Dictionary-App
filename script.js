//function for fetching Api
const data = () => {
  let words = document.getElementsByClassName("input")[0].value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
    .then((res) => res.json())
    .then((res) => getData(res))
    .catch(
      (err) =>
        alert(
          "!** No Definitions Found,Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead. "
        ) + console.log(err)
    );
};

//function for print the fetching data
const getData = (obj) => {
  let partSpeech = " ";
  let synonym = " ";
  let antonym = " ";
  let definat = " ";
  let examp = " ";
  //forloop for getting partspeech data
  for (let i in obj[0].meanings) {
    partSpeech += obj[0].meanings[i].partOfSpeech + ",";
  }
  //forloop for getting Synonyms data
  for (let i = 0; i < obj[0].meanings.length; i++) {
    for (let j = 0; j < obj[0].meanings[i].definitions.length; j++) {
      for (
        let k = 0;
        k < obj[0].meanings[i].definitions[j].synonyms.length;
        k++
      ) {
        synonym += obj[0].meanings[i].definitions[j].synonyms[k] + " | ";
      }
    }
  }
  //forloop for getting antonyms data
  for (let i = 0; i < obj[0].meanings.length; i++) {
    for (let j = 0; j < obj[0].meanings[i].definitions.length; j++) {
      for (
        let k = 0;
        k < obj[0].meanings[i].definitions[j].antonyms.length;
        k++
      ) {
        antonym += obj[0].meanings[i].definitions[j].antonyms[k] + " | ";
      }
    }
  }
  //forloop for getting difinitions data
  for (let i = 0; i < obj[0].meanings.length; i++) {
    for (let j = 0; j < obj[0].meanings[i].definitions.length; j++) {
      {
        definat += obj[0].meanings[i].definitions[j].definition + " <> ";
      }
    }
  }
  //forloop for getting example data
  for (let i = 0; i < obj[0].meanings.length; i++) {
    for (let j = 0; j < obj[0].meanings[i].definitions.length; j++) {
      {
        examp += obj[0].meanings[i].definitions[j].example + "<>";
      }
    }
  }
  //getting audio file
  const sour = document.createElement("source");
  sour.id = "sour";
  sour.setAttribute("src", obj[0].phonetics[0].audio);
  sour.setAttribute("type", "audio/mpeg");
  sound.append(sour);
  //function for playing audio
  function playAudio() {
    document.getElementById("sour").src = obj[0].phonetics[0].audio;
    document.getElementById("sound").load();
  }
  //reset the input value
  function clear() {
    document.getElementById("input").value = null;
  }
  clear();
  const butn = document.createElement("button");
  butn.id = "butn";
  butn.setAttribute("type", "button");
  butn.setAttribute("onclick", playAudio());

  document.getElementsByClassName("content").innerHTML = obj[0].word;
  enterWord.innerHTML = "<u>Word</u>" + " - " + obj[0].word + "<hr>";
  para1.innerHTML = "<u>Phonetic</u>" + " - " + obj[0].phonetic + "<hr>";
  para2.innerHTML = "<u>Part of Speech</u>" + " - " + partSpeech + "<hr>";
  para3.innerHTML = "<u>Origin of Word</u>" + " - " + obj[0].origin + "<hr>";
  para4.innerHTML = "<u>Synonyms</u>" + " - " + synonym + "<hr>";
  para5.innerHTML = "<u>Antonyms</u>" + " - " + antonym + "<hr>";
  para6.innerHTML = "<u>definitions</u>" + " - " + definat + "<hr>";
  para7.innerHTML = "<u>Examples</u>" + " - " + examp + "<hr>";
};

//Creating Elements

const headDiv = document.createElement("div");
headDiv.className = "container";
headDiv.id = "container";
document.body.appendChild(headDiv);

const header = document.createElement("h1");
header.className = "header";
header.id = "header";
header.innerHTML = "Dictionary";
headDiv.appendChild(header);

const input = document.createElement("input");
input.className = "input";
input.id = "input";
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter a Word");
headDiv.appendChild(input);

const btn = document.createElement("button");
btn.className = "btn";
btn.id = "btn";
btn.innerHTML = "Search";
btn.setAttribute("type", "button");
btn.setAttribute("onclick", "data()");
headDiv.appendChild(btn);

const content = document.createElement("div");
content.className = "content";
headDiv.appendChild(content);

const sound = document.createElement("audio");
sound.className = "sound";
sound.id = "sound";
sound.setAttribute("controls", "controls");
content.appendChild(sound);

const enterWord = document.createElement("p");
enterWord.classList = "enterWord";
enterWord.id = "enterWord";
content.appendChild(enterWord);

const para1 = document.createElement("p");
para1.className = "para1";
para1.id = "para1";
content.appendChild(para1);

const para2 = document.createElement("p");
para2.className = "para2";
para2.id = "para2";
content.appendChild(para2);

const para3 = document.createElement("p");
para3.className = "para3";
para3.id = "para3";
content.appendChild(para3);

const para4 = document.createElement("p");
para4.className = "para4";
para4.id = "para4";
content.appendChild(para4);

const para5 = document.createElement("p");
para5.className = "para5";
para5.id = "para5";
content.appendChild(para5);

const para6 = document.createElement("p");
para6.className = "para6";
para6.id = "para6";
content.appendChild(para6);

const para7 = document.createElement("p");
para7.className = "para7";
para7.id = "para7";
content.appendChild(para7);
