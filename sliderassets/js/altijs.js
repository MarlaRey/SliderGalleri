// Når siden er indlæst, skal funktionen generateSlider kaldes
window.addEventListener("load", generateSlider);

// Funktionen generateSlider genererer billedgalleriet
function generateSlider() {
    // Arrayet "images" indeholder stien til billederne, der skal vises
    const images = [
        "sliderassets/img/elephant.jpg",
        "sliderassets/img/great-white.jpg",
        "sliderassets/img/koala.jpg"
    ];

    let slideIndex = 0; // slideIndex holder styr på det aktuelle billede
    const slideshowContainer = document.querySelector(".slideshow-container"); // Vi finder slideshow-container elementet ude i dommen. det er en class, derfor bruger vi queryselecter
    const dotsContainer = document.getElementById("dots-container"); // Vi finder dots-container elementet ude i dommen (det er de små nav-prikker)

    // Funktionen createSlide opretter et enkelt slide 
    function createSlide(image, index) {//funktionen arbejder med parameterene image og index
        const slide = document.createElement("figure"); // Vi opretter et figure-element i dommen som vi kalder slide
        slide.classList.add("mySlides"); // Vi tilføjer klassen "mySlides" til figure elemenetet slide. den klasse styrer vi i css'en

        if (index === slideIndex) {//tjekker, om værdien af index er lig med værdien af slideIndex. 
            slide.style.display = "block"; // Hvis betingelsen er sand, udføres følgende handling: slide.style.display = "block" og billedet bliver synligt.Det er nemlig displayet none som default.
        }

        const imageElement = new Image(); // new Image() er en JavaScript-konstruktør, der bruges til at oprette et nyt Image-objekt. Image-objektet repræsenterer et HTML <img>-element. Ved at bruge new Image() oprettes et Image-objekt, som kan manipuleres og styres programmatisk i JavaScript-koden.
        imageElement.src = image; // Vi angiver stien til det vi vil have i det nye img-tag. image introduceres i toppen af funktionen
        imageElement.addEventListener("load", () => {
            // Når billedet er loaded, vises det ved at tilføje det til slide-elementet
            slide.appendChild(imageElement);
        });

        //Hvis du vil have tal navigation så ind-kommenter denne del:
        // const caption = document.createElement("figcaption"); // Vi opretter et figcaption-element til billedteksten
        // caption.classList.add("numbertext"); // Vi tilføjer klassen "numbertext" til billedteksten
        // caption.textContent = `${index + 1} / ${images.length}`; // Vi sætter billedteksten til "x / y", hvor x er det aktuelle billede og y er det samlede antal billeder
        // slide.appendChild(caption); // Vi tilføjer billedteksten til slide-elementet //det er dette du kan slette hvis du ikke gider have den del på

        slideshowContainer.appendChild(slide); // Vi tilføjer slide-elementet til slideshow-container

        const dot = document.createElement("span"); // Vi opretter et span-element til prikkerne
        dot.classList.add("dot"); // Vi tilføjer klassen "dot" til prikken
        dot.addEventListener("click", () => {
            // Når der klikkes på prikken, ændres slideIndex til det pågældende indeks og showSlides kaldes for at vise det valgte billede
            slideIndex = index;
            showSlides();
        });
        dotsContainer.appendChild(dot); // Vi tilføjer prikken til dots-container
    }

    // Funktionen showSlides skjuler alle slides undtagen det aktuelle slide. Derefter markerer den tilsvarende prik. Den arbejder med et "For Loop" som kan eksekvere en kode-blok x antal gange.
    function showSlides() {
        const slides = document.getElementsByClassName("mySlides"); // Vi henter alle slide-elementerne
        const dots = document.getElementsByClassName("dot"); // Vi henter alle prik-elementerne

        for (let i = 0; i < slides.length; i++) {//for statementet fungerer sådan: (initialization (variablen deklareres); condition (hvis værdien af betingelsen er sand udføres loopet(the statement), ellers afsluttes loopet der. I dette tilfælde testes det om index-tallet er mindre end det fulde antal af index-data); afterthought (Hvis den er til stede udføres denne del, som i dette tilfælde er, at der lægges 1 til i))
            slides[i].style.display = "none"; // Skjul alle slides ved at ændre display-egenskaben til "none"
        }

        for (let i = 0; i < dots.length; i++) { //nyt For Loop i samme funktion som gælder dotsene men fungerer på samme måde.
            dots[i].classList.remove("active"); // Fjern "active" klassen fra alle prikker
        }

        slides[slideIndex].style.display = "block"; // Vis det aktuelle slide ved at ændre display-egenskaben til "block"
        dots[slideIndex].classList.add("active"); // Marker den tilsvarende prik ved at tilføje "active" klassen
    }

    images.forEach((image, index) => createSlide(image, index)); // Opret et slide for hvert billede i arrayet
    showSlides(); // Vis det første slide

    const prevButton = document.createElement("a"); // Opret et "prev" link til at skifte til forrige slide
    prevButton.classList.add("prev"); // Tilføj klassen "prev" til linket
    prevButton.innerHTML = "&#10094;"; // Indsæt venstre-pileikon i linket
    prevButton.addEventListener("click", prevSlide); // Lyt efter klik på linket
    slideshowContainer.appendChild(prevButton); // Tilføj linket til slideshow-container

    const nextButton = document.createElement("a"); // Opret et "next" link til at skifte til næste slide
    nextButton.classList.add("next"); // Tilføj klassen "next" til linket
    nextButton.innerHTML = "&#10095;"; // Indsæt højre-pileikon i linket
    nextButton.addEventListener("click", nextSlide); // Lyt efter klik på linket
    slideshowContainer.appendChild(nextButton); // Tilføj linket til slideshow-container

    function prevSlide() {
        slideIndex = (slideIndex - 1 + images.length) % images.length; // Beregn indekset for forrige slide
        showSlides(); // Vis det forrige slide
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % images.length; // Beregn indekset for næste slide
        showSlides(); // Vis det næste slide
    }
}

