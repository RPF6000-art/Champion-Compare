// Champion data (name -> value)
const champions = {
  "Aatrox":16,"Ahri":19,"Akali":18,"Akshan":18,"Alistar":12,"Ambessa":16,"Amumu":13,
  "Anivia":15,"Annie":14,"Aphelios":26,"Ashe":16,"Aurelion Sol":15,"Aurora":24,"Azir":24,
  "Bard":23,"Bel'veth":23,"Blitzcrank":21,"Brand":21,"Braum":25,"Briar":21,"Caitlyn":23,
  "Camille":16,"Cassiopeia":21,"Cho'gath":22,"Corki":21,"Darius":17,"Diana":17,"Dr. Mundo":18,
  "Draven":24,"Ekko":26,"Elise":16,"Evelynn":15,"Ezreal":21,"Fiddlesticks":16,"Fiora":17,
  "Fizz":19,"Galio":12,"Gangplank":21,"Garen":20,"Gnar":16,"Gragas":17,"Graves":10,"Gwen":23,
  "Hecarim":17,"Heimerdinger":20,"Hwei":13,"Illaoi":20,"Irelia":16,"Ivern":16,"Janna":16,
  "Jarvan IV":23,"Jax":19,"Jayce":24,"Jhin":12,"Jinx":16,"K'sante":20,"Kai'sa":20,"Kalista":22,
  "Karma":19,"Karthus":15,"Kassadin":15,"Katarina":18,"Kayle":13,"Kayn":17,"Kennen":24,
  "Kha'zix":14,"Kindred":19,"Kled":25,"Kog'maw":22,"Leblanc":12,"Lee Sin":14,"Leona":16,
  "Lillia":17,"Lissandra":13,"Lucian":12,"Lulu":17,"Lux":22,"Malphite":21,"Malzahar":23,
  "Maokai":18,"Master Yi":18,"Mel":21,"Milio":16,"Miss Fortune":17,"Mordekaiser":17,
  "Morgana":10,"Naafiri":28,"Nami":14,"Nasus":24,"Nautilus":23,"Neeko":21,"Nidalee":20,
  "Nilah":15,"Nocturne":21,"Nunu & Willump":20,"Olaf":13,"Orianna":21,"Ornn":27,"Pantheon":21,
  "Poppy":20,"Pyke":22,"Qiyana":23,"Quinn":15,"Rakan":11,"Rammus":14,"Rek'sai":17,"Rell":15,
  "Renata Glasc":17,"Renekton":24,"Rengar":16,"Riven":10,"Rumble":21,"Ryze":13,"Samira":15,
  "Sejuani":17,"Senna":12,"Seraphine":26,"Sett":8,"Shaco":16,"Shen":19,"Shyvana":15,"Singed":15,
  "Sion":21,"Sivir":19,"Skarner":24,"Smolder":19,"Sona":21,"Soraka":13,"Swain":24,"Sylas":14,
  "Syndra":18,"Tahm Kench":14,"Taliyah":15,"Talon":18,"Taric":21,"Teemo":15,"Thresh":16,
  "Tristana":17,"Trundle":14,"Tryndamere":18,"Twisted Fate":15,"Twitch":14,"Udyr":17,
  "Urgot":15,"Varus":24,"Vayne":16,"Veigar":23,"Vel'Koz":19,"Vex":12,"Vi":21,"Viego":15,
  "Viktor":24,"Vladimir":18,"Volibear":20,"Warwick":25,"Wukong":15,"Xayah":9,"Xerath":19,
  "Xin Zhao":24,"Yasuo":14,"Yone":15,"Yorick":12,"Yunara":18,"Yuumi":15,"Zac":17,"Zed":21,
  "Zeri":17,"Ziggs":22,"Zilean":16,"Zoe":22,"Zyra":18
};

// Fill the dropdowns sorted alphabetically
function populateSelects() {
  const names = Object.keys(champions).sort((a,b)=>a.localeCompare(b));
  const s1 = document.getElementById("champ1");
  const s2 = document.getElementById("champ2");

  names.forEach(name => {
    const o1 = document.createElement("option");
    o1.value = name;
    o1.text = name;
    s1.add(o1);

    const o2 = document.createElement("option");
    o2.value = name;
    o2.text = name;
    s2.add(o2);
  });

  // set sensible defaults
  s1.selectedIndex = 0;
  s2.selectedIndex = 1;
}

// Compare and show result
function compareChamps() {
  const c1 = document.getElementById("champ1").value;
  const c2 = document.getElementById("champ2").value;

  const v1 = champions[c1];
  const v2 = champions[c2];

  const resultEl = document.getElementById("result");
  if (v1 > v2) {
    resultEl.textContent = `${c1} (${v1}) is higher; ${c2} (${v2}) is lower.`;
  } else if (v1 < v2) {
    resultEl.textContent = `${c2} (${v2}) is higher; ${c1} (${v1}) is lower.`;
  } else {
    resultEl.textContent = `${c1} and ${c2} are equal (${v1}).`;
  }
}

// wire up
window.addEventListener("load", () => {
  populateSelects();
  document.getElementById("compareBtn").addEventListener("click", compareChamps);
});
