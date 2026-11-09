// OctaviaVSTs: builds the program cards and the jump links.
(function () {
  "use strict";

  var GH = "https://github.com/CursedPrograms/";
  var PAGES = "https://cursedprograms.github.io/";

  var programs = [
    {
      id: "SafetyPin",
      name: "Safety Pin",
      image: "images/safetypin.png",
      text: "Electric violin distortion: a fat fuzz with an octave-down cello voice, sub bass, plate reverb, a violin tuner and MIDI learn.",
      kind: "VST3 + standalone",
      release: true
    },
    {
      id: "Fuzz14",
      name: "Fuzz14",
      image: "images/fuzz14.png",
      text: "A 2014 breadboard fuzz, simulated part by part: one MPSA13 and swappable clipping diodes that glow while they conduct.",
      kind: "VST3 + standalone",
      release: true
    },
    {
      id: "stringtuner",
      name: "stringtuner",
      image: "images/stringtuner.png",
      text: "A tuner for every string instrument, from the octobass to the violino piccolo, with needle, strobe and chromatic mode.",
      kind: "VST3 + standalone",
      release: true
    },
    {
      id: "Solderless",
      name: "Solderless",
      image: "images/solderless.png",
      text: "A virtual breadboard for pedal circuits: drop in parts, wire them up and play through the circuit as you build it.",
      kind: "In planning",
      release: false
    }
  ];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function button(label, href, cls) {
    var a = el("a", "btn" + (cls ? " " + cls : ""), label);
    a.href = href;
    return a;
  }

  var grid = document.getElementById("programs");
  var jump = document.getElementById("jump");

  programs.forEach(function (p) {
    var card = el("article", "card");
    card.id = p.id.toLowerCase();

    var shot = el("a", "shot");
    shot.href = PAGES + p.id + "/";
    var img = el("img");
    img.src = p.image;
    img.alt = p.name + " window";
    img.loading = "lazy";
    shot.appendChild(img);
    card.appendChild(shot);

    var body = el("div", "card-body");
    var head = el("div", "card-head");
    head.appendChild(el("h2", null, p.name));
    head.appendChild(el("span", "badge" + (p.release ? "" : " soon"), p.kind));
    body.appendChild(head);
    body.appendChild(el("p", null, p.text));

    var buttons = el("div", "buttons");
    if (p.release) {
      buttons.appendChild(button("Download", GH + p.id + "/releases/latest", "primary"));
    } else {
      var soon = el("span", "btn disabled", "Coming later");
      buttons.appendChild(soon);
    }
    buttons.appendChild(button("Page", PAGES + p.id + "/"));
    buttons.appendChild(button("GitHub", GH + p.id));
    body.appendChild(buttons);
    card.appendChild(body);
    grid.appendChild(card);

    var link = el("a", null, p.name);
    link.href = "#" + card.id;
    jump.appendChild(link);
  });
})();
