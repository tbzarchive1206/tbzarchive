const files = [
  ["01", "Fancafe", "Community posts and letters", "https://tbzarchive1206.github.io/fancafe"],
  ["02", "Livestreams", "Live broadcasts", "https://tbzarchive1206.github.io/livestream-archive/"],
  ["03", "Naver Post", "Official editorials", "https://tbzarchive1206.github.io/naverpost"],
  ["04", "TikToks", "Short-form video", "https://tbzarchive1206.github.io/tiktok-youtube/"],
  ["05", "Scans", "Print and photobooks", "https://tbzarchive1206.github.io/scans/"],
  ["06", "The B Japan", "Japanese fanclub", "https://tbzarchive1206.github.io/thebjapan/"],
  ["07", "Bubble Media", "Member updates", "https://tbzarchive1206.github.io/bubble-archive/"],
  ["08", "Fromm Media", "Member updates", "https://tbzarchive1206.github.io/fromm-media/"],
  ["09", "Personal Instagrams", "Individual accounts", "https://tbzarchive1206.github.io/insta-post-archive/"],
  ["10", "Instagram Stories", "Ephemeral moments", "https://tbzarchive1206.github.io/insta-stories-archive/"],
  ["11", "Concerts & Fancons", "Live stage archive", "https://tbzarchive1206.github.io/concerts/"],
  ["12", "Radio", "Audio appearances", "https://tbzarchive1206.github.io/radio-archive/"],
  ["13", "Festival Performances", "Open-air stages", "https://tbzarchive1206.github.io/festivals-performances"],
  ["14", "Variety Programs", "Shows and appearances", "https://tbzarchive1206.github.io/variety-programs"],
  ["15", "Weibo Media", "Official Weibo media", "https://tbzarchive1206.github.io/weibo/"],
  ["16", "Xiaohongshu Media", "Xiaohongshu posts", "https://tbzarchive1206.github.io/xiaohongshu/"],
  ["17", "Insta Channels", "Instagram channel archive", "https://tbzarchive1206.github.io/insta-channels/"],
  ["18", "Events", "Event media archive", "https://tbzarchive1206.github.io/events/"],
  ["19", "TBZ x Brands", "Brand collaborations", "https://tbzarchive1206.github.io/tbz-brands/"],
  ["20", "Solo Activities Media", "Solo activities archive", "https://tbzarchive1206.github.io/solo-activities/"],
  ["21", "Music", "Music archive", "https://tbzarchive1206.github.io/music-archive/"]
];

const grid = document.querySelector("#folders");
const empty = document.querySelector("#empty");
const search = document.querySelector("#search");

function createFolder([number, title, description, href]) {
  const folder = document.createElement(href ? "a" : "div");
  folder.className = `folder${href ? "" : " pending"}`;

  if (href) {
    folder.href = href;
    folder.setAttribute("aria-label", `Open ${title}`);
  } else {
    folder.setAttribute("aria-disabled", "true");
  }

  const tab = document.createElement("span");
  tab.className = "folder-tab";
  tab.textContent = `FILE ${number}`;

  const arrow = document.createElement("span");
  arrow.className = "folder-arrow";
  arrow.textContent = href ? "→" : "—";

  const body = document.createElement("div");
  body.className = "folder-body";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const label = document.createElement("small");
  label.textContent = `THE BOYZ ARCHIVE / ${number}`;
  body.append(heading, label);
  folder.append(tab, arrow, body);

  return folder;
}

function render(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matchingFiles = files.filter(([, title, description]) =>
    `${title} ${description}`.toLocaleLowerCase().includes(normalizedQuery)
  );

  grid.replaceChildren(...matchingFiles.map(createFolder));
  empty.hidden = matchingFiles.length > 0;
}

render();
search.addEventListener("input", (event) => render(event.target.value));
