function createGallery(imageArray, targetSelector) {
  const gallery = document.querySelector(targetSelector);

  if (gallery) {
    imageArray.forEach((src) => {
      const div = document.createElement("div");
      div.classList.add("gallery-item");

      // Add the wallpaper image with lazy loading
      const img = document.createElement("img");
      img.dataset.src = src; // Use data-src for lazy loading
      img.alt = "Wallpaper";
      img.classList.add("lazy"); // Add a lazy class
      div.appendChild(img);

      // Add the download button
      const downloadButton = document.createElement("a");
      downloadButton.href = src; // Set the file path for download
      downloadButton.download = src.split("/").pop(); // Use the file name for download
      downloadButton.classList.add("download-btn");
      downloadButton.textContent = "Download";
      div.appendChild(downloadButton);

      // Append the item to the gallery
      gallery.appendChild(div);
    });

    // Lazy load images using IntersectionObserver
    const lazyImages = gallery.querySelectorAll(".lazy");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Set the src from data-src
            img.classList.remove("lazy"); // Remove the lazy class
            observer.unobserve(img); // Stop observing
          }
        });
      },
      { rootMargin: "100px" } // Load images slightly before they appear
    );

    lazyImages.forEach((img) => observer.observe(img));
  } else {
    console.error(`Gallery element not found for selector: ${targetSelector}`);
  }
}
const cityWallpapers = [
  "images/city/city1.jpg",
  "images/city/city2.jpg",
  "images/city/city3.jpg",
  "images/city/city4.jpg",
  "images/city/city5.jpg",
  "images/city/city7.jpg",
  "images/city/city8.jpg",
  "images/city/city9.jpg",
  "images/city/city10.jpg",
  "images/city/city11.jpg",
  "images/city/city12.jpg",
  "images/city/city13.jpg",
  "images/city/city15.jpg",
  "images/city/city16.jpg",
  "images/city/city17.jpg",
  "images/city/city18.jpg",
  "images/city/city19.jpg",
];
const natureWallpapers = [
  "images/nature/nature1.jpg",
  "images/nature/nature2.jpg",
  "images/nature/nature3.jpg",
  "images/nature/nature4.jpg",
  "images/nature/nature5.jpg",
  "images/nature/nature6.jpg",
  "images/nature/nature7.jpg",
  "images/nature/nature12.jpg",
  "images/nature/nature9.jpg",
  "images/nature/nature10.jpg",
  "images/nature/nature11.jpg",
  "images/nature/nature12.jpg",
  "images/nature/nature14.jpg",
  "images/nature/nature15.jpg",
  "images/nature/nature16.jpg",
  "images/nature/nature17.jpg",
  "images/nature/nature15.jpg",
  "images/nature/nature16.jpg",
  "images/nature/nature17.jpg",
  "images/nature/nature18.jpg",
  "images/nature/nature19.jpg",
  "images/nature/nature20.jpg",
  "images/nature/nature21.jpg",
  "images/nature/nature22.jpg",
  "images/nature/nature23.jpg",
  "images/nature/nature24.jpg",
  "images/nature/nature25.jpg",
  "images/nature/nature26.jpg",
  "images/nature/nature27.jpg",
  "images/nature/nature28.jpg",
  "images/nature/nature29.jpg",
  "images/nature/nature30.jpg",
  "images/nature/nature31.jpg",
];
const abstractWallpapers = [
  "images/Abstract/Abstract1.jpg",
  "images/Abstract/Abstract2.jpg",
  "images/Abstract/Abstract3.jpg",
  "images/Abstract/Abstract4.jpg",
  "images/Abstract/Abstract5.jpg",
  "images/Abstract/Abstract6.jpg",
  "images/Abstract/Abstract7.jpg",
  "images/Abstract/Abstract11.jpg",
  "images/Abstract/Abstract9.jpg",
  "images/Abstract/Abstract10.jpg",
  "images/Abstract/Abstract12.jpg",
  "images/Abstract/Abstract13.jpg",
  "images/Abstract/Abstract14.jpg",
  "images/Abstract/Abstract15.jpg",
  "images/Abstract/Abstract16.jpg",
  "images/Abstract/Abstract17.jpg",
  "images/Abstract/Abstract18.jpg",
  "images/Abstract/Abstract19.jpg",
  ];
const animeWallpapers = [
  "images/anime/anime1.webp",
  "images/anime/anime2.webp",
  "images/anime/anime4.webp",
  "images/anime/anime5.webp",
  "images/anime/anime6.webp",
  "images/anime/anime7.webp",
  "images/anime/anime8.webp",
  "images/anime/anime9.webp",
  "images/anime/anime10.webp",
  "images/anime/anime11.webp",
  "images/anime/anime12.webp",
  "images/anime/anime13.webp",
  "images/anime/anime14.webp",
  "images/anime/anime15.webp",
  "images/anime/anime16.webp",
  "images/anime/anime17.webp",
  "images/anime/anime18.webp",
  "images/anime/anime19.webp",
  "images/anime/anime20.webp",
  "images/anime/anime21.webp",
  "images/anime/anime22.webp",
  "images/anime/anime23.webp",
  "images/anime/anime24.webp",
  "images/anime/anime26.webp",
  "images/anime/anime27.webp",
  "images/anime/anime28.webp",
  "images/anime/anime29.webp",
  "images/anime/anime30.webp",
  "images/anime/anime31.webp",
  ];
