const photoCount = 50;

const originalFiles = [
  "photo-01.jpg",
  "photo-02.jpg",
  "photo-03.jpg",
  "photo-04.jpg",
  "photo-05.png",
  "photo-06.jpg",
  "photo-07.jpg",
  "photo-08.jpg",
  "photo-09.jpg",
  "photo-10.jpg",
  "photo-11.jpg",
  "photo-12.jpg",
  "photo-13.jpg",
  "photo-14.jpg",
  "photo-15.jpg",
  "photo-16.jpg",
  "photo-17.jpg",
  "photo-18.jpg",
  "photo-19.jpg",
  "photo-20.jpg",
  "photo-21.jpg",
  "photo-22.jpg",
  "photo-23.jpg",
  "photo-24.jpg",
  "photo-25.jpg",
  "photo-26.jpg",
  "photo-27.jpg",
  "photo-28.jpg",
  "photo-29.jpg",
  "photo-30.jpg",
  "photo-31.jpg",
  "photo-32.jpg",
  "photo-33.jpg",
  "photo-34.jpg",
  "photo-35.jpg",
  "photo-36.jpg",
  "photo-37.jpg",
  "photo-38.jpg",
  "photo-39.jpg",
  "photo-40.jpg",
  "photo-41.jpg",
  "photo-42.jpg",
  "photo-43.jpg",
  "photo-44.jpg",
  "photo-45.jpg",
  "photo-46.jpg",
  "photo-47.jpg",
  "photo-48.jpg",
  "photo-49.jpg",
  "photo-50.jpg",
];

const photoSizes = [
  [5152, 7728],
  [7457, 4971],
  [4973, 7459],
  [5351, 3567],
  [1280, 1920],
  [5152, 7728],
  [3567, 5351],
  [5152, 7728],
  [4923, 7384],
  [5152, 7728],
  [4968, 7452],
  [5152, 7728],
  [5010, 7515],
  [5152, 7728],
  [4935, 7403],
  [4955, 7433],
  [3574, 5361],
  [4903, 7355],
  [4958, 7437],
  [3567, 5351],
  [5056, 7584],
  [5013, 7519],
  [1280, 1920],
  [4955, 7432],
  [7511, 5008],
  [5152, 7728],
  [4947, 7421],
  [4929, 7394],
  [5152, 7728],
  [5152, 7728],
  [5152, 7728],
  [5057, 7586],
  [5056, 7584],
  [5152, 7728],
  [4912, 7368],
  [5015, 7522],
  [4957, 7436],
  [5011, 7516],
  [5152, 7728],
  [5013, 7520],
  [4920, 7381],
  [5152, 7728],
  [1280, 1650],
  [1280, 1515],
  [5152, 7728],
  [5152, 7728],
  [1280, 1660],
  [5152, 7728],
  [5014, 7522],
  [5152, 7728],
];

const captions = [
  "宫廷里的白纱独照",
  "并肩坐在花冠与礼服之间",
  "靠近的一刻",
  "烛光旁的吻手礼",
  "夜色车窗",
  "草莓蛋糕前的庆祝",
  "逆光里的亲吻",
  "长裙与古典厅堂",
  "回身看向彼此",
  "城市灯光下举杯",
  "棚拍白纱合影",
  "雨夜车旁",
  "手捧花的合影",
  "钢琴旁的白纱",
  "红裙与团扇",
  "金色厅堂里的安静",
  "墨镜与红墙",
  "窗边的红色肖像",
  "旋转的裙摆",
  "红墙前的礼服独照",
  "新郎肖像",
  "车窗里的夜",
  "蛋糕前的笑",
  "城市夜色对望",
  "门廊里的侧影",
  "草莓蛋糕大合影",
  "棚拍对视",
  "捧花与白纱",
  "举杯庆祝",
  "长拖尾背影",
  "夜晚邀舞",
  "门厅长裙",
  "轻松的棚拍合影",
  "夜色与蛋糕",
  "花冠与礼服",
  "钢琴旁的新郎",
  "庭院红裙",
  "窗边并肩",
  "纱与门厅",
  "金色厅堂合影",
  "团扇与凝望",
  "车旁蛋糕",
  "夜色举杯",
  "光里的庆祝",
  "举杯的笑意",
  "园林里的拥抱",
  "夜色抛花",
  "钢琴与长裙",
  "棚拍挥手",
  "证书与庆祝",
];

