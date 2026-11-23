const ME = "H. Chakraa";
const COAUTHOR_LINKS = {
  "D. Deplano": "https://diegodeplano.github.io/",
};

const PUBS = [
  { id: "J4", type: "journal", year: 2026, selected: true,
    title: "Task Allocation of UAVs for Monitoring Missions via Hardware-in-the-Loop Simulation and Experimental Validation",
    authors: ["H. Chakraa", "F. Guérin", "E. Leclercq", "D. Lefebvre"],
    venue: "IEEE Robotics and Automation Practice", short: "IEEE RA-P", full: "IEEE Robotics and Automation Practice",
    github: "", video: "",
    url: "https://ieeexplore.ieee.org/document/11753960", arxiv: "https://arxiv.org/abs/2506.20626",
    bib: `@article{chakraa2026task,
  author  = {Chakraa, Hamza and Gu{\\'e}rin, Fran{\\c{c}}ois and Leclercq, Edouard and Lefebvre, Dimitri},
  title   = {Task Allocation of {UAVs} for Monitoring Missions via Hardware-in-the-Loop Simulation and Experimental Validation},
  journal = {IEEE Robotics and Automation Practice},
  year    = {2026}
}` },
  { id: "C6", type: "conference", year: 2026,
    title: "A Multi-View Multi-LiDAR Synchronised Setup for Smoke Plume Data Acquisition: A Simulated Drone Swarm Observation Case Study",
    authors: ["G. Pérez", "L. Denis", "H. Chakraa", "M. Bronz"],
    venue: "17th International Micro Air Vehicle Conference and Competition (IMAV), Strasbourg, France", short: "IMAV",
    url: "", github: "",
    bib: `@inproceedings{perez2026lidar,
  author    = {P{\\'e}rez, G. and Denis, L. and Chakraa, Hamza and Bronz, Murat},
  title     = {A Multi-View Multi-{LiDAR} Synchronised Setup for Smoke Plume Data Acquisition: A Simulated Drone Swarm Observation Case Study},
  booktitle = {17th International Micro Air Vehicle Conference and Competition (IMAV)},
  year      = {2026}
}` },
  { id: "C5", type: "conference", year: 2026, selected: true,
    title: "Decentralized PSO-Based Guidance for Multi-UAV Wildfire Monitoring and Frontier Tracking",
    authors: ["H. Chakraa", "M. Feurgard", "M. Bronz"],
    venue: "17th International Micro Air Vehicle Conference (IMAV), Strasbourg, France", short: "IMAV", full: "International Micro Air Vehicle Conference (IMAV)",
    github: "", video: "",
    url: "https://www.imavs.org/pdf/imav.2026.18",
    bib: `@inproceedings{chakraa2026pso,
  author    = {Chakraa, Hamza and Feurgard, M. and Bronz, Murat},
  title     = {Decentralized {PSO}-Based Guidance for Multi-{UAV} Wildfire Monitoring and Frontier Tracking},
  booktitle = {17th International Micro Air Vehicle Conference and Competition (IMAV)},
  year      = {2026}
}` },
  { id: "C4", type: "conference", year: 2026,
    title: "A Preliminary Study on Smoke Plume Observation With Drone Swarms",
    authors: ["H. Chakraa", "M. Verdoucq", "J. Machado", "M. Bronz"],
    venue: "International Conference on Unmanned Aircraft Systems (ICUAS), Corfu, Greece", short: "ICUAS",
    url: "", video: "",
    bib: `@inproceedings{chakraa2026smoke,
  author    = {Chakraa, Hamza and Verdoucq, Matthieu and Machado, Jo{\\~a}o and Bronz, Murat},
  title     = {A Preliminary Study on Smoke Plume Observation With Drone Swarms},
  booktitle = {International Conference on Unmanned Aircraft Systems (ICUAS)},
  year      = {2026}
}` },
  { id: "C3", type: "conference", year: 2026,
    title: "Accelerating Wildfire Spread Prediction for Guidance: A ConvLSTM Deep Learning Approach",
    authors: ["H. Chakraa", "M. Bronz"],
    venue: "AIAA SciTech Forum, Orlando, USA", short: "AIAA SciTech",
    url: "", github: "", video: "",
    bib: `@inproceedings{chakraa2026convlstm,
  author    = {Chakraa, Hamza and Bronz, Murat},
  title     = {Accelerating Wildfire Spread Prediction for Guidance: A {ConvLSTM} Deep Learning Approach},
  booktitle = {AIAA SciTech Forum},
  year      = {2026}
}` },
  { id: "C2", type: "conference", year: 2025, selected: true,
    title: "A Gossip-Based Approach for Measurement Task Allocation and Routing in Multi-Robot Systems with Heterogeneous Sensing",
    authors: ["H. Chakraa", "D. Deplano", "C. Seatzu", "D. Lefebvre", "M. Franceschelli"],
    venue: "21st IEEE International Conference on Automation Science and Engineering (CASE), Los Angeles, USA, pp. 2895–2900", short: "IEEE CASE", full: "IEEE International Conference on Automation Science and Engineering (CASE)",
    url: "https://doi.org/10.1109/CASE58245.2025.11164022", github: "https://github.com/chakraah/gossip-planner",
    bib: `@inproceedings{chakraa2025gossip,
  author    = {Chakraa, Hamza and Deplano, Diego and Seatzu, Carla and Lefebvre, Dimitri and Franceschelli, Mauro},
  title     = {A Gossip-Based Approach for Measurement Task Allocation and Routing in Multi-Robot Systems with Heterogeneous Sensing},
  booktitle = {IEEE International Conference on Automation Science and Engineering (CASE)},
  pages     = {2895--2900},
  year      = {2025},
  doi       = {10.1109/CASE58245.2025.11164022}
}` },
  { id: "J3", type: "journal", year: 2025,
    title: "Integrating Collision Avoidance Strategies into Multi-Robot Task Allocation for Inspection",
    authors: ["H. Chakraa", "E. Leclercq", "F. Guérin", "D. Lefebvre"],
    venue: "Transactions of the Institute of Measurement and Control, 47(7):1466–1477", short: "Trans. Inst. Meas. Control",
    url: "",
    bib: `@article{chakraa2025collision,
  author  = {Chakraa, Hamza and Leclercq, Edouard and Gu{\\'e}rin, Fran{\\c{c}}ois and Lefebvre, Dimitri},
  title   = {Integrating Collision Avoidance Strategies into Multi-Robot Task Allocation for Inspection},
  journal = {Transactions of the Institute of Measurement and Control},
  volume  = {47}, number = {7}, pages = {1466--1477},
  year    = {2025}
}` },
  { id: "T1", type: "thesis", year: 2024,
    title: "Optimization Techniques for Monitoring a High-Risk Industrial Area by a Team of Autonomous Mobile Robots",
    authors: ["H. Chakraa"],
    venue: "PhD thesis, Normandie Université (European label)", short: "PhD thesis",
    url: "",
    bib: `@phdthesis{chakraa2024thesis,
  author = {Chakraa, Hamza},
  title  = {Optimization Techniques for Monitoring a High-Risk Industrial Area by a Team of Autonomous Mobile Robots},
  school = {Normandie Universit{\\'e}},
  year   = {2024}
}` },
  { id: "J2", type: "journal", year: 2023, selected: true,
    title: "Optimization Techniques for Multi-Robot Task Allocation Problems: Review on the State-of-the-Art",
    authors: ["H. Chakraa", "F. Guérin", "E. Leclercq", "D. Lefebvre"],
    venue: "Robotics and Autonomous Systems, 168:104492", short: "Robot. Auton. Syst.", full: "Robotics and Autonomous Systems",
    url: "https://doi.org/10.1016/j.robot.2023.104492",
    bib: `@article{chakraa2023review,
  author  = {Chakraa, Hamza and Gu{\\'e}rin, Fran{\\c{c}}ois and Leclercq, Edouard and Lefebvre, Dimitri},
  title   = {Optimization Techniques for Multi-Robot Task Allocation Problems: Review on the State-of-the-Art},
  journal = {Robotics and Autonomous Systems},
  volume  = {168}, pages = {104492},
  year    = {2023},
  doi     = {10.1016/j.robot.2023.104492}
}` },
  { id: "J1", type: "journal", year: 2023,
    title: "A Centralized Task Allocation Algorithm for a Multi-Robot Inspection Mission With Sensing Specifications",
    authors: ["H. Chakraa", "E. Leclercq", "F. Guérin", "D. Lefebvre"],
    venue: "IEEE Access, 11:99935–99949", short: "IEEE Access",
    url: "https://ieeexplore.ieee.org/document/10250421", github: "",
    bib: `@article{chakraa2023centralized,
  author  = {Chakraa, Hamza and Leclercq, Edouard and Gu{\\'e}rin, Fran{\\c{c}}ois and Lefebvre, Dimitri},
  title   = {A Centralized Task Allocation Algorithm for a Multi-Robot Inspection Mission With Sensing Specifications},
  journal = {IEEE Access},
  volume  = {11}, pages = {99935--99949},
  year    = {2023}
}` },
  { id: "C1", type: "conference", year: 2023,
    title: "A Multi-Robot Mission Planner by Means of Beam Search Approach and 2-Opt Local Search",
    authors: ["H. Chakraa", "E. Leclercq", "F. Guérin", "D. Lefebvre"],
    venue: "9th International Conference on Control, Decision and Information Technologies (CoDIT)", short: "CoDIT",
    url: "https://doi.org/10.1109/CODIT58514.2023.10284492",
    bib: `@inproceedings{chakraa2023beam,
  author    = {Chakraa, Hamza and Leclercq, Edouard and Gu{\\'e}rin, Fran{\\c{c}}ois and Lefebvre, Dimitri},
  title     = {A Multi-Robot Mission Planner by Means of Beam Search Approach and 2-Opt Local Search},
  booktitle = {International Conference on Control, Decision and Information Technologies (CoDIT)},
  year      = {2023}
}` },
];

