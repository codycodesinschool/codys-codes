let emoji = [];
let dec = [];
let hex = [];
let decPre = "#";
let hexPre = "#x";
let suffix = ";";



fetch('./emoji.txt').then(d => {
    d.text().then(text => {
        readTo(text)
        render()
        document.querySelector("p").remove()

    })
})

function readTo(txt){
    let lines = txt.split("\n");
    for(let line of lines){
        let items = line.split(" ")
        console.log(items)
        items = items[0].split("\t")
        console.log(100,items)
        console.log(items[0], decPre + items[1] + suffix, hexPre + items[2] + suffix)
        let cEmoji = items[0];
        let cDec = decPre + items[1] + suffix;
        let cHex = hexPre + items[2] + suffix;
        emoji.push(cEmoji)
        dec.push(cDec)
        hex.push(cHex)
    }
}

function render(){
    console.log("Rendering")
    let table = document.querySelector("table")
    console.log(table)
    for(let i = 0; i < emoji.length; i++) {
        let e = emoji[i];
        let d = dec[i];
        let h = hex[i];
        let row = document.createElement("tr")
        let edata = document.createElement("td")
        let ddata = document.createElement("td")
        let hdata = document.createElement("td")
        edata.innerHTML = e
        ddata.innerHTML = "&amp;" + d
        hdata.innerHTML = "&amp;" + h
        table.appendChild(row);
        row.appendChild(edata);
        row.appendChild(ddata);
        row.appendChild(hdata);

    }
}