const chapters = [
  {
    id: "palace",
    no: "01",
    title: "宫廷白纱",
    kicker: "Palace Bridal",
    description: "古典厅堂、钢琴、长拖尾和柔软白纱，适合用慢节奏的大图来展示，让裙摆和空间成为主角。",
    layout: "palace",
    photos: [1, 8, 14, 30, 32, 39, 48, 2, 3, 9, 11, 13, 16, 19, 25, 27, 28, 35, 36, 40, 49],
  },
  {
    id: "night",
    no: "02",
    title: "夜色庆祝",
    kicker: "Night Celebration",
    description: "黑礼服、车、城市灯光和草莓蛋糕，自带电影感。这里用更紧凑的暗场拼贴，像一段夜晚派对片段。",
    layout: "night",
    photos: [5, 6, 10, 12, 22, 23, 24, 26, 29, 31, 34, 42, 43, 44, 45, 47, 50],
  },
  {
    id: "red",
    no: "03",
    title: "红色庭院",
    kicker: "Red Garden",
    description: "红裙、团扇、园林和窗影更适合留白。版式会拉开照片间距，让红色成为章节里的视觉锚点。",
    layout: "red",
    photos: [15, 18, 37, 38, 41, 46],
  },
  {
    id: "editorial",
    no: "04",
    title: "时装亲密",
    kicker: "Editorial Portraits",
    description: "烛光、红墙、墨镜和近距离拥抱更像杂志大片，用几张强记忆点照片收尾。",
    layout: "editorial",
    photos: [4, 7, 17, 20, 21, 33],
  },
];

const gallery = document.querySelector("#galleryGrid");
const photoIndex = document.querySelector("#photoIndex");
const viewer = document.querySelector("#viewer");
const viewerImage = document.querySelector("#viewerImage");
const viewerPlaceholder = document.querySelector("#viewerPlaceholder");
const viewerCaption = document.querySelector("#viewerCaption");
const viewerCounter = document.querySelector("#viewerCounter");
const closeButton = document.querySelector(".viewer-close");
const prevButton = document.querySelector(".viewer-prev");
const nextButton = document.querySelector(".viewer-next");
const cursorLight = document.querySelector(".cursor-light");
const progressBar = document.querySelector(".scroll-progress span");

const photos = Array.from({ length: photoCount }, (_, index) => ({
  caption: captions[index] || `婚照 ${index + 1}`,
  fullSrc: fileName(index, "full"),
  height: photoSizes[index][1],
  index,
  loaded: true,
  thumbSrc: fileName(index, "thumbs"),
  width: photoSizes[index][0],
}));

let activeIndex = 0;

function fileName(index, size) {
  return `./images/${size}/photo-${String(index + 1).padStart(2, "0")}.jpg`;
}

function photoNumber(index) {
  return String(index + 1).padStart(2, "0");
}

