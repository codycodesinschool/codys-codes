let sites = ["Emoji", "shake", "story","introduction","imageMap","button","matrix","DreamJob","WeekendWednesdayEssay","light"];
let linkdiv = document.querySelector('.links');
for(let site of sites) {
  el = document.createElement('a')
  el.href = "https://codycodesinschool.github.io/codys-codes/sites/" + site
  el.innerHTML = site
  linkdiv.appendChild(el);
  br = document.createElement('br');
  linkdiv.appendChild(br)
}