const HeroWallpapers = [
  "images/superheroes/Hero1.webp",
  "images/superheroes/Hero2.webp",
  "images/superheroes/Hero3.webp",
  "images/superheroes/Hero4.webp",
  "images/superheroes/Hero5.webp",
  "images/superheroes/Hero6.webp",
  "images/superheroes/Hero7.webp",
  "images/superheroes/Hero8.webp",
  "images/superheroes/Hero9.webp",
  "images/superheroes/Hero10.webp",
  "images/superheroes/Hero11.webp",
  "images/superheroes/Hero12.webp",
  "images/superheroes/Hero13.webp",
  "images/superheroes/Hero14.webp",
  "images/superheroes/Hero15.webp",
  "images/superheroes/Hero16.webp",
  "images/superheroes/Hero17.webp",
  "images/superheroes/Hero18.webp",
  "images/superheroes/Hero19.webp",
  "images/superheroes/Hero20.webp",
  "images/superheroes/Hero21.webp",
  "images/superheroes/Hero22.webp",
  "images/superheroes/Hero23.webp",
  "images/superheroes/Hero24.webp",
  "images/superheroes/Hero25.webp",
  "images/superheroes/Hero26.webp",
  "images/superheroes/Hero27.webp",
  "images/superheroes/Hero28.webp",
  "images/superheroes/Hero29.webp",
  ];
const BibleWallpapers = [
  "images/bible/bible4.webp",
  "images/bible/bible1.webp",
  "images/bible/bible2.webp",
  "images/bible/bible3.webp",
  "images/bible/bible5.webp",
  "images/bible/bible6.webp",
  "images/bible/bible7.webp",
  "images/bible/bible8.webp",
  "images/bible/bible9.webp",
  "images/bible/bible10.webp",
  "images/bible/bible11.webp",
  "images/bible/bible12.webp",
  "images/bible/bible13.webp",
  "images/bible/bible14.webp",
  "images/bible/bible15.webp",
  "images/bible/bible16.webp",
  "images/bible/bible17.webp",
  "images/bible/bible18.webp",
  "images/bible/bible19.webp",
  "images/bible/bible20.webp",
  "images/bible/bible21.webp",
  "images/bible/bible22.webp",
  ];
const MuslimWallpapers = [
  "images/Muslim/Muslim4.webp",
  "images/Muslim/Muslim1.webp",
  "images/Muslim/Muslim2.webp",
  "images/Muslim/Muslim3.webp",
  "images/Muslim/Muslim4.webp",
  "images/Muslim/Muslim5.webp",
  "images/Muslim/Muslim6.webp",
  "images/Muslim/Muslim7.webp",
  "images/Muslim/Muslim8.webp",
  "images/Muslim/Muslim9.webp",
  "images/Muslim/Muslim10.webp",
  "images/Muslim/Muslim11.webp",
  ];
const GamingWallpapers = [
  "images/Gaming/Gaming1.jpg",
  "images/Gaming/Gaming2.jpg",
  "images/Gaming/Gaming3.jpg",
  "images/Gaming/Gaming4.jpg",
  "images/Gaming/Gaming5.jpg",
  "images/Gaming/Gaming6.jpg",
  "images/Gaming/Gaming7.jpg",
  "images/Gaming/Gaming8.jpg",
  "images/Gaming/Gaming9.jpg",
  "images/Gaming/Gaming10.jpg",
  "images/Gaming/Gaming11.jpg",
  "images/Gaming/Gaming12.jpg",
  "images/Gaming/Gaming13.jpg",
  "images/Gaming/Gaming14.jpg",
  "images/Gaming/Gaming15.jpg",
  "images/Gaming/Gaming16.jpg",
  ];
const OtherWallpapers = [
  "images/Other/Other4.webp",
  "images/Other/Other1.webp",
  "images/Other/Other2.webp",
  "images/Other/Other3.webp",
  "images/Other/Other5.jpg",
  "images/Other/Other6.webp",
  "images/Other/Other7.webp",
  "images/Other/Other8.webp",
  "images/Other/Other9.webp",
  "images/Other/Other10.webp",
  "images/Other/Other11.webp",
  "images/Other/Other12.webp",
  "images/Other/Other13.webp",
  "images/Other/Other14.webp",
  "images/Other/Other15.webp",
  "images/Other/Other16.webp",
  "images/Other/Other17.webp",
  "images/Other/Other20.webp",
  "images/Other/Other19.webp",
  "images/Other/Other1.jpg",
  "images/Other/Other2.jpg",
  "images/Other/Other3.jpg",
  "images/Other/Other4.jpg",
  ];
  
// Create City Gallery
createGallery(cityWallpapers, "#city, .gallery1");
// Create Nature Gallery
createGallery(natureWallpapers, "#nature, .gallery2");
// Create abstract Gallery
createGallery(abstractWallpapers, "#abstract, .gallery3");
// Create anime Gallery
createGallery(animeWallpapers, "#anime, .gallery4");
// Create Hero Gallery
createGallery(HeroWallpapers, "#hero, .gallery5");
// Create bible Gallery
createGallery(BibleWallpapers, "#bible, .gallery6");
// Create muslim Gallery
createGallery(MuslimWallpapers, "#muslim, .gallery7");
// Create gaming Gallery
createGallery(GamingWallpapers, "#gaming, .gallery9");
// Create other Gallery
createGallery(OtherWallpapers, "#other, .gallery8");