const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const authorsHTML = a => a.map(n =>
  n === ME ? `<span class="me">${n}</span>`
  : COAUTHOR_LINKS[n] ? `<a class="coauthor" href="${COAUTHOR_LINKS[n]}" target="_blank" rel="noopener">${n}</a>`
  : n).join(", ");
const mainLink = p => p.url || p.arxiv || null;

const link = (u, label) => u ? `<a href="${u}" target="_blank" rel="noopener">${label}</a>` : `<a href="#" onclick="return false" class="todo">${label}</a>`;
function actions(p) {
  let h = `<button type="button" class="bib-btn" aria-expanded="false">BibTeX</button>`;
  if (p.url !== undefined) h += link(p.url, "Manuscript");
  if (p.arxiv !== undefined) h += link(p.arxiv, "arXiv");
  if (p.github !== undefined) h += link(p.github, "GitHub");
  if (p.video !== undefined) h += link(p.video, "Video");
  return `<div class="actions">${h}</div>`;
}
function titleHTML(p) {
  const l = mainLink(p);
  return l ? `<a href="${l}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title);
}

function renderSelected(el) {
  el.innerHTML = PUBS.filter(p => p.selected).map(p => `
    <article class="sel t-${p.type}" data-id="${p.id}">
      <a class="page" href="${mainLink(p) || "research.html#" + p.id}" ${mainLink(p) ? 'target="_blank" rel="noopener"' : ""} aria-label="${esc(p.title)}">
        <img src="images/pubs/fig-${p.id}.jpg" alt="" loading="lazy" onerror="if(!this.dataset.f){this.dataset.f=1;this.closest('.sel').classList.add('is-page');this.src='images/pubs/${p.id}.png'}else{this.remove()}">
        <div class="mock" aria-hidden="true">
          <p class="m-title">${esc(p.title)}</p>
          <p class="m-auth">${p.authors.join(", ")}</p>
          <div class="m-cols"><i></i><i></i></div>
        </div>
      </a>
      <div>
        <p class="badge">${esc(p.full || p.short)}, ${p.year}</p>
        <h3>${titleHTML(p)}</h3>
        <p class="authors">${authorsHTML(p.authors)}</p>
        ${actions(p)}
        <pre class="bib" hidden>${esc(p.bib)}</pre>
      </div>
    </article>`).join("");
}

const TYPE_LABEL = { journal: "Journal", conference: "Conference", thesis: "Thesis" };
function renderAll(el) {
  const input = document.getElementById("pub-search");
  const draw = () => {
    const q = (input ? input.value : "").trim().toLowerCase();
    const items = PUBS.filter(p => !q || [p.title, p.venue, p.authors.join(" ")].join(" ").toLowerCase().includes(q));
    if (!items.length) { el.innerHTML = `<p class="empty">No papers match your search.</p>`; return; }
    const years = [...new Set(items.map(p => p.year))].sort((a, b) => b - a);
    el.innerHTML = years.map(y => `<div class="pub-year"><h3>${y}</h3><ol class="pub-list">` + items.filter(p => p.year === y).map(p => `
      <li id="${p.id}" data-id="${p.id}" class="t-${p.type}">
        <p class="pub-meta"><span class="pub-type">${TYPE_LABEL[p.type] || p.type}</span> ${esc(p.short || p.venue)}</p>
        <p class="t">${titleHTML(p)}</p>
        <p class="authors">${authorsHTML(p.authors)}</p>
        <p class="venue"><i>${esc(p.venue)}</i>, ${p.year}</p>
        ${actions(p)}
        <pre class="bib" hidden>${esc(p.bib)}</pre>
      </li>`).join("") + `</ol></div>`).join("");
  };
  draw();
  if (input) input.addEventListener("input", draw);
  if (location.hash) { const t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }
}

document.addEventListener("click", e => {
  const b = e.target.closest(".bib-btn");
  if (!b) return;
  const pre = b.closest("[data-id]").querySelector(".bib");
  const open = pre.hidden;
  pre.hidden = !open;
  b.setAttribute("aria-expanded", String(open));
  b.classList.toggle("on", open);
});

document.addEventListener("DOMContentLoaded", () => {
  const s = document.getElementById("selected"); if (s) renderSelected(s);
  const a = document.getElementById("all-pubs"); if (a) renderAll(a);
});