function makeIndexButton(index) {
  const button = document.createElement("button");
  button.className = "index-button reveal";
  button.type = "button";
  button.textContent = photoNumber(index);
  button.addEventListener("click", () => {
    document.querySelector(`[data-card-index="${index}"]`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
  return button;
}

function layoutClass(layout, position) {
  if (layout === "palace") {
    if (position === 0 || position === 5) return "feature";
    if ([2, 6, 12, 18].includes(position)) return "wide";
    if ([3, 8, 14].includes(position)) return "tall";
  }

  if (layout === "night") {
    if ([0, 4, 9, 13].includes(position)) return "wide";
    if ([2, 7, 11].includes(position)) return "tall";
  }

  if (layout === "red") {
    if (position === 0 || position === 5) return "feature";
    if (position === 2) return "wide";
  }

  if (layout === "editorial") {
    if (position === 0 || position === 3) return "wide";
    if (position === 2) return "tall";
  }

  return "standard";
}

function makeCaption(index) {
  const caption = document.createElement("span");
  caption.className = "photo-caption";
  caption.innerHTML = `<span>${photoNumber(index)}</span><span>${photos[index].caption}</span>`;
  return caption;
}

function makePhotoCard(index, layout, position) {
  const photo = photos[index];
  const button = document.createElement("button");
  const orientation = photo.width > photo.height ? "landscape" : "portrait";
  button.className = `photo-card ${layoutClass(layout, position)} ${orientation}`;
  button.type = "button";
  button.dataset.cardIndex = String(index);
  button.style.aspectRatio = `${photo.width} / ${photo.height}`;
  button.style.transitionDelay = `${Math.min(position % 10, 7) * 34}ms`;

  const image = new Image();
  image.alt = photo.caption;
  image.src = photo.thumbSrc;
  image.loading = position < 3 ? "eager" : "lazy";
  image.decoding = "async";

  image.addEventListener("load", () => {
    photo.loaded = true;
  });

  image.addEventListener("error", () => {
    photo.loaded = false;
    button.classList.add("is-missing");
  });

  button.append(image, makeCaption(index));
  button.addEventListener("click", () => openViewer(index));
  return button;
}

function makeChapter(chapter) {
  const section = document.createElement("section");
  section.className = `photo-chapter chapter-${chapter.layout}`;
  section.id = `chapter-${chapter.id}`;
  section.innerHTML = `
    <header class="chapter-heading reveal">
      <span>${chapter.no}</span>
      <p class="eyebrow">${chapter.kicker}</p>
      <h3>${chapter.title}</h3>
      <p>${chapter.description}</p>
    </header>
  `;

  const grid = document.createElement("div");
  grid.className = `section-gallery layout-${chapter.layout}`;
  chapter.photos.forEach((number, position) => {
    grid.append(makePhotoCard(number - 1, chapter.layout, position));
  });
  section.append(grid);
  return section;
}

function openViewer(index) {
  activeIndex = index;
  updateViewer();
  document.body.classList.add("is-viewer-open");

  if (typeof viewer.showModal === "function") {
    viewer.showModal();
  } else {
    viewer.setAttribute("open", "");
  }
}

function updateViewer() {
  const photo = photos[activeIndex];
  viewer.classList.toggle("has-photo", photo.loaded);
  viewerCounter.textContent = `${photoNumber(activeIndex)} / ${photoCount}`;
  viewerCaption.textContent = photo.caption;

  if (photo.loaded) {
    viewerImage.src = photo.fullSrc;
    viewerImage.alt = photo.caption;
  } else {
    viewerImage.removeAttribute("src");
    viewerImage.alt = "";
    viewerPlaceholder.innerHTML = `
      <div>
        <strong>${photoNumber(activeIndex)}</strong>
        <small>Photo Pending</small>
      </div>
    `;
  }
}

function stepViewer(direction) {
  activeIndex = (activeIndex + direction + photoCount) % photoCount;
  updateViewer();
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.setProperty("--progress", String(Math.min(Math.max(progress, 0), 1)));
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px 14% 0px",
      threshold: 0.04,
    },
  );

  document.querySelectorAll(".reveal, .photo-card").forEach((target) => observer.observe(target));
}

for (let index = 0; index < photoCount; index += 1) {
  photoIndex.append(makeIndexButton(index));
}

chapters.forEach((chapter) => gallery.append(makeChapter(chapter)));

document.querySelectorAll("[data-scroll-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
  });
});

closeButton.addEventListener("click", () => viewer.close());
prevButton.addEventListener("click", () => stepViewer(-1));
nextButton.addEventListener("click", () => stepViewer(1));

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});

viewer.addEventListener("close", () => {
  document.body.classList.remove("is-viewer-open");
});

document.addEventListener("keydown", (event) => {
  if (!viewer.open) return;
  if (event.key === "ArrowLeft") stepViewer(-1);
  if (event.key === "ArrowRight") stepViewer(1);
  if (event.key === "Escape") viewer.close();
});

document.addEventListener("pointermove", (event) => {
  document.body.classList.add("has-pointer");
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

setupReveal();
updateProgress();
