/* document.addEventListener("DOMContentLoaded", () => { */
const offers = [
  {
    bloodType: "A+",
    city: "Abidjan",
    phone: "+225 01 23 45 67",
    date: "2023-08-15",
    name: "Kouassi Konan",
    avatar: "avatar1.png",
  },
  {
    bloodType: "B-",
    city: "Bouaké",
    phone: "+225 09 87 65 43",
    date: "2023-08-12",
    name: "Aya Kouamé",
    avatar: "avatar2.png",
  },
  {
    bloodType: "AB+",
    city: "Yamoussoukro",
    phone: "+225 02 48 16 32",
    date: "2023-08-10",
    name: "Ouattara Souleymane",
    avatar: "avatar3.png",
  },
  {
    bloodType: "O+",
    city: "San-Pédro",
    phone: "+225 07 29 54 18",
    date: "2023-08-08",
    name: "Adja Traoré",
    avatar: "avatar4.png",
  },
  {
    bloodType: "A-",
    city: "Daloa",
    phone: "+225 03 64 92 71",
    date: "2023-08-05",
    name: "Koffi N'Dri",
    avatar: "avatar5.png",
  },
  {
    bloodType: "B+",
    city: "Gagnoa",
    phone: "+225 06 85 19 42",
    date: "2023-08-03",
    name: "Fatou Diabaté",
    avatar: "avatar6.png",
  },
  {
    bloodType: "AB-",
    city: "Divo",
    phone: "+225 01 23 45 67",
    date: "2023-07-30",
    name: "Sébastien Bamba",
    avatar: "avatar7.png",
  },
  {
    bloodType: "O-",
    city: "Korhogo",
    phone: "+225 09 87 65 43",
    date: "2023-07-25",
    name: "Mariam Coulibaly",
    avatar: "avatar8.png",
  },
  {
    bloodType: "A+",
    city: "Man",
    phone: "+225 02 48 16 32",
    date: "2023-07-20",
    name: "Yao Gnangbo",
    avatar: "avatar9.png",
  },
  {
    bloodType: "B-",
    city: "Odienné",
    phone: "+225 07 29 54 18",
    date: "2023-07-15",
    name: "Adja Bakayoko",
    avatar: "avatar10.png",
  },
  {
    bloodType: "AB+",
    city: "Dabou",
    phone: "+225 03 64 92 71",
    date: "2023-07-10",
    name: "Ousmane Diarra",
    avatar: "avatar11.png",
  },
  {
    bloodType: "O+",
    city: "Séguéla",
    phone: "+225 06 85 19 42",
    date: "2023-07-05",
    name: "Aïssata Camara",
    avatar: "avatar12.png",
  },
  {
    bloodType: "A-",
    city: "Bonoua",
    phone: "+225 01 23 45 67",
    date: "2023-06-30",
    name: "Bamba Ouattara",
    avatar: "avatar13.png",
  },
  {
    bloodType: "B+",
    city: "Treichville",
    phone: "+225 09 87 65 43",
    date: "2023-06-25",
    name: "Fatima Diop",
    avatar: "avatar14.png",
  },
  {
    bloodType: "AB-",
    city: "Abobo",
    phone: "+225 02 48 16 32",
    date: "2023-06-20",
    name: "Jean Kouassi",
    avatar: "avatar15.png",
  },
  {
    bloodType: "O-",
    city: "Yopougon",
    phone: "+225 07 29 54 18",
    date: "2023-06-15",
    name: "Aminata Traoré",
    avatar: "avatar16.png",
  },
];

const offersContainer = document.querySelector(".offers-container");
const bloodTypeFilter = document.getElementById("bloodType");
const cityFilter = document.getElementById("city");

function printItems(items, container, createItemFn) {
  container.innerHTML = ""; // Vider le conteneur avant d'y ajouter les nouveaux éléments
  items.forEach((item) => {
    const itemElement = createItemFn(item);
    container.appendChild(itemElement);
  });
}

function createOfferElement(offer) {
  const offerBox = document.createElement("div");
  offerBox.classList.add("bg-white", "shadow-md", "rounded-lg", "p-6");

  const groupe = createInfoP(offer.bloodType);
  const ville = createInfoP(offer.city);
  const phone = createInfoP(offer.phone);
  const date = createInfoP(offer.date);
  const info = createInfoDiv(offer.avatar, offer.name);

  offerBox.appendChild(groupe);
  offerBox.appendChild(ville);
  offerBox.appendChild(phone);
  offerBox.appendChild(date);
  offerBox.appendChild(info);

  return offerBox;
}

function createInfoP(info) {
  const p = document.createElement("p");
  p.textContent = info;
  return p;
}

function createInfoDiv(avatar, name) {
  const divContainer = document.createElement("div");
  divContainer.classList.add("flex", "items-center", "justify-between");

  const divImgName = document.createElement("div");
  divImgName.classList.add("flex", "items-center", "space-x-2");

  const img = document.createElement("img");
  img.src = avatar;
  img.alt = avatar;
  img.classList.add("w-8", "h-8", "rounded-full");

  const span = document.createElement("span");
  span.classList.add("text-gray-700");
  span.textContent = name;

  divImgName.appendChild(img);
  divImgName.appendChild(span);

  const btnContact = document.createElement("button");
  btnContact.classList.add(
    "bg-blue-500",
    "text-white",
    "font-medium",
    "rounded-md",
    "px-4",
    "py-2",
    "hover:bg-blue-600"
  );
  btnContact.textContent = "Contacter";

  divContainer.appendChild(divImgName);
  divContainer.appendChild(btnContact);

  return divContainer;
}

function filterOffers() {
  const selectedBloodType = bloodTypeFilter.value;
  const selectedCity = cityFilter.value;

  let filteredOffers = offers;

  if (selectedBloodType !== "all") {
    filteredOffers = filteredOffers.filter(
      (offer) => offer.bloodType === selectedBloodType
    );
  }

  if (selectedCity !== "all") {
    filteredOffers = filteredOffers.filter(
      (offer) => offer.city === selectedCity
    );
  }

  if (filteredOffers.length === 0) {
    offersContainer.innerHTML =
      "<p class='text-center text-gray-600'>Aucune offre ne correspond à vos critères de filtrage.</p>";
  } else {
    printItems(filteredOffers, offersContainer, createOfferElement);
  }
}

// Remplir les options de la liste déroulante des villes
const uniqueCities = [...new Set(offers.map((offer) => offer.city))];
const citySelect = document.getElementById("city");
uniqueCities.forEach((city) => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  citySelect.appendChild(option);
});

printItems(offers, offersContainer, createOfferElement);
/* });
 */