//Samme kode uden kommentarer :)
// window.addEventListener("load", generateSlider);

// function generateSlider() {
//   const images = [
//     "assetsTabGal/img/elephant.jpg",
//     "assetsTabGal/img/great-white.jpg",
//     "assetsTabGal/img/koala.jpg"
//   ];
//   let slideIndex = 0;
//   const slideshowContainer = document.querySelector(".slideshow-container");
//   const dotsContainer = document.getElementById("dots-container");

//   function createSlide(image, index) {
//     const slide = document.createElement("figure");
//     slide.classList.add("mySlides");
//     if (index === slideIndex) {
//       slide.style.display = "block";
//     }

//     const imageElement = new Image(); // Bruger "Image" objektet i stedet for at oprette et img-element
//     imageElement.src = image;
//     imageElement.addEventListener("load", () => {
//       // Sørger for at vise billedet, når det er indlæst
//       slide.appendChild(imageElement);
//     });

//     const caption = document.createElement("figcaption");
//     caption.classList.add("numbertext");
//     caption.textContent = `${index + 1} / ${images.length}`;
//     slide.appendChild(caption);

//     slideshowContainer.appendChild(slide);

//     const dot = document.createElement("span");
//     dot.classList.add("dot");
//     dot.addEventListener("click", () => {
//       slideIndex = index;
//       showSlides();
//     });
//     dotsContainer.appendChild(dot);
//   }

//   function showSlides() {
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");

//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }

//     for (let i = 0; i < dots.length; i++) {
//       dots[i].classList.remove("active");
//     }

//     slides[slideIndex].style.display = "block";
//     dots[slideIndex].classList.add("active");
//   }

//   images.forEach((image, index) => createSlide(image, index));
//   showSlides();

//   const prevButton = document.createElement("a");
//   prevButton.classList.add("prev");
//   prevButton.innerHTML = "&#10094;";
//   prevButton.addEventListener("click", prevSlide);
//   slideshowContainer.appendChild(prevButton);

//   const nextButton = document.createElement("a");
//   nextButton.classList.add("next");
//   nextButton.innerHTML = "&#10095;";
//   nextButton.addEventListener("click", nextSlide);
//   slideshowContainer.appendChild(nextButton);

//   function prevSlide() {
//     slideIndex = (slideIndex - 1 + images.length) % images.length;
//     showSlides();
//   }

//   function nextSlide() {
//     slideIndex = (slideIndex + 1) % images.length;
//     showSlides();
//   }
// }